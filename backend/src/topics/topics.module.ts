import { Module } from '@nestjs/common';
import { TopicController } from './topics.controller';
import { TopicService } from './topics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from './schemas/topics.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]),
    JwtModule,
  ],
  controllers: [TopicController],
  providers: [TopicService],
})
export class TopicModule {}
