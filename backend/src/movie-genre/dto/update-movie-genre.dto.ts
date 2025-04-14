import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateMovieGenreDto {
  @ApiProperty()
  @IsString()
  movieGenreName: string;
}
