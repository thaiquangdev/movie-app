import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { BaseResponse } from '../response/base-response';
import { map, Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, BaseResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<BaseResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        statusCode: context.switchToHttp().getResponse<Response>().statusCode,
        data,
      })),
    );
  }
}
