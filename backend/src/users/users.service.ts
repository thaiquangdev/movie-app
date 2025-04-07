import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { ChangePasswordDto } from './dto/change-password.dto';
import { comparePassword, hashPassword } from 'src/common/utils/hash-password';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  /**
   * Cập nhật ảnh đại diện
   * @param {string} url - Url hình ảnh
   * @param {string} userId - Id người dùng
   * @returns {Promise<{email:string, fullName:string, gender?:string, avatar:string}>} - Trả về thông tin User
   */
  async uploadAvatar(
    url: string,
    userId: string,
  ): Promise<{
    email: string;
    fullName: string;
    gender?: string;
    avatar: string;
  }> {
    // Kiểm tra xem user có đúng không
    const userExist = await this.findUserById(userId);
    if (!userExist) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    // Cập nhật ảnh
    userExist.avatar = url;

    await userExist.save();

    return {
      email: userExist.email,
      fullName: userExist.fullName,
      gender: userExist.gender,
      avatar: userExist.avatar,
    };
  }

  /**
   * Thay đổi mật khẩu
   * @param {Object} changePasswordDto - Dữ liệu thay đổi mật khẩu
   * @param {string} userId - Id người dùng
   * @returns {Promise<{message:string}>} - Trả về thông báo
   */
  async changePassword(
    changePasswordDto: ChangePasswordDto,
    userId: string,
  ): Promise<{ message: string }> {
    // Kiểm tra người dùng có tồn tại không
    const userExist = await this.findUserById(userId);

    if (!userExist) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    // Kiểm tra mật khẩu cũ có đúng không
    const passowrdCompare = comparePassword(
      changePasswordDto.oldPassword,
      userExist.password,
    );

    if (!passowrdCompare) {
      throw new BadRequestException('Mật khẩu cũ không đúng');
    }

    // Hash mật khẩu mới
    const passwordHash = hashPassword(changePasswordDto.newPassword);

    // Lưu password mới vào db
    userExist.password = passwordHash;

    await userExist.save();

    return {
      message: 'Thay đổi mật khẩu thành công',
    };
  }

  /**
   * Cập nhật thông tin người dùng
   * @param {Object} updateProfileDto - Dữ liệu cập nhật người dùng
   * @param {string} userId - Id người dùng
   * @returns {Promise<{email:string, fullName:string, gender?:string, avatar?:string}>} - Trả về thông tin User
   */
  async updateProfile(
    updateProfileDto: UpdateProfileDto,
    userId: string,
  ): Promise<{
    email: string;
    fullName: string;
    gender?: string;
    avatar?: string;
  }> {
    // Kiểm tra người dùng có tồn tại không
    const userExist = await this.findUserById(userId);

    if (!userExist) {
      throw new BadRequestException('Không tìm thấy người dùng');
    }

    // Cập nhật thông tin người dùng
    userExist.fullName = updateProfileDto.fullName || userExist.fullName;
    userExist.gender = updateProfileDto.gender || userExist.gender;

    await userExist.save();

    return {
      email: userExist.email,
      fullName: userExist.fullName,
      gender: userExist.gender,
      avatar: userExist.avatar,
    };
  }

  /**
   * Hàm kiểm tra user có tồn tại không
   * @param {string} userId - ID của người dùng
   * @returns {Promise<User | null>} - Trả về thông tin user hoặc null
   */
  async findUserById(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).lean();
  }
}
