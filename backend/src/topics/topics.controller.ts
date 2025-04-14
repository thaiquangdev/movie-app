import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TopicService } from './topics.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/utils/enums/role.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateTopicDto } from './dto/create-topic.dto';
import { Topic } from './schemas/topics.schema';
import { UpdateTopicDto } from './dto/update-topic.dto';

@ApiTags('topics')
@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  /**
   * Tạo mới chủ đề
   * @param {Object} createTopicDto - Tạo mới chủ đề
   * @returns {Promise<Topic>} - Trả về chủ đề mới tạo
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('')
  async createTopic(@Body() createTopicDto: CreateTopicDto): Promise<Topic> {
    return this.topicService.createTopic(createTopicDto);
  }

  /**
   * Lấy ra danh sách chủ đề
   * @param {number} page - Số trang
   * @param {number} limit - Số phần tử hiển thị trong một trang
   * @returns {Promise<Promise<{ topics: Topic[], total: number, page: number, totalPages: number }>} - Trả về danh sách chủ đề
   */
  @Get()
  async getTopics(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ): Promise<{
    topics: Topic[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    return this.topicService.getTopics(page, limit);
  }

  /**
   * Cập nhật chủ đề
   * @param {Object} updateTopicDto - Cập nhật chủ đề
   * @param {string} id - Id của chủ đề
   * @returns {Promise<{message:string}>} - Trả về chủ đề đã cập nhật
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Put('/:id')
  async updateTopic(
    @Body() updateTopicDto: UpdateTopicDto,
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    return this.topicService.updateTopic(id, updateTopicDto);
  }

  /**
   * Xóa chủ đề (xóa ảo)
   * @param {string} id - Id của chủ đề
   * @returns {Promise<{message:string}>} - Trả về thông báo xóa thành công
   */
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete('/:id')
  async deleteTopic(@Param('id') id: string): Promise<{ message: string }> {
    return await this.topicService.deletedTopic(id);
  }
}
