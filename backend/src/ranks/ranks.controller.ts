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
import { RanksService } from './ranks.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateRankDto } from './dto/create-rank.dto';
import { Rank } from './schemas/ranks.schema';
import { UpdateRankDto } from './dto/update-rank.dto';

@Controller('ranks')
export class RanksController {
  constructor(private readonly ranksService: RanksService) {}

  /**
   * Tạo mới xếp hạng
   * @param {Object} createCountryDto - Tạo mới xếp hạng
   * @returns {Promise<Country>} - Trả về xếp hạng mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createRank(@Body() createRankDto: CreateRankDto): Promise<Rank> {
    return this.ranksService.createCountry(createRankDto);
  }

  /**
   * Lấy ra danh sách chủ đề
   * @returns {Promise<Rank[]>} - Trả về danh sách xếp hạng
   */
  @Get()
  async getCountries(): Promise<Rank[]> {
    return this.ranksService.getRanks();
  }

  /**
   * Cập nhật xếp hạng
   * @param {Object} updateRankDto - Cập nhật xếp hạng
   * @param {string} id - Id của xếp hạng
   * @returns {Promise<{message:string}>} - Trả về xếp hạng đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateRank(
    @Body() updateRankDto: UpdateRankDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.ranksService.updateRank(id, updateRankDto);
  }

  /**
   * Xóa xếp hạng (xóa ảo)
   * @param {string} id - Id của xếp hạng
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteRank(@Param('id') id: string): Promise<{ message: string }> {
    return await this.ranksService.deletedRank(id);
  }
}
