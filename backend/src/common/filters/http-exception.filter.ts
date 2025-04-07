import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// Định nghĩa kiểu cho lỗi trả về từ BadRequestException
interface BadRequestExceptionResponse {
  message: string | string[]; // Định nghĩa thông báo lỗi hoặc mảng các lỗi
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    let message = exception.message || 'Có lỗi xảy ra';

    // Nếu là lỗi validation từ ValidationPipe
    if (exception instanceof BadRequestException) {
      const responseData =
        exception.getResponse() as BadRequestExceptionResponse; // Ép kiểu chính xác
      message = Array.isArray(responseData.message)
        ? responseData.message.join(', ') // Nếu là mảng lỗi thì nối chúng lại
        : responseData.message; // Nếu là chuỗi thì sử dụng trực tiếp
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message, // Trả về lỗi cụ thể
    });
  }
}
