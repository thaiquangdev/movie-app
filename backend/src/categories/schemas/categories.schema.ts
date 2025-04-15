import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ required: true, unique: true })
  categoryName: string;

  @Prop({ required: true, unique: true })
  categorySlug: string;

  @Prop({ default: null })
  deletedAt?: Date;
}

export const categorySchema = SchemaFactory.createForClass(Category);
