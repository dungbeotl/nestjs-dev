import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { GENDER } from '../constants/user.constant'

class UserResponseDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email!: string

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
    @IsNotEmpty()
    readonly _id!: string
}

export { UserResponseDto }
