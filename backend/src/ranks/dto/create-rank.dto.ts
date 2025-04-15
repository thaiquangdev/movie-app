import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRankDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên xếp hạng không được để trống' })
  rankName: string;
}
