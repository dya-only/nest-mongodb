import { HydratedDocument } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  img: string

  @Prop({ required: true, unique: true })
  name: string

  @Prop({ required: true })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
