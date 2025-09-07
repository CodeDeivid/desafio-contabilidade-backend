import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateProdutoDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsNumber({}, { message: 'O preço deve ser um número' })
  @IsNotEmpty({ message: 'O preço não pode ser vazio' })
  @IsPositive({ message: 'O preço deve ser um número positivo' })
  @Min(0, { message: 'O preço deve ser no mínimo 0' })
  preco: number;

  @IsOptional({ message: 'O estoque é opcional' })
  @IsNumber({}, { message: 'O estoque deve ser um número' })
  estoque?: number;
}
