import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail({}, { message: 'O email deve ser válido' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;
}
