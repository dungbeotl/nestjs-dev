import { ApiProperty } from '@nestjs/swagger'

export class AbstractDto {
    @ApiProperty()
    _id: string

    @ApiProperty()
    created_at: Date

    @ApiProperty()
    updated_at: Date
}
