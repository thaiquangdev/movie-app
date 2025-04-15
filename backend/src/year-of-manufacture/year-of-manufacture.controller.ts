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
import { YearOfManufactureService } from './year-of-manufacture.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateYearOfManufactureDto } from './dto/create-year-of-manufacture.dto';
import { YearOfManufacture } from './schemas/year-of-manufacture.schema';
import { UpdateYearOfManufactureDto } from './dto/update-year-of-manufacture.dto';

@Controller('year-of-manufacture')
export class YearOfManufactureController {
  constructor(
    private readonly yearOfManufactoryService: YearOfManufactureService,
  ) {}

  /**
   * Tạo mới năm sản xuất
   * @param {Object} createYearOfManufactureDto - Tạo mới năm sản xuất
   * @returns {Promise<Country>} - Trả về năm sản xuất mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createYearOfManufacture(
    @Body() createYearOfManufactureDto: CreateYearOfManufactureDto,
  ): Promise<YearOfManufacture> {
    return this.yearOfManufactoryService.createYearOfManufacture(
      createYearOfManufactureDto,
    );
  }

  /**
   * Lấy ra danh sách chủ đề
   * @returns {Promise<Country[]>} - Trả về danh sách năm sản xuất
   */
  @Get()
  async getYearOfManufactures(): Promise<YearOfManufacture[]> {
    return this.yearOfManufactoryService.getYearOfManufactures();
  }

  /**
   * Cập nhật năm sản xuất
   * @param {Object} udpateYearOfManufactureDto - Cập nhật năm sản xuất
   * @param {string} id - Id của năm sản xuất
   * @returns {Promise<{message:string}>} - Trả về năm sản xuất đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateYearOfManufacture(
    @Body() updateYearOfManufatureDto: UpdateYearOfManufactureDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.yearOfManufactoryService.updateYearOfManuFacture(
      id,
      updateYearOfManufatureDto,
    );
  }

  /**
   * Xóa năm sản xuất (xóa ảo)
   * @param {string} id - Id của năm sản xuất
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteYearOfManufacture(
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return await this.yearOfManufactoryService.deletedYearOfManufacture(id);
  }
}
