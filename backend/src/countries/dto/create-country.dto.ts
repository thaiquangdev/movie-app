import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên quốc gia không được để trống' })
  countryName: string;
}
