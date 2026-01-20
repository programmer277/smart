import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const tenantId = req.user?.tenantId;

    if (!tenantId) throw new ForbiddenException('Tenant not found');

    req.tenantId = tenantId;
    return true;
  }
}
