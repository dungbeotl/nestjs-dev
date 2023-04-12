import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ApiModule } from './api/api.module'
import configuration from './configs/configuration'

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        MongooseModule.forRoot('mongodb://localhost:27017/real_estate'),
        ApiModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
