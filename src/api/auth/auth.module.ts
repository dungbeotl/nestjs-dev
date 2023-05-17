import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../user/models/user.entity'
import { AuthController } from './controllers/auth.controller'
import { HashingHelper, JwtHelper } from './helpers'
import { AuthService } from './services/auth.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        HashingHelper,
        JwtHelper,
    ],
    controllers: [AuthController],
    providers: [AuthService, HashingHelper, JwtHelper],
    exports: [AuthService, JwtHelper],
})
export class AuthModule {}
