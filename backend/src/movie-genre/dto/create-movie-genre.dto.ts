import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieGenreDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Tên thể loại không được để trống' })
  movieGenreName: string;
}
