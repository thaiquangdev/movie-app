import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateYearOfManufactureDto {
  @ApiProperty()
  @IsString()
  yearOfManufactureName?: string;
}
