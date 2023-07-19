import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from '../dto/user.dto'
import { Types } from 'mongoose'

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserAll() {
    return this.userService.findAll()
  }

  @Post()
  getUserById(@Body() _id: Types.ObjectId) {
    return this.userService.findById(_id)
  }
}
