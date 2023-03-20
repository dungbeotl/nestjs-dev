import { HttpException, HttpStatus } from '@nestjs/common'

export const handleError = (
    message: string,
    status_code: number,
    http_status?: number,
) => {
    throw new HttpException(
        {
            message,
            status_code,
        },
        http_status || HttpStatus.BAD_REQUEST,
    )
}
