import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../../../api/auth/guards'
import { UserResponseDto } from '../dto'
import { UserService } from '../services/user.service'
import { UserTransformer } from '../transformers'

@Controller('user')
@ApiTags('[User]')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('me')
    @ApiOkResponse({ type: UserTransformer })
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    me(@Request() req) {
        const { user } = req

        const userDto: UserResponseDto = {
            _id: user._id,
            email: user.email,
            user_name: user.user_name,
            gender: user.gender,
            birthday: user.birthday,
        }
        return userDto
    }
}
