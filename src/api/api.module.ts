import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TransformInterceptor } from 'src/core/interceptors'
import { AuthModule } from './auth/auth.module'

@Module({
    imports: [AuthModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor,
        },
    ],
})
export class ApiModule {}
