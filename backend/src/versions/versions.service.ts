import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Versions } from './schemas/versions.schema';
import { Model } from 'mongoose';
import { CreateVersionDto } from './dto/create-version.dto';
import slugify from 'slugify';
import { UpdateVersionDto } from './dto/update-version.dto';

@Injectable()
export class VersionsService {
  constructor(
    @InjectModel(Versions.name) private readonly versionModel: Model<Versions>,
  ) {}

  /**
   * Tạo mới phiên bản
   * @param {Object} createVersionDto - Tạo mới một phiên bản
   * @returns {Promise<Version>} - Trả về phiên bản mới đã tạo
   */
  async createVersion(createVersionDto: CreateVersionDto): Promise<Versions> {
    // Hàm kiểm tra phiên bản có tồn tại trong hệ thống không
    const versionSlug = slugify(createVersionDto.versionName);
    const versionExist = await this.findVersionBySlug(versionSlug);

    if (versionExist) {
      throw new BadRequestException('Phiên bản này đã tồn tại trong hệ thống');
    }

    // Tạo mới phiên bản
    const newVersion = await this.versionModel.create({
      versionName: createVersionDto.versionName,
      versionSlug,
    });

    return newVersion;
  }

  /**
   * Lấy ra danh sách phiên bản
   * @returns {Promise<Versions[]>} - Trả vể danh sách phiên bản
   */
  async getVersions(): Promise<Versions[]> {
    return await this.versionModel.find();
  }

  /**
   * Cập nhật phiên bản
   * @param {string} id - Id của phiên bản
   * @param {Object} updateVersionDto - Dữ liệu cập nhật phiên bản
   * @returns {Promise<{message:string}>} - Trả về thông báo
   */
  async updateVersion(id: string, updateVersionDto: UpdateVersionDto) {
    // Kiểm tra phiên bản có tồn tại trong hệ thống không
    const versionExist = await this.findVersionById(id);

    if (!versionExist) {
      throw new BadRequestException('Không tìm thấy phiên bản trong hệ thống');
    }

    // Kiểm tra nếu tên phiên bản đã tồn tại
    if (updateVersionDto.versionName) {
      const versionNameExist = await this.versionModel.findOne({
        versionName: updateVersionDto.versionName,
        deletedAt: null,
        _id: { $ne: id },
      });

      if (versionNameExist) {
        throw new BadRequestException(
          'Tên phiên bản đã tồn tại tropng hệ thống',
        );
      }
    }

    const versionSlug = updateVersionDto.versionName
      ? slugify(updateVersionDto.versionName, { lower: true })
      : versionExist.versionSlug;

    // Cập nhật thể loại
    await this.versionModel.findByIdAndUpdate(
      id,
      {
        versionName: updateVersionDto.versionName,
        versionSlug,
      },
      { new: true },
    );

    return {
      message: 'Cập nhật phiên bản thành công',
    };
  }

  /**
   * Xóa phiên bản (xóa ảo)
   * @param {string} id - Id của phiên bản
   * @returns {Promise<{message: string}>} - Trả về thông báo khi xóa thành công
   */
  async deleteVersion(id: string) {
    // Kiểm tra phiên bản có tồn tại trong hệ thống không
    const versionExist = await this.findVersionById(id);
    if (!versionExist) {
      throw new BadRequestException('Không tìm thấy phiên bản trong hệ thống');
    }

    // Xóa phiên bản
    versionExist.deletedAt = new Date();
    await versionExist.save();

    return {
      message: 'Xóa phiên bản thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các phiên bản đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldVersions(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.versionModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra phiên bản trong hệ thống bằng slug
   * @param {string} versionSlug - Dữ liệu slug
   * @returns {Promise<VersionSlug | null>} - Trả về dữ liệu phiên bản hoặc null
   */
  private async findVersionBySlug(
    versionSlug: string,
  ): Promise<Versions | null> {
    return this.versionModel.findOne({ versionSlug, deletedAt: null });
  }

  /**
   * Hàm kiểm tra phiên bản trong hệ thống bằng id
   * @param {string} id - Id thể loại
   * @returns {Promise<Versions | null>} - Trả về dữ liệu phiên bản hoặc null
   */
  private async findVersionById(id: string): Promise<Versions | null> {
    return this.versionModel.findOne({ _id: id, deletedAt: null });
  }
}
