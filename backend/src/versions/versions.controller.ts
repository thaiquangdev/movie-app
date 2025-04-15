import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VersionsService } from './versions.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateVersionDto } from './dto/create-version.dto';
import { Versions } from './schemas/versions.schema';
import { UpdateVersionDto } from './dto/update-version.dto';

@Controller('versions')
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) {}

  /**
   * Tạo mới phiên bản
   * @param {Object} createVersionDto - Tạo mới phiên bản
   * @returns {Promise<Verisons>} - Trả về phiên bản mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createVersion(
    @Body() createVersionDto: CreateVersionDto,
  ): Promise<Versions> {
    return this.versionsService.createVersion(createVersionDto);
  }

  /**
   * Lấy ra danh sách phiên bản
   * @returns {Promise<Versions[]>} - Trả về danh sách phiên bản
   */
  @Get()
  async getVersions(): Promise<Versions[]> {
    return this.versionsService.getVersions();
  }

  /**
   * Cập nhật phiên bản
   * @param {Object} updateVersionDto - Cập nhật phiên bản
   * @param {string} id - Id của phiên bản
   * @returns {Promise<{message:string}>} - Trả về phiên bản đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateVersionDto(
    @Body() updateVersionDto: UpdateVersionDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.versionsService.updateVersion(id, updateVersionDto);
  }

  /**
   * Xóa phiên bản (xóa ảo)
   * @param {string} id - Id của phiên bản
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteMovieGenre(
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return await this.versionsService.deleteVersion(id);
  }
}
