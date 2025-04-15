import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateYearOfManufactureDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Năm sản xuất không được để trống' })
  yearOfManufactureName: string;
}
