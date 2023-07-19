import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../schema/user.schema'
import { Model, Schema, Types } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec() // 반환값이 있는 경우 exec()를 통해 온전한 프로미스를 반환값으로 얻을 수 있다.
  }

  async findById(_id: Types.ObjectId) {
    return this.userModel.findById(_id).exec()
  }
}
