import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entitys/produto.entitty';
import { CreateProdutoDto } from './dtos/create-product.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private repo: Repository<Produto>,
  ) {}

  create(dto: CreateProdutoDto) {
    const produto = this.repo.create(dto);
    return this.repo.save(produto);
  }

  findAll() {
    const produtos = this.repo.find();
    return produtos ?? [];
  }

  async findOne(id: number) {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Produto não encontrado');
    return product;
  }
}
