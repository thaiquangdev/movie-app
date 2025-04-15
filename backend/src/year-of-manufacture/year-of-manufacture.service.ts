import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { YearOfManufacture } from './schemas/year-of-manufacture.schema';
import { Model } from 'mongoose';
import { CreateYearOfManufactureDto } from './dto/create-year-of-manufacture.dto';
import slugify from 'slugify';
import { UpdateYearOfManufactureDto } from './dto/update-year-of-manufacture.dto';

@Injectable()
export class YearOfManufactureService {
  constructor(
    @InjectModel(YearOfManufacture.name)
    private readonly yearOfManufactureModel: Model<YearOfManufacture>,
  ) {}

  /**
   * Tạo mới một năm sản xuất
   * @param {Object} createYearOfManufactureDto - Dữ liệu đầu vào tạo mới một năm sản xuất
   * @returns {Promise<YearOfManufacture>} - Trả về thông tin năm sản xuất
   */
  async createYearOfManufacture(
    createYearOfManufacture: CreateYearOfManufactureDto,
  ): Promise<YearOfManufacture> {
    // Hàm kiểm tra năm sản xuất có tồn tại trong hệ thống không
    const yearOfManufactureSlug = slugify(
      createYearOfManufacture.yearOfManufactureName,
      {
        lower: true,
      },
    );
    const yearOfManufactureExist = await this.findYearOfManufactureBySlug(
      yearOfManufactureSlug,
    );

    if (yearOfManufactureExist) {
      throw new BadRequestException('năm sản xuất đã tồn tại trong hệ thống');
    }

    // Tạo mới năm sản xuất
    const newYearOfManufacture = await this.yearOfManufactureModel.create({
      yearOfManuFactureName: createYearOfManufacture.yearOfManufactureName,
      yearOfManufactureSlug,
    });

    return newYearOfManufacture;
  }

  /**
   * Lấy ra danh sách năm sản xuất
   * @returns {Promise<YearOfManufacture[]>} - Trả về danh sách năm sản xuất
   */
  async getYearOfManufactures(): Promise<YearOfManufacture[]> {
    return await this.yearOfManufactureModel.find();
  }

  /**
   * Cập nhật năm sản xuất
   * @param {string} id - Id của năm sản xuất
   * @param {Object} updateYearOfManufactureDto - Dữ liệu cập nhật năm sản xuất
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  async updateYearOfManuFacture(
    id: string,
    updateYearOfManufactureDto: UpdateYearOfManufactureDto,
  ): Promise<{ message: string }> {
    // Kiểm tra năm sản xuất có tồn tại trong hệ thống không
    const yearOfManufactureExist = await this.findYearOfManufactureById(id);

    if (!yearOfManufactureExist) {
      throw new BadRequestException(
        'Không tìm thấy năm sản xuất trong hệ thống',
      );
    }

    // Kiểm tra nếu tên năm sản xuất đã tồn tại
    if (updateYearOfManufactureDto.yearOfManufactureName) {
      const yearOfManufactureNameExist =
        await this.yearOfManufactureModel.findOne({
          yearOfManuFactureName:
            updateYearOfManufactureDto.yearOfManufactureName,
          deletedAt: null,
          _id: { $ne: id },
        });

      if (yearOfManufactureNameExist) {
        throw new BadRequestException(
          'Tên năm sản xuất đã tồn tại trong hệ thống',
        );
      }
    }

    const yearOfManufactureSlug =
      updateYearOfManufactureDto.yearOfManufactureName
        ? slugify(updateYearOfManufactureDto.yearOfManufactureName, {
            lower: true,
          })
        : yearOfManufactureExist.yearOfManufactureSlug;

    // Cập nhật năm sản xuất
    await this.yearOfManufactureModel.findByIdAndUpdate(
      id,
      {
        yearOfManufactureName: updateYearOfManufactureDto.yearOfManufactureName,
        yearOfManufactureSlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật năm sản xuất thành công',
    };
  }

  /**
   * Xóa năm sản xuất (xóa ảo)
   * @param {string} id - Id của năm sản xuất
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedYearOfManufacture(id: string): Promise<{ message: string }> {
    // Kiểm tra năm sản xuất có tồn tại trong hệ thống không
    const yearOfManufactureExist = await this.findYearOfManufactureById(id);
    if (!yearOfManufactureExist) {
      throw new BadRequestException(
        'Không tìm thấy năm sản xuất trong hệ thống',
      );
    }

    // Xóa năm sản xuất (cập nhật deleted = true)
    yearOfManufactureExist.deletedAt = new Date();
    await yearOfManufactureExist.save();
    return {
      message: 'Xóa năm sản xuất thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các năm sản xuất đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldYearOfManufactures(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.yearOfManufactureModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra năm sản xuất trong hệ thống bằng slug
   * @param {string} yearOfManufactureSlug - Dữ liệu slug
   * @returns {Promise<MovieGenre | null>} - Trả về dữ liệu năm sản xuất hoặc null
   */
  private async findYearOfManufactureBySlug(
    yearOfManufactureSlug: string,
  ): Promise<YearOfManufacture | null> {
    return await this.yearOfManufactureModel.findOne({
      yearOfManufactureSlug,
      deletedAt: null,
    });
  }

  /**
   * Hàm kiểm tra năm sản xuất trong hệ thống bằng id
   * @param {string} id - Id năm sản xuất
   * @returns {Promise<MovieGenre | null>} - Trả về dữ liệu năm sản xuất hoặc null
   */
  private async findYearOfManufactureById(
    id: string,
  ): Promise<YearOfManufacture | null> {
    return this.yearOfManufactureModel.findOne({ _id: id, deletedAt: null });
  }
}
