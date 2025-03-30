import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { comparePassword, hashPassword } from 'src/common/utils/hash-password';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Đăng ký tài khoản
   * @param createUserDto - Dữ liệu đăng ký tài khoản
   * @returns {Promise<User>} - Dữ liệu sau khi đăng ký tài khoản
   */
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ message: string; user: Partial<User> }> {
    // Kiểm tra email có tồn tại không
    const userExists = await this.findByEmail(createUserDto.email);
    if (userExists) {
      throw new ConflictException('Email này đã tồn tại');
    }

    // Hash mật khẩu
    const passwordHash = hashPassword(createUserDto.password);

    // Tạo mới người dùng
    const user = await this.userModel.create({
      email: createUserDto.email,
      fullName: createUserDto.fullName,
      password: passwordHash,
    });

    return {
      message: 'Đăng ký tài khoản thành công',
      user: {
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
    };
  }

  /**
   * Đăng nhập tài khoản
   * @param loginUserDto - Dữ liệu đăng nhập tài khoản
   * @returns {Promise<{accessToken:string, refreshToken:string}>} - Trả về accessToken và refreshToken
   */
  async loginUser(
    loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    // Kiểm tra email đã tồn tại chưa
    const userExists = await this.findByEmail(loginUserDto.email);
    if (!userExists) {
      throw new HttpException(
        'Email hoặc mật khẩu không đúng',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Kiểm tra mật khẩu có đúng không
    const passwordCompare = comparePassword(
      loginUserDto.password,
      userExists.password,
    );
    if (!passwordCompare) {
      throw new HttpException(
        'Email hoặc mật khẩu không đúng',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Tạo mới accessToken và refreshToken
    const token = await this.generateToken(
      userExists._id as string,
      userExists.email,
      userExists.role,
    );

    // Lưu refresh token vào db
    userExists.refreshToken = token.refreshToken;

    await userExists.save();

    return token;
  }

  /**
   * Hàm kiểm tra xem người dùng có tồn tại hay không
   * @param {string} email - Email của người dùng
   * @returns {Promise<User | null>} - Trả về dữ liệu của người dùng nếu tìm thấy, ngược lại trả về null
   */
  private async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }

  /**
   * Hàm tạo mới accessToken và refreshToken
   * @param {string} _id - ID của người dùng
   * @param {string} email - Email của người dùng
   * @param {string} role - Vai trò của người dùng
   * @returns {Promise<{accessToken: string, refreshToken: string}>} - Trả về accessToken và refreshToken
   */
  private async generateToken(
    _id: string,
    email: string,
    role: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = await this.jwtService.signAsync(
      { _id, email, role },
      {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      { _id, email, role },
      {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN'),
      },
    );

    return { accessToken, refreshToken };
  }
}
