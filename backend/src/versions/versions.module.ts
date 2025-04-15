import { Module } from '@nestjs/common';
import { VersionsController } from './versions.controller';
import { VersionsService } from './versions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Versions, VersionsSchema } from './schemas/versions.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Versions.name, schema: VersionsSchema },
    ]),
    JwtModule,
  ],
  controllers: [VersionsController],
  providers: [VersionsService],
})
export class VersionsModule {}
