import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { TopicModule } from './topics/topics.module';
import { CountriesModule } from './countries/countries.module';
import { CategoriesModule } from './categories/categories.module';
import { RanksModule } from './ranks/ranks.module';
import { MovieGenreModule } from './movie-genre/movie-genre.module';
import { VersionsModule } from './versions/versions.module';
import { YearOfManufactureModule } from './year-of-manufacture/year-of-manufacture.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    UsersModule,
    AuthModule,
    CloudinaryModule,
    TopicModule,
    CountriesModule,
    CategoriesModule,
    RanksModule,
    MovieGenreModule,
    VersionsModule,
    YearOfManufactureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
