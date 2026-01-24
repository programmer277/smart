import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Role } from '../constants/rules.enum';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    // ✅ SUPER_ADMIN uchun tenant talab qilmaymiz
    if (req.user?.role === Role.SUPER_ADMIN) {
      return true;
    }

    // ⬇️ qolgan eski tekshiruvlaring shu yerda davom etadi
    const tenantId = req.headers['x-tenant-id'];
    if (!tenantId) {
      throw new BadRequestException('x-tenant-id header required');
    }

    req.tenantId = tenantId;
    return true;
  }
}
