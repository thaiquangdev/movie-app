import { Module } from '@nestjs/common';
import { MovieGenreController } from './movie-genre.controller';
import { MovieGenreService } from './movie-genre.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieGenre, MovieGenreSchema } from './shemas/movie-genre.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MovieGenre.name, schema: MovieGenreSchema },
    ]),
    JwtModule,
  ],
  controllers: [MovieGenreController],
  providers: [MovieGenreService],
})
export class MovieGenreModule {}
