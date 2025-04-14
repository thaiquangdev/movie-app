import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/categories.schema';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import slugify from 'slugify';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  /**
   * Tạo mới loại phim
   * @param {Object} createCategoryDto - Dữ liệu tạo mới loại phim
   * @returns {Promise<Category>} - Trả về thông tin loại phim đã tạo
   */
  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    // Hàm kiểm tra quốc gia có tồn tại trong hệ thống không
    const categorySlug = slugify(createCategoryDto.categoryName, {
      lower: true,
    });
    const categoryExist = await this.findCategoryBySlug(categorySlug);

    if (categoryExist) {
      throw new BadRequestException('Loại phim đã tồn tại trong hệ thống');
    }

    // Tạo mới quốc gia
    const newCategory = await this.categoryModel.create({
      categoryName: createCategoryDto.categoryName,
      categorySlug,
    });

    return newCategory;
  }

  /**
   * Lấy ra danh sách loại phim
   * @returns {Promise<Category[]>} - Trả về danh sách loại phim
   */
  async getCategories(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  /**
   * Cập nhật loại phim
   * @param {string} id - Id của loại phim
   * @param {Object} updateCategoryDto - Dữ liệu cập nhật loại phim
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    // Kiểm tra loại phim có tồn tại trong hệ thống không
    const categoryExist = await this.findCategoryById(id);

    if (!categoryExist) {
      throw new BadRequestException('Không tìm thấy loại phim trong hệ thống');
    }

    // Kiểm tra nếu tên loại phim đã tồn tại
    if (updateCategoryDto.categoryName) {
      const categoryNameExist = await this.categoryModel.findOne({
        categoryName: updateCategoryDto.categoryName,
        deletedAt: null,
        _id: { $ne: id },
      });

      if (categoryNameExist) {
        throw new BadRequestException(
          'Tên loại phim đã tồn tại trong hệ thống',
        );
      }
    }

    const categorySlug = updateCategoryDto.categoryName
      ? slugify(updateCategoryDto.categoryName, { lower: true })
      : categoryExist.categorySlug;

    // Cập nhật loại phim
    await this.categoryModel.findByIdAndUpdate(
      id,
      {
        categoryName: updateCategoryDto.categoryName,
        categorySlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật loại phim thành công',
    };
  }

  /**
   * Xóa loại phim (xóa ảo)
   * @param {string} id - id của quốc gia
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedCategory(id: string): Promise<{ message: string }> {
    const categoryExist = await this.findCategoryById(id);
    if (!categoryExist) {
      throw new BadRequestException('Không tìm thấy loại phim trong hệ thống');
    }

    // Xóa loại phim
    categoryExist.deletedAt = new Date();
    await categoryExist.save();
    return {
      message: 'Xóa loại phim thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các loại phim đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldCategories(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.categoryModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra loại phim trong hệ thống bằng slug
   * @param {string} categorySlug - Dữ liệu slug
   * @returns {Promise<Category | null>} - Trả về dữ liệu loại phim hoặc null
   */
  private async findCategoryBySlug(
    categorySlug: string,
  ): Promise<Category | null> {
    return await this.categoryModel.findOne({ categorySlug, deletedAt: null });
  }

  /**
   * Hàm kiểm tra loại phim trong hệ thống bằng id
   * @param {string} id - Id loại phim
   * @returns {Promise<Country | null>} - Trả về dữ liệu loại phim hoặc null
   */
  private async findCategoryById(id: string): Promise<Category | null> {
    return await this.categoryModel.findOne({ _id: id, deletedAt: null });
  }
}
