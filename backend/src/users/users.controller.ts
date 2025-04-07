import {
  Body,
  Controller,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly userSerivce: UsersService,
  ) {}

  /**
   * Upload avatar
   * @param {Object} file - Ảnh được upload
   * @param {Request} req - Request nhận yêu cầu
   * @returns {Promise<{email:string, fulleName:string, gender?:string, avatar:string}>} - Trả về thông báo
   */
  @Post('/upload-avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  async uploadAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ): Promise<{
    email: string;
    fullName: string;
    gender?: string;
    avatar: string;
  }> {
    const { _id } = req['user'] as { _id: string };
    const result = await this.cloudinaryService.uploadImage(file);
    const user = await this.userSerivce.uploadAvatar(result.public_id, _id);
    return user;
  }

  /**
   * Thay đổi mật khẩu
   * @param {Request} req - Request nhận yêu cầu
   * @param {Object} changePasswordDto - Dữ liu đầu vào
   * @returns {Promise<{message:string}>} - Trả về thông báo
   */
  @UseGuards(AuthGuard)
  @Put('/change-password')
  async changePassword(
    @Req() req: Request,
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    const { _id } = req['user'] as { _id: string };

    return this.userSerivce.changePassword(changePasswordDto, _id);
  }

  /**
   * Cập nhật thông tin người dùng
   * @param {Request} req - Request nhận yêu cầu
   * @param {Object} updateProfileDto - Dữ liu đầu vào
   * @returns {Promise<{email:string, fullName:string, gender?:string, avatar?:string}>} - Trả về thông tin User
   */
  @UseGuards(AuthGuard)
  @Put('/update-profile')
  async updateProfile(
    @Req() req: Request,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<{
    email: string;
    fullName: string;
    gender?: string;
    avatar?: string;
  }> {
    const { _id } = req['user'] as { _id: string };
    return this.userSerivce.updateProfile(updateProfileDto, _id);
  }
}
