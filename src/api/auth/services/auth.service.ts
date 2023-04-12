import {
    ConflictException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '../../user/models/user.entity'
import {
    CONFILCT_EMAIL,
    EMAIL_NOTFOUND,
    NOT_AUTHORIZE,
} from '../constants/errors.constant'
import {
    RegisterDto,
    UserJwtDto,
    UserLoginRequestDto,
    UserLoginResponseDto,
} from '../dto'
import { HashingHelper, JwtHelper } from '../helpers/'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        private readonly hashingHelper: HashingHelper,
        private readonly jwtHelper: JwtHelper,
    ) {}

    generateToken(userInfo: UserDocument): UserLoginResponseDto {
        const payload: UserJwtDto = {
            email: userInfo.email,
            user_name: userInfo.user_name,
            gender: userInfo.gender,
            birthday: userInfo.birthday,
            _id: userInfo._id.toString(),
        }
        const response: UserLoginResponseDto = {
            access_token: this.jwtHelper.sign(payload),
        }
        return response
    }

    public async register(
        registerDto: RegisterDto,
    ): Promise<UserLoginResponseDto> {
        const emailExisted = await this.userModel.findOne({
            email: registerDto.email,
        })
        if (emailExisted) {
            throw new ConflictException(CONFILCT_EMAIL)
        }

        registerDto.password = await this.hashingHelper.hashing(
            registerDto.password,
        )

        // generate jwt token from user
        const newUser = await this.userModel.create(registerDto)
        return this.generateToken(newUser)
    }

    public async login(
        userLoginDto: UserLoginRequestDto,
    ): Promise<UserLoginResponseDto> {
        const userInfo = await this.userModel.findOne({
            email: userLoginDto.email,
        })

        if (!userInfo) {
            throw new NotFoundException(EMAIL_NOTFOUND)
        }

        if (
            !this.hashingHelper.compareHash(
                userLoginDto.password,
                userInfo.password,
            )
        ) {
            throw new UnauthorizedException(NOT_AUTHORIZE)
        }

        return this.generateToken(userInfo)
    }
}
