import { IsNotEmpty, IsPhoneNumber, IsString, MaxLength } from 'class-validator'
import { GENDER } from '../../user/constants/user.constant'

class RegisterDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email!: string

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    password!: string

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly user_name!: string

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly gender?: GENDER

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly birthday?: string

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    @IsPhoneNumber('VI')
    readonly phone!: string
}

class UserLoginRequestDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email!: string

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    password!: string
}

class UserLoginResponseDto {
    @IsString()
    @IsNotEmpty()
    readonly access_token!: string
}

export { RegisterDto, UserLoginRequestDto, UserLoginResponseDto }
