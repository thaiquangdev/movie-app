import { Module } from '@nestjs/common';
import { VersionsController } from './versions.controller';
import { VersionsService } from './versions.service';

@Module({
  controllers: [VersionsController],
  providers: [VersionsService]
})
export class VersionsModule {}
