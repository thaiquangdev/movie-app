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
import { MovieGenreService } from './movie-genre.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMovieGenreDto } from './dto/create-movie-genre.dto';
import { MovieGenre } from './shemas/movie-genre.schema';
import { UpdateMovieGenreDto } from './dto/update-movie-genre.dto';

@Controller('movie-genre')
export class MovieGenreController {
  constructor(private readonly movieGenreService: MovieGenreService) {}

  /**
   * Tạo mới thể loại
   * @param {Object} createMovieGenreDto - Tạo mới thể loại
   * @returns {Promise<Country>} - Trả về thể loại mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createMovieGenre(
    @Body() createMovieGenreDto: CreateMovieGenreDto,
  ): Promise<MovieGenre> {
    return this.movieGenreService.createMovieGenre(createMovieGenreDto);
  }

  /**
   * Lấy ra danh sách chủ đề
   * @returns {Promise<MovieGenre[]>} - Trả về danh sách thể loại
   */
  @Get()
  async getMovieGenres(): Promise<MovieGenre[]> {
    return this.movieGenreService.getMovieGenres();
  }

  /**
   * Cập nhật thể loại
   * @param {Object} updateMovieGenre - Cập nhật thể loại
   * @param {string} id - Id của thể loại
   * @returns {Promise<{message:string}>} - Trả về thể loại đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateMovieGenre(
    @Body() updateMovieGenre: UpdateMovieGenreDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.movieGenreService.updateMovieGenre(id, updateMovieGenre);
  }

  /**
   * Xóa thể loại (xóa ảo)
   * @param {string} id - Id của thể loại
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteMovieGenre(
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return await this.movieGenreService.deletedMovieGenre(id);
  }
}
