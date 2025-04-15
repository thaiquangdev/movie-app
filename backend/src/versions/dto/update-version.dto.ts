import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateVersionDto {
  @ApiProperty()
  @IsString()
  versionName?: string;
}
