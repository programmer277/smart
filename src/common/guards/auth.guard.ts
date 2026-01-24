import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from '../constants/rules.enum';
import { RequestWithUser } from '../types/request-with-user';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<RequestWithUser>();

    req.user = {
      id: 'test-user',
      tenantId: 'test-tenant',
      role: Role.TEACHER,
      email: 'test@example.com',
    };

    if (!req.user) throw new UnauthorizedException('Unauthorized');

    return true;
  }
}
