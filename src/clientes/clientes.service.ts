import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entitys/clientes.entity';
import { CreateClienteDto } from './dtos/create-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private repo: Repository<Cliente>,
  ) {}

  async create(dto: CreateClienteDto) {
    const clienteExiste = await this.repo.findOne({
      where: { email: dto.email },
    });
    if (clienteExiste) throw new BadRequestException('Cliente já existe');
    const cliente = this.repo.create(dto);
    return this.repo.save(cliente);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const cliente = await this.repo.findOne({ where: { id } });
    if (!cliente)
      throw new NotFoundException('Cliente não encontrado no sistema');
    return cliente;
  }
}
