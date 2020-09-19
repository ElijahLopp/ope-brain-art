import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { parse } from 'date-fns';
export class CreatePatientBodyDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  rua: string;

  @IsNotEmpty()
  bairro: string;

  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  numero: number;

  @IsOptional()
  complemento: string;

  @IsOptional()
  @Transform((value: string) => parse(value, 'dd/MM/yyyy', new Date()))
  dataNascimento: string;

  @IsOptional()
  foto: string;
}
