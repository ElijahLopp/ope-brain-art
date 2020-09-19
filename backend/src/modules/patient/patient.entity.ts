import { classToPlain, Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patient')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 150,
    name: 'nome',
    nullable: false,
  })
  nome: string;

  @Column('varchar', {
    length: 50,
    name: 'rua',
    nullable: true,
  })
  rua: string;

  @Column('varchar', {
    length: 8,
    name: 'cep',
    nullable: true,
  })
  cep: string;

  @Column('varchar', {
    length: 50,
    name: 'bairro',
    nullable: true,
  })
  bairro: string;

  @Column('int', {
    name: 'numero',
    nullable: true,
  })
  numero: number;

  @Column('varchar', {
    length: 100,
    name: 'complemento',
    nullable: true,
  })
  complemento: string;

  @Column('timestamp', {
    name: 'data_nascimento',
    nullable: true,
  })
  dataNascimento: Date;

  @Exclude({ toPlainOnly: true })
  @Column('timestamp', {
    name: 'created_at',
    nullable: false,
  })
  createdAt: Date;

  @Exclude({ toPlainOnly: true })
  @Column('timestamp', {
    name: 'updated_at',
    nullable: false,
  })
  updatedAt: string;

  @Exclude({ toPlainOnly: true })
  @Column('timestamp', {
    name: 'deleted_at',
    nullable: true,
    select: false,
  })
  deletedAt: string;

  toJSON() {
    return classToPlain(this);
  }
}
