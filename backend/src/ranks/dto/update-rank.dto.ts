import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRankDto {
  @ApiProperty()
  @IsString()
  rankName?: string;
}
