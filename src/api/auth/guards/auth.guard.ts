import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common'
import { UserService } from 'src/api/user/services/user.service'
import { SCHEME_TOKEN } from '../../../main'
import { JwtHelper } from '../helpers'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtHelper: JwtHelper,
        private readonly userService: UserService,
    ) {}

    private extractTokenFromHeader(request: Request): string | undefined {
        const authorization = request.headers['authorization']
        if (!request.headers['authorization']) throw new UnauthorizedException()

        const [type, token] = authorization?.split(' ') ?? []
        return type === SCHEME_TOKEN ? token : undefined
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request)
        if (!token) throw new UnauthorizedException()

        const userToken = this.jwtHelper.verify(token)
        const user = await this.userService.getById(userToken._id)
        if (!user) throw new UnauthorizedException()

        request['user'] = user
        return true
    }
}
