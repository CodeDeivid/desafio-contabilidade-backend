import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dtos/create-cliente.dto';
import { Cliente } from './entitys/clientes.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() dto: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(dto);
  }

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Cliente> {
    return this.clientesService.findOne(id);
  }
}
