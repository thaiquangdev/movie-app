import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateProfileDto {
  @ApiProperty()
  @IsString()
  fullName?: string;

  @ApiProperty()
  @IsString()
  gender?: string;
}
