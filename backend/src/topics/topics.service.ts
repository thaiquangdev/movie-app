import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './schemas/topics.schema';
import { Model } from 'mongoose';
import slugify from 'slugify';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel(Topic.name) private readonly topicModel: Model<Topic>,
  ) {}

  /**
   * Tạo mới một chủ đề
   * @param {Object} createTopicDto - Dữ liệu đầu vào tạo mới chủ đề
   * @returns {Promise<Topic>} - Trả về thông tin chủ đề
   */
  async createTopic(createTopicDto: CreateTopicDto): Promise<Topic> {
    // Kiểm tra chủ đề đã tồn tại trong hệ thống chưa
    const topicSlug = slugify(createTopicDto.topicName, {
      lower: true,
    });
    const topicExist = await this.findTopicBySlug(topicSlug);

    if (topicExist) {
      throw new BadRequestException('Chủ đề này đã tồn tại trong hệ thống');
    }

    // Tạo mới chủ đề
    const newTopic = await this.topicModel.create({
      topicName: createTopicDto.topicName,
      topicSlug,
      topicBgColor: createTopicDto.topicBgColor,
    });

    return newTopic;
  }

  /**
   * Lấy ra danh sách chủ đề
   * @param {number} page - Số trang
   * @param {number} limit - Số phần tử hiển thị trong trang
   * @returns {Promise<{ topics: Topic[], total: number, page: number, totalPages: number }>}
   */
  async getTopics(
    page?: number,
    limit?: number,
  ): Promise<{
    topics: Topic[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    // Nếu không truyền limit, lấy tất cả
    if (!limit) {
      const topics = await this.topicModel.find({ deleted: false });
      return {
        topics,
        total: topics.length,
        page: 1,
        totalPages: 1,
      };
    }

    const skip = page ? (page - 1) * limit : 0;
    const [topics, total] = await Promise.all([
      this.topicModel.find({ deleted: false }).limit(limit).skip(skip),
      this.topicModel.countDocuments(), // Đếm tổng số category
    ]);

    return {
      topics,
      total,
      page: page || 1,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Cập nhật chủ đề
   * @param {string} id - Id của chủ đề
   * @param {Object} updateTopicDto - Dữ liệu cập nhật chủ đề
   * @returns {Promise<{ message: string }>} - Trả về chủ đề đã cập nhật
   */
  async updateTopic(
    id: string,
    updateTopicDto: UpdateTopicDto,
  ): Promise<{ message: string }> {
    // Kiểm tra chủ đề có tồn tại không
    const topicExist = await this.findTopicById(id);
    if (!topicExist) {
      throw new BadRequestException('Không tìm thấy chủ đề');
    }

    const { topicName, topicBgColor } = updateTopicDto;

    // Kiểm tra nếu tên chủ đề đã tồn tại
    if (topicName) {
      const topicNameExist = await this.topicModel.findOne({
        topicName,
        deleted: false,
        _id: { $ne: id },
      });

      if (topicNameExist) {
        throw new BadRequestException('Tên chủ đề đã tồn tại');
      }
    }

    const topicSlug = topicName
      ? slugify(topicName, { lower: true })
      : topicExist.topicSlug;

    // Cập nhật chủ đề
    await this.topicModel.findByIdAndUpdate(
      id,
      { topicName, topicSlug, topicBgColor },
      { new: true },
    );

    return {
      message: 'Cập nhật chủ đề thành công',
    };
  }

  /**
   * Xóa chủ đề (xóa ảo)
   * @param {string} id - Id của chủ đề
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  async deletedTopic(id: string): Promise<{ message: string }> {
    // Kiểm tra chủ đề có tồn tại trong hệ thống không
    const topicExist = await this.findTopicById(id);
    if (!topicExist) {
      throw new BadRequestException('Không tìm thấy chủ đề trong hệ thống');
    }

    // Xóa chủ đề (cập nhật deleted = true)
    topicExist.deletedAt = new Date();
    await topicExist.save();
    return {
      message: 'Xóa chủ đề thành công',
    };
  }

  /**
   * Xóa vĩnh viễn các chủ đề đã bị xóa ảo quá 30 ngày
   */
  async permanentlyDeleteOldTopics(): Promise<number> {
    const THIRTY_DAYS_AGO = new Date();
    THIRTY_DAYS_AGO.setDate(THIRTY_DAYS_AGO.getDate() - 30);

    const result = await this.topicModel.deleteMany({
      deletedAt: { $lte: THIRTY_DAYS_AGO },
    });

    return result.deletedCount || 0;
  }

  /**
   * Hàm kiểm tra chủ đề trong hệ thống theo slug
   * @param {string} topicSlug - Dữ liệu slug
   * @returns {Promise<Topic | null>} - Trả về thông tin chủ đề hoặc null
   */
  private async findTopicBySlug(topicSlug: string): Promise<Topic | null> {
    return await this.topicModel.findOne({ topicSlug, deletedAt: null });
  }

  /**
   * Hàm kiểm tra chủ đề trong hệ thống theo id
   * @param {string} id - Dữ liệu id
   * @returns {Promise<Topic | null>} - Trả về thông tin chủ đề hoặc null
   */
  private async findTopicById(id: string): Promise<Topic | null> {
    return await this.topicModel.findOne({ _id: id, deletedAt: null });
  }
}
