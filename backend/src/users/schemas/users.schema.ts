import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: false, default: 'Không xác định' })
  gender?: string;

  @Prop({
    required: false,
    default: 'https://www.rophim.me/images/avatars/pack1/05.jpg',
  })
  avatar?: string;

  @Prop({
    required: true,
    default: 'user',
  })
  role: string;

  @Prop({ required: false })
  refreshToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
