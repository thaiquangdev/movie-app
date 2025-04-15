import { Module } from '@nestjs/common';
import { YearOfManufactureController } from './year-of-manufacture.controller';
import { YearOfManufactureService } from './year-of-manufacture.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  YearOfManufacture,
  YearOfManuFactureSchema,
} from './schemas/year-of-manufacture.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: YearOfManufacture.name, schema: YearOfManuFactureSchema },
    ]),
    JwtModule,
  ],
  controllers: [YearOfManufactureController],
  providers: [YearOfManufactureService],
})
export class YearOfManufactureModule {}
