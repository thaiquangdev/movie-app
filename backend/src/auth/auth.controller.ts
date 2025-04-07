import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/users/schemas/users.schema';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from './auth.guard';

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
   * @returns {Promise<{ accessToken: string }>} - Trả về accessToken
   */
  @Post('/login')
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    const result = await this.authService.loginUser(loginUserDto);
    return result;
  }

  /**
   * Đăng xuất tài khoản
   * @param {string} refreshToken - Token
   * @returns {Promise<{ message: string }>} - Trả về thông báo
   */
  @UseGuards(AuthGuard)
  @Post('/logout')
  async logoutUser(
    @Body('refreshToken') refreshToken: string,
  ): Promise<{ message: string }> {
    const result = await this.authService.logoutUser(refreshToken);

    return result;
  }
}
