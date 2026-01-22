import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, password: string) {
    // 🔹 Hozircha TEST uchun (fake login)
    if (email === 'admin@test.com' && password === '123456') {
      return {
        accessToken: 'TEST_TOKEN_123',
        role: 'SUPER_ADMIN',
      };
    }

    throw new UnauthorizedException('Email yoki parol xato');
  }
}
