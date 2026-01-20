import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { MediaModule } from './modules/media/media.module';
import { ProgressModule } from './modules/progress/progress.module';
import { TenantGuard } from './common/guards/tenant.guard';

import { AuthGuard } from './common/guards/auth.guard';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [
    AuthModule,
    SchoolsModule,
    ProfilesModule,
    CoursesModule,
    LessonsModule,
    MediaModule,
    ProgressModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,

    // ✅ GLOBAL GUARDS
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: TenantGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
