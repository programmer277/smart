import { Controller, Get } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator'; // sendagi path boshqacha bo‘lishi mumkin
import { Role } from '../common/constants/rules.enum';

@Controller('admin')
export class AdminController {
  @Roles(Role.SUPER_ADMIN)
  @Get('check')
  check() {
    return { message: 'SUPER_ADMIN ruxsat oldi' };
  }
}
