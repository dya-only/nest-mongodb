import { Body, Controller, Post } from '@nestjs/common'
import { UserDto } from '../dto/user.dto'
import { SignService } from './sign.service'

@Controller('sign')
export class SignController {
  constructor(private readonly signService: SignService) {}

  @Post('up')
  signUp(@Body() body: UserDto) {
    return this.signService.sign_up(body)
  }

  @Post('in')
  signIn(@Body() body: UserDto) {
    return this.signService.sign_in(body)
  }
}
