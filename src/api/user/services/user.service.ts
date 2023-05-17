import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '../models/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) {}

    async getById(id: string) {
        const user = await this.userModel
            .findOne({ _id: id, is_active: true })
            .lean()

        return user
    }
}
