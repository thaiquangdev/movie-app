import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Verisons extends Document {
  @Prop({ required: true, unique: true })
  versionName: string;

  @Prop({ required: true })
  versionSlug: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const VersionsSchema = SchemaFactory.createForClass(Verisons);
