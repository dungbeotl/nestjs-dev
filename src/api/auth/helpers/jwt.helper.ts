import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as jsonwebtoken from 'jsonwebtoken'
import { UserJwtDto } from '../dto'

@Injectable()
export class JwtHelper {
    private readonly jwtSecret: string
    private readonly jwtExpiresIn: string
    constructor(private readonly configService: ConfigService) {
        this.jwtSecret = this.configService.get<string>('security.jwt_secret')
        this.jwtExpiresIn = this.configService.get<string>(
            'security.jwt_expires_in',
        )
    }

    sign(payload: UserJwtDto, expiresIn?: string) {
        return jsonwebtoken.sign(payload, this.jwtSecret, {
            expiresIn: expiresIn ?? this.jwtExpiresIn,
        })
    }

    verify(token: string) {
        return jsonwebtoken.verify(token, this.jwtSecret)
    }
}
