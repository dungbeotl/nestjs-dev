import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { GENDER } from '../constants/user.constant'

export type UserDocument = HydratedDocument<User>

@Schema({
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})
export class User {
    @Prop({
        required: true,
    })
    user_name: string

    @Prop({
        default: GENDER.OTHER,
    })
    gender: GENDER

    @Prop({
        required: true,
    })
    email: string

    @Prop({
        required: true,
    })
    password: string

    @Prop()
    birthday: string

    @Prop()
    phone: string

    @Prop()
    avatar: string

    @Prop({
        default: null,
    })
    deleted_at: Date

    @Prop({
        default: true,
    })
    is_active: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
