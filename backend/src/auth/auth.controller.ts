import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/schemas/users.schema';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Đăng ký tài khoản
   * @param createUserDto - Dữ liệu đăng ký tài khoản
   * @returns {Promise<User>} - Dữ liệu sau khi đăng ký tài khoản
   */
  @Post('/register')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ message: string; user: Partial<User> }> {
    return this.authService.createUser(createUserDto);
  }

  /**
   * Đăng nhập tài khoản
   * @param {LoginUserDto} loginUserDto - Dữ liệu đăng nhập tài khoản
   * @param {Response} response - Đối tượng phản hồi HTTP
   * @returns {Promise<{ accessToken: string }>} - Trả về accessToken
   */
  @Post('/login')
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
    @Res() response: Response,
  ): Promise<{ accessToken: string }> {
    const result = await this.authService.loginUser(loginUserDto);

    // Lưu refreshToken vào cookie
    response.cookie('refreshToken', result.refreshToken, {
      maxAge: 60 * 60 * 1000,
      sameSite: 'strict',
      secure: true,
      httpOnly: true,
    });

    return {
      accessToken: result.accessToken,
    };
  }
}
