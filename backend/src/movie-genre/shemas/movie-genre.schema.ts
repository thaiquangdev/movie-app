import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class MovieGenre extends Document {
  @Prop({ required: true, unique: true })
  movieGenreName: string;

  @Prop({ required: true })
  movieGenreSlug: string;

  @Prop({ required: false })
  deletedAt: Date;
}

export const MovieGenreSchema = SchemaFactory.createForClass(MovieGenre);
