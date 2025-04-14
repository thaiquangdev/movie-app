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
import { CountriesService } from './countries.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './schemas/countries.schema';
import { UpdateCountryDto } from './dto/update-country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  /**
   * Tạo mới quốc gia
   * @param {Object} createCountryDto - Tạo mới quốc gia
   * @returns {Promise<Country>} - Trả về quốc gia mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createCountry(
    @Body() createCountryDto: CreateCountryDto,
  ): Promise<Country> {
    return this.countriesService.createCountry(createCountryDto);
  }

  /**
   * Lấy ra danh sách chủ đề
   * @returns {Promise<Country[]>} - Trả về danh sách quốc gia
   */
  @Get()
  async getCountries(): Promise<Country[]> {
    return this.countriesService.getCountries();
  }

  /**
   * Cập nhật quốc gia
   * @param {Object} updateCountryDto - Cập nhật quốc gia
   * @param {string} id - Id của quốc gia
   * @returns {Promise<{message:string}>} - Trả về quốc gia đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateCountry(
    @Body() updateCountryDto: UpdateCountryDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.countriesService.updateCountry(id, updateCountryDto);
  }

  /**
   * Xóa quốc gia (xóa ảo)
   * @param {string} id - Id của quốc gia
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteTopic(@Param('id') id: string): Promise<{ message: string }> {
    return await this.countriesService.deletedCountry(id);
  }
}
