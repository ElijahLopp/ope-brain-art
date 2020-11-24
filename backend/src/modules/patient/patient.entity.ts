import { classToPlain, Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule } from '../schedule/schedule.entity';
import { Session } from '../session/session.entity';

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
    length: 150,
    name: 'avatar',
    nullable: true,
  })
  avatar: string;

  @Column('varchar', {
    length: 150,
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 20,
    name: 'rg',
    nullable: false,
  })
  rg: string;

  @Column('varchar', {
    length: 20,
    name: 'cpf',
    nullable: false,
  })
  cpf: string;

  @Column('varchar', {
    length: 150,
    name: 'nome_mae',
    nullable: false,
  })
  nomeMae: string;

  @Column('varchar', {
    length: 150,
    name: 'nome_pai',
    nullable: false,
  })
  nomePai: string;

  @Column('varchar', {
    length: 15,
    name: 'telefone',
    nullable: true,
  })
  telefone: string;

  @Column('varchar', {
    length: 15,
    name: 'celular',
    nullable: true,
  })
  celular: string;

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

  @OneToMany(
    () => Session,
    session => session.patient,
  )
  sessions: Session[];
  @OneToMany(
    () => Schedule,
    schedule => schedule.patient,
  )
  schedules: Session[];
  toJSON() {
    return classToPlain(this);
  }
}
