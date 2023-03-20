import { ApiProperty } from '@nestjs/swagger'

export class FindAllTransformer {
    @ApiProperty()
    user_id: string
}
