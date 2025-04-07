import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Lấy danh sách role từ metadata
    const allowedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    // Nếu không yêu cầu role cụ thể, cho phép truy cập
    if (!allowedRoles || allowedRoles.length === 0) {
      return true;
    }

    // Lấy request & user từ context
    const request = context.switchToHttp().getRequest<Request>();
    const user = request['user'] as
      | { _id: string; role: string; email: string }
      | undefined;

    if (!user || !user._id) {
      throw new UnauthorizedException('Bạn cần đăng nhập để truy cập');
    }

    // Kiểm tra quyền
    if (!allowedRoles.some((role) => role === user.role)) {
      throw new ForbiddenException(
        'Bạn không có quyền truy cập vào tài nguyên này',
      );
    }

    return true;
  }
}
