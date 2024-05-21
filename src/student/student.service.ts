import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async remove(id: number) {
    return `This action removes a #${id} student`;
  }

  async findAll() {
    return this.prisma.student.findMany({
      include: { courses: true },
    });
  }

  async create(createStudentDto: CreateStudentDto) {
    const { name, courseIds } = createStudentDto;
    
    console.log('Creating student with:', createStudentDto);

    if (!Array.isArray(courseIds)) {
      throw new BadRequestException('courseIds must be an array');
    }

    try {
      const student = await this.prisma.student.create({
        data: {
          name,
          courses: {
            connect: courseIds.map((id) => ({ id })),
          },
        },
      });

      console.log('Student created successfully:', student);
      return student;
    } catch (error) {
      console.error('Error creating student:', error);
      throw new Error('Failed to create student');
    }
  }
}
