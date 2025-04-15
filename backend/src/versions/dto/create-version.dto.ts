import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVersionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên phiên bản không được để trống' })
  versionName: string;
}
