import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { UserDto } from '../dto/user.dto'
import { SignService } from './sign.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('sign')
export class SignController {
  constructor(private readonly signService: SignService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('up')
  signUp(
    @UploadedFile() file: Array<Express.Multer.File>,
    @Body() body: UserDto
  ) {
    return this.signService.sign_up({ ...body, img: JSON.parse(JSON.stringify(file)).filename })
  }

  @Post('in')
  signIn(@Body() body: UserDto) {
    return this.signService.sign_in(body)
  }
}