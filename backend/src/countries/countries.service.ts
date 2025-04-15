import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './schemas/countries.schema';
import { Model } from 'mongoose';
import { CreateCountryDto } from './dto/create-country.dto';
import slugify from 'slugify';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private readonly countrySchema: Model<Country>,
  ) {}

  /**
   * Tạo mới một quốc gia
   * @param {Object} createCountryDto - Dữ liệu đầu vào tạo mới quốc gia
   * @returns {Promise<Country>} - Trả về thông tin quốc gia
   */
  async createCountry(createCountryDto: CreateCountryDto): Promise<Country> {
    // Hàm kiểm tra quốc gia có tồn tại trong hệ thống không
    const countrySlug = slugify(createCountryDto.countryName, { lower: true });
    const countryExist = await this.findCountryBySlug(countrySlug);

    if (countryExist) {
      throw new BadRequestException('Quốc gia đã tồn tại trong hệ thống');
    }

    // Tạo mới quốc gia
    const newCountry = await this.countrySchema.create({
      countryName: createCountryDto.countryName,
      countrySlug,
    });

    return newCountry;
  }

  /**
   * Lấy ra danh sách quốc gia
   * @returns {Promise<Country[]>} - Trả về danh sách quốc gia
   */
  async getCountries(): Promise<Country[]> {
    return this.countrySchema.find();
  }

  /**
   * Cập nhật quốc gia
   * @param {string} id - Id của quốc gia
   * @param {Object} updateCountryDto - Dữ liệu cập nhật quốc gia
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  async updateCountry(
    id: string,
    updateCountryDto: UpdateCountryDto,
  ): Promise<{ message: string }> {
    // Kiểm tra quốc gia có tồn tại trong hệ thống không
    const countryExist = await this.findCountryById(id);

    if (!countryExist) {
      throw new BadRequestException('Không tìm thấy quốc gia trong hệ thống');
    }

    // Kiểm tra nếu tên quốc gia đã tồn tại
    if (updateCountryDto.countryName) {
      const countryNameExist = await this.countrySchema.findOne({
        countryName: updateCountryDto.countryName,
        deletedAt: null,
        _id: { $ne: id },
      });

      if (countryNameExist) {
        throw new BadRequestException('Tên quốc gia đã tồn tại trong hệ thống');
      }
    }

    const countrySlug = updateCountryDto.countryName
      ? slugify(updateCountryDto.countryName, { lower: true })
      : countryExist.countrySlug;

    // Cập nhật chủ đề
    await this.countrySchema.findByIdAndUpdate(
      id,
      {
        countryName: updateCountryDto.countryName,
        countrySlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật quốc gia thành công',
    };
  }

  /**
   * Xóa quốc gia (xóa ảo)
   * @param {string} id - Id của quốc gia
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedCountry(id: string): Promise<{ message: string }> {
    // Kiểm tra quốc gia có tồn tại trong hệ thống không
    const countryExist = await this.findCountryById(id);
    if (!countryExist) {
      throw new BadRequestException('Không tìm thấy quốc gia trong hệ thống');
    }

    // Xóa quốc gia (cập nhật deleted = true)
    countryExist.deletedAt = new Date();
    await countryExist.save();
    return {
      message: 'Xóa quốc gia thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các quốc gia đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldCountries(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.countrySchema.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra quốc gia trong hệ thống bằng slug
   * @param {string} countrySlug - Dữ liệu slug
   * @returns {Promise<Country | null>} - Trả về dữ liệu quốc gia hoặc null
   */
  private async findCountryBySlug(
    countrySlug: string,
  ): Promise<Country | null> {
    return await this.countrySchema.findOne({ countrySlug, deletedAt: null });
  }

  /**
   * Hàm kiểm tra quốc gia trong hệ thống bằng id
   * @param {string} id - Id quốc gia
   * @returns {Promise<Country | null>} - Trả về dữ liệu quốc gia hoặc null
   */
  private async findCountryById(id: string): Promise<Country | null> {
    return this.countrySchema.findOne({ _id: id, deletedAt: null });
  }
}
