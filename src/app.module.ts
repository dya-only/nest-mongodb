import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { SignModule } from './sign/sign.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sclife'), UserModule, SignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
