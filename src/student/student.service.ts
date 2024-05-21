import { Injectable } from '@nestjs/common';
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
    return this.prisma.student.create({
      data: {
        name,
        courses: {
          connect: courseIds.map((id) => ({ id })),
        },
      },
    });
  }
}

