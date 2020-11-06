import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateOrUpdatePatientBodyDTO {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  rg: string;
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  nomeMae: string;

  @IsNotEmpty()
  nomePai: string;
  @IsOptional()
  telefone: string;
  @IsOptional()
  celular: string;

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
  dataNascimento: string;
}
