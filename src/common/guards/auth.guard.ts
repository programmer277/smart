import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Role } from '../constants/rules.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    req.user = {
      id: 'test-user',
      tenantId: 'test-tenant',
      role: Role.SUPER_ADMIN,
      email: 'test@example.com',
    };

    if (!req.user) throw new UnauthorizedException('Unauthorized');

    return true;
  }
}
