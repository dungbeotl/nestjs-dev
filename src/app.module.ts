import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApiModule } from './api/api.module'
import configuration from './configs/configuration'

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        ApiModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
