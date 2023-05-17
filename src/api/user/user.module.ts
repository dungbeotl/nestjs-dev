import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtHelper } from '../auth/helpers'
import { UserController } from './controllers/user.controller'
import { User, UserSchema } from './models/user.entity'
import { UserService } from './services/user.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService, JwtHelper],
    exports: [UserService],
})
export class UserModule {}
