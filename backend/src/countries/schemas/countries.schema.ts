import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Country extends Document {
  @Prop({ required: true, unique: true })
  countryName: string;

  @Prop({ required: true })
  countrySlug: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
