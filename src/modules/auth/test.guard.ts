import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class TestAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    const authHeader = req.headers['authorization'];

    if (!authHeader || typeof authHeader !== 'string') {
      throw new UnauthorizedException('Token yoq');
    }

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7)
      : authHeader;

    if (token !== 'TEST_TOKEN_123') {
      throw new UnauthorizedException('Token xato');
    }

    // token to'g'ri bo'lsa user qo'shib yuboramiz
    (req as any).user = { role: 'SUPER_ADMIN' };

    return true;
  }
}
