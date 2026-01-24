import { Request } from 'express';
import { Role } from '../constants/rules.enum';

export type AuthUser = {
  id: string;
  tenantId: string;
  role: Role; // ✅ majburiy
  email: string;
};

export interface RequestWithUser extends Request {
  user?: AuthUser;
  tenantId?: string;
}
