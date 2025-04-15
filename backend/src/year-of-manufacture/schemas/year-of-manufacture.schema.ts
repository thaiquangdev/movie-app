import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class YearOfManufacture extends Document {
  @Prop({ required: true, unique: true })
  yearOfManufactureName: string;

  @Prop({ required: true })
  yearOfManufactureSlug: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const YearOfManuFactureSchema =
  SchemaFactory.createForClass(YearOfManufacture);
