import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { RegisterDto, UserLoginRequestDto } from '../dto'
import { AuthService } from '../services/auth.service'
import {
    FindAllTransformer,
    LoginResponseTransformer,
    LoginTransformer,
    RegisterTransformer,
} from '../transformers/index'

@Controller('auth')
@ApiTags('[Authencation]')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('base-api')
    @ApiOkResponse({ type: FindAllTransformer })
    findAll() {
        return {
            token: 1,
        }
    }

    @Post('register')
    @ApiBody({ type: RegisterTransformer })
    @ApiOkResponse({ type: LoginResponseTransformer })
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto)
    }

    @ApiBody({ type: LoginTransformer })
    @ApiOkResponse({ type: LoginResponseTransformer })
    @Post('login')
    login(@Body() userLoginDto: UserLoginRequestDto) {
        return this.authService.login(userLoginDto)
    }
}
