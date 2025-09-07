import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('produtos')
export class Produto {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  nome: string;

  @Column('real')
  preco: number;

  @Column({ default: 0 })
  estoque: number;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;
}
