import { IsString } from 'class-validator'

export class UserDto {
  @IsString()
  readonly img: string

  @IsString()
  readonly name: string

  @IsString()
  readonly password: string
}
