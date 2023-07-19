import { Injectable } from '@nestjs/common'
import { UserDto } from '../dto/user.dto'
import { User } from '../schema/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class SignService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

  async sign_up(user: UserDto) {
    const findUser = await this.userModel.findOne({ name: user.name })
    if (findUser) return { status: 401, message: `user '${user.name}' already exists` }

    const createUser = new this.userModel(user).save()
    return { status: 200, data: new this.userModel(user) }
  }

  async sign_in(user: UserDto) {
    const findUser = await this.userModel.findOne({ name: user.name })
    if (!findUser) return { status: 401 }

    const accessToken = this.jwtService.sign({ name: findUser.name })

    return { status: 200, accessToken }
  }
}
