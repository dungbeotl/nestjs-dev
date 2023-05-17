import { ConfigFactory } from '@nestjs/config'
import IConfiguration from './configuration.interface'
import * as dotenv from 'dotenv'
dotenv.config()

const configuration: IConfiguration = {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    security: {
        salt_rounds: parseInt(process.env.SALT_ROUNDS) || 10,
        jwt_secret: process.env.JWT_SECRET,
        jwt_expires_in: process.env.JWT_EXPIRES_IN,
    },
}

const configFunction: ConfigFactory<IConfiguration> = () => configuration
export default configFunction
