import { ConfigFactory } from '@nestjs/config'
import IConfiguration from './configuration.interface'

const configuration: IConfiguration = {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
}

const configFunction: ConfigFactory<IConfiguration> = () => configuration
export default configFunction
