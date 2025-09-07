import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './entitys/produto.entitty';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
