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
import { CategoriesService } from './categories.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './schemas/categories.schema';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  /**
   * Tạo mới loại phim
   * @param {Object} createCategoryDto - Dữ liệu tạo mới loại phim
   * @returns {Promise<Category>} - Trả về thông tin loại phim đã tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  /**
   * Lấy ra danh sách loại phim
   * @returns {Promise<Category[]>} - Trả về danh sách loại phim
   */
  @Get('')
  async getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }

  /**
   * Cập nhật loại phim
   * @param {string} id - Id của loại phim
   * @param {Object} updateCategoryDto - Dữ liệu cập nhật loại phim
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateCategory(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  /**
   * Xóa loại phim (xóa ảo)
   * @param {string} id - id của quốc gia
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteCategory(@Param() id: string): Promise<{ message: string }> {
    return this.categoryService.deletedCategory(id);
  }
}
