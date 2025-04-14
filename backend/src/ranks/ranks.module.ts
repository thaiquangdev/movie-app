import { Module } from '@nestjs/common';
import { RanksController } from './ranks.controller';
import { RanksService } from './ranks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rank, RankSchema } from './schemas/ranks.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rank.name, schema: RankSchema }]),
    JwtModule,
  ],
  controllers: [RanksController],
  providers: [RanksService],
})
export class RanksModule {}
