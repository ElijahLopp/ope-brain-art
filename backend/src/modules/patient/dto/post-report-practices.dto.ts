import { IsNotEmpty } from 'class-validator';
export class ReportPracticesBodyDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  duration: number;

  @IsNotEmpty()
  feeling: string;

  @IsNotEmpty()
  typePractice: string;
}
