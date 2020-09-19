import { IsNotEmpty } from 'class-validator';
export class GetUsersParamsDTO {
  @IsNotEmpty()
  id: string;
}
