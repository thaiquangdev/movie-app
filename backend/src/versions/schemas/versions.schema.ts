import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Versions extends Document {
  @Prop({ required: true, unique: true })
  versionName: string;

  @Prop({ required: true })
  versionSlug: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const VersionsSchema = SchemaFactory.createForClass(Versions);
