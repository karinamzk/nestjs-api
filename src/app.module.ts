import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, ProfileModule, CourseModule, StudentModule],
  providers: [PrismaService],
})
export class AppModule {}

