import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Topic extends Document {
  @Prop({ required: true, unique: true })
  topicName: string;

  @Prop({ required: true, unique: true })
  topicSlug: string;

  @Prop({ required: true })
  topicBgColor: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
