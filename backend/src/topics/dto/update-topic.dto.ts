import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTopicDto {
  @IsNotEmpty()
  @IsString()
  topicName: string;

  @IsNotEmpty()
  @IsString()
  topicBgColor: string;
}
