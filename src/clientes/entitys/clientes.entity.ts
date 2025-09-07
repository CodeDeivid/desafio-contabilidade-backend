import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;
}
