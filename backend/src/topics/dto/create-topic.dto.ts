import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTopicDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên chủ đề không dược để trống' })
  topicName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Màu nền của chủ đề không được để trống' })
  topicBgColor: string;
}
