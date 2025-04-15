import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Rank extends Document {
  @Prop({ required: true, unique: true })
  rankName: string;

  @Prop({ required: true, unique: true })
  rankSlug: string;

  @Prop({ default: false })
  deletedAt: Date;
}

export const RankSchema = SchemaFactory.createForClass(Rank);
