import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './schemas/countries.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    JwtModule,
  ],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
