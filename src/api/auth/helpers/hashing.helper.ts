import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { compare, hash } from 'bcrypt'

@Injectable()
export class HashingHelper {
    constructor(private readonly configService: ConfigService) {}

    hashing(password: string): Promise<string> {
        return hash(
            password,
            this.configService.get<number>('security.salt_rounds'),
        )
    }

    async compareHash(
        password: string,
        hashPassword: string,
    ): Promise<boolean> {
        const isMatch = await compare(password, hashPassword)

        if (!isMatch) throw new UnauthorizedException()

        return isMatch
    }
}
