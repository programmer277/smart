import { Controller, Get } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from 'src/common/constants/rules.enum';

@Controller('schools')
export class SchoolsController {
  @Get('admin-test')
  @Roles(Role.SUPER_ADMIN)
  adminOnly() {
    return { message: 'Only super admin can see this' };
  }
}
