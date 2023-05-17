import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

export const SCHEME_TOKEN = 'Bearer'

const buildApiDoc = (app, urlPath = 'apidoc') => {
    const config = new DocumentBuilder()
        .setTitle('Base APP')
        .setDescription('The base API description')
        .setVersion('1.0')
        .addTag('Base APP')
        .addServer(process.env.BASE_URL)
        .addBearerAuth({
            description: `[just text field] Please enter token in following format: Bearer <JWT>`,
            name: 'Authorization',
            bearerFormat: SCHEME_TOKEN,
            scheme: SCHEME_TOKEN,
            type: 'http',
            in: 'Header',
        })
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup(urlPath, app, document)
}

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)
    const port = configService.get<number>('port', 3000)

    buildApiDoc(app)
    await app.listen(port)
}

bootstrap()
