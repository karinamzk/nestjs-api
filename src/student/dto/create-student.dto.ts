import { Type } from 'class-transformer';
import { IsArray, IsString, ArrayNotEmpty, ArrayUnique, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  readonly name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @Type(() => Number)
  @IsInt({ each: true })
  readonly courseIds: number[];
}

