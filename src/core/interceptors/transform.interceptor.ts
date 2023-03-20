import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { MESSAGE_SUCCESS } from './index'

export interface Response<T> {
    data: T
}

@Injectable()
export class TransformInterceptor<T>
    implements NestInterceptor<T, Response<T>>
{
    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<Response<T>> {
        return next.handle().pipe(
            map((data) => {
                return {
                    status_code: 200,
                    success: true,
                    message: MESSAGE_SUCCESS,
                    data,
                }
            }),
        )
    }
}
