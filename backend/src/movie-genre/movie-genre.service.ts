import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MovieGenre } from './shemas/movie-genre.schema';
import { Model } from 'mongoose';
import { CreateMovieGenreDto } from './dto/create-movie-genre.dto';
import slugify from 'slugify';
import { UpdateMovieGenreDto } from './dto/update-movie-genre.dto';

@Injectable()
export class MovieGenreService {
  constructor(
    @InjectModel(MovieGenre.name)
    private readonly movieGenreModel: Model<MovieGenre>,
  ) {}

  /**
   * Tạo mới một thể loại
   * @param {Object} createMovieGenreDto - Dữ liệu đầu vào tạo mới một thể loại
   * @returns {Promise<MovieGenre>} - Trả về thông tin thể loại
   */
  async createMovieGenre(
    createMovieGenreDto: CreateMovieGenreDto,
  ): Promise<MovieGenre> {
    // Hàm kiểm tra thể loại có tồn tại trong hệ thống không
    const movieGenreSlug = slugify(createMovieGenreDto.movieGenreName, {
      lower: true,
    });
    const movieGenreExist = await this.findMovieGenreBySlug(movieGenreSlug);

    if (movieGenreExist) {
      throw new BadRequestException('thể loại đã tồn tại trong hệ thống');
    }

    // Tạo mới thể loại
    const newMovieGenre = await this.movieGenreModel.create({
      movieGenreName: createMovieGenreDto.movieGenreName,
      movieGenreSlug,
    });

    return newMovieGenre;
  }

  /**
   * Lấy ra danh sách thể loại
   * @returns {Promise<Country[]>} - Trả về danh sách thể loại
   */
  async getMovieGenres(): Promise<MovieGenre[]> {
    return this.movieGenreModel.find();
  }

  /**
   * Cập nhật thể loại
   * @param {string} id - Id của thể loại
   * @param {Object} updateMovieGenreDto - Dữ liệu cập nhật thể loại
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  async updateMovieGenre(
    id: string,
    updateMovieGenre: UpdateMovieGenreDto,
  ): Promise<{ message: string }> {
    // Kiểm tra thể loại có tồn tại trong hệ thống không
    const movieGenreExist = await this.findMovieGenreById(id);

    if (!movieGenreExist) {
      throw new BadRequestException('Không tìm thấy thể loại trong hệ thống');
    }

    // Kiểm tra nếu tên thể loại đã tồn tại
    if (updateMovieGenre.movieGenreName) {
      const movieGenreNameExist = await this.movieGenreModel.findOne({
        movieGenreName: updateMovieGenre.movieGenreName,
        deletedAt: null,
        _id: { $ne: id },
      });

      if (movieGenreNameExist) {
        throw new BadRequestException('Tên thể loại đã tồn tại trong hệ thống');
      }
    }

    const movieGenreSlug = updateMovieGenre.movieGenreName
      ? slugify(updateMovieGenre.movieGenreName, { lower: true })
      : movieGenreExist.movieGenreSlug;

    // Cập nhật thể loại
    await this.movieGenreModel.findByIdAndUpdate(
      id,
      {
        movieGenreName: updateMovieGenre.movieGenreName,
        movieGenreSlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật thể loại thành công',
    };
  }

  /**
   * Xóa thể loại (xóa ảo)
   * @param {string} id - Id của thể loại
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedMovieGenre(id: string): Promise<{ message: string }> {
    // Kiểm tra thể loại có tồn tại trong hệ thống không
    const movieGenreExist = await this.findMovieGenreById(id);
    if (!movieGenreExist) {
      throw new BadRequestException('Không tìm thấy thể loại trong hệ thống');
    }

    // Xóa thể loại (cập nhật deleted = true)
    movieGenreExist.deletedAt = new Date();
    await movieGenreExist.save();
    return {
      message: 'Xóa thể loại thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các thể loại đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldMovieGenders(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.movieGenreModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra thể loại trong hệ thống bằng slug
   * @param {string} movieGenreSlug - Dữ liệu slug
   * @returns {Promise<MovieGenre | null>} - Trả về dữ liệu thể loại hoặc null
   */
  private async findMovieGenreBySlug(
    movieGenreSlug: string,
  ): Promise<MovieGenre | null> {
    return await this.movieGenreModel.findOne({
      movieGenreSlug,
      deletedAt: null,
    });
  }

  /**
   * Hàm kiểm tra thể loại trong hệ thống bằng id
   * @param {string} id - Id thể loại
   * @returns {Promise<MovieGenre | null>} - Trả về dữ liệu thể loại hoặc null
   */
  private async findMovieGenreById(id: string): Promise<MovieGenre | null> {
    return this.movieGenreModel.findOne({ _id: id, deletedAt: null });
  }
}
