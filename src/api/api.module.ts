import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TransformInterceptor } from 'src/core/interceptors'
import { AuthModule } from './auth/auth.module'
import { AuthController } from './auth/controllers/auth.controller'
import { UserController } from './user/controllers/user.controller'
import { UserModule } from './user/user.module'

@Module({
    imports: [AuthModule, UserModule],
    controllers: [UserController, AuthController],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor,
        },
    ],
})
export class ApiModule {}
