import { ApiProperty } from '@nestjs/swagger'
import { GENDER } from '../../user/constants/user.constant'

class LoginTransformer {
    @ApiProperty({
        default: 'dungbeotl9@gmail.com',
    })
    email: string

    @ApiProperty({
        default: '123456',
    })
    password: string
}

class LoginResponseTransformer {
    @ApiProperty()
    access_token: string
}

class RegisterTransformer {
    @ApiProperty({
        description: 'The email of user',
        minimum: 50,
    })
    email!: string

    @ApiProperty({
        description: 'The password of user',
        minimum: 50,
    })
    password!: string

    @ApiProperty({
        description: 'The name of user',
        minimum: 50,
    })
    user_name!: string

    @ApiProperty({
        description: 'The gender of user',
    })
    gender: GENDER

    @ApiProperty({
        description: 'The birthday of user',
        minimum: 10,
    })
    birthday: string

    @ApiProperty({
        description: 'The phone number of user',
        minimum: 10,
    })
    phone!: string
}

export { LoginTransformer, LoginResponseTransformer, RegisterTransformer }
