import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';
import { Produto } from './produtos/entitys/produto.entitty';
import { Cliente } from './clientes/entitys/clientes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Produto, Cliente],
      synchronize: true,
    }),
    ProdutosModule,
    ClientesModule,
  ],
})
export class AppModule {}
