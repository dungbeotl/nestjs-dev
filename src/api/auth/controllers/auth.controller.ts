import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { FindAllTransformer } from '../transformers/index'

@Controller('auth')
@ApiTags('[Authencation]')
export class AuthController {
    @Get('base-api')
    @ApiOkResponse({ type: FindAllTransformer })
    findAll() {
        return {
            token: 1,
        }
    }
}
