import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rank } from './schemas/ranks.schema';
import { Model } from 'mongoose';
import { CreateRankDto } from './dto/create-rank.dto';
import slugify from 'slugify';
import { UpdateRankDto } from './dto/update-rank.dto';

@Injectable()
export class RanksService {
  constructor(
    @InjectModel(Rank.name) private readonly rankModel: Model<Rank>,
  ) {}

  /**
   * Tạo mới một xếp hạng
   * @param {Object} createRankDto - Dữ liệu đầu vào tạo mới xếp hạng
   * @returns {Promise<Country>} - Trả về thông tin xếp hạng
   */
  async createCountry(createRankDoto: CreateRankDto): Promise<Rank> {
    // Hàm kiểm tra xếp hạng có tồn tại trong hệ thống không
    const rankSlug = slugify(createRankDoto.rankName, { lower: true });
    const countryExist = await this.findRankBySlug(rankSlug);

    if (countryExist) {
      throw new BadRequestException('xếp hạng đã tồn tại trong hệ thống');
    }

    // Tạo mới xếp hạng
    const newCountry = await this.rankModel.create({
      rankName: createRankDoto.rankName,
      rankSlug,
    });

    return newCountry;
  }

  /**
   * Lấy ra danh sách xếp hạng
   * @returns {Promise<Rank[]>} - Trả về danh sách xếp hạng
   */
  async getRanks(): Promise<Rank[]> {
    return this.rankModel.find();
  }

  /**
   * Cập nhật xếp hạng
   * @param {string} id - Id của xếp hạng
   * @param {Object} updateRankDto - Dữ liệu cập nhật xếp hạng
   * @returns {Promise<{message: string}>} - Trả về thông báo
   */
  async updateRank(
    id: string,
    updateRankDto: UpdateRankDto,
  ): Promise<{ message: string }> {
    // Kiểm tra xếp hạng có tồn tại trong hệ thống không
    const rankExist = await this.findRankById(id);

    if (!rankExist) {
      throw new BadRequestException('Không tìm thấy xếp hạng trong hệ thống');
    }

    // Kiểm tra nếu tên xếp hạng đã tồn tại
    if (rankExist.rankName) {
      const rankNameExist = await this.rankModel.findOne({
        rankName: rankExist.rankName,
        deletedAt: null,
        _id: { $ne: id },
      });

      if (rankNameExist) {
        throw new BadRequestException('Tên xếp hạng đã tồn tại trong hệ thống');
      }
    }

    const rankSlug = updateRankDto.rankName
      ? slugify(updateRankDto.rankName, { lower: true })
      : rankExist.rankSlug;

    // Cập nhật chủ đề
    await this.rankModel.findByIdAndUpdate(
      id,
      {
        countryName: updateRankDto.rankName,
        rankSlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật xếp hạng thành công',
    };
  }

  /**
   * Xóa xếp hạng (xóa ảo)
   * @param {string} id - Id của xếp hạng
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedRank(id: string): Promise<{ message: string }> {
    // Kiểm tra xếp hạng có tồn tại trong hệ thống không
    const rankExist = await this.findRankById(id);
    if (!rankExist) {
      throw new BadRequestException('Không tìm thấy xếp hạng trong hệ thống');
    }

    // Xóa xếp hạng (cập nhật deleted = true)
    rankExist.deletedAt = new Date();
    await rankExist.save();
    return {
      message: 'Xóa xếp hạng thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các xếp hạng đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldRanks(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.rankModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra xếp hạng trong hệ thống bằng slug
   * @param {string} rankSlug - Dữ liệu slug
   * @returns {Promise<Country | null>} - Trả về dữ liệu xếp hạng hoặc null
   */
  private async findRankBySlug(rankSlug: string): Promise<Rank | null> {
    return await this.rankModel.findOne({ rankSlug, deletedAt: null });
  }

  /**
   * Hàm kiểm tra xếp hạng trong hệ thống bằng id
   * @param {string} id - Id xếp hạng
   * @returns {Promise<Rank | null>} - Trả về dữ liệu xếp hạng hoặc null
   */
  private async findRankById(id: string): Promise<Rank | null> {
    return this.rankModel.findOne({ _id: id, deletedAt: null });
  }
}
