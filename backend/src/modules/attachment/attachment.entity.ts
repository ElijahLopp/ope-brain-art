import { classToPlain, Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Session } from '../session/session.entity';

@Entity('attachment')
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    name: 'nome',
    length: 150,
    nullable: false,
  })
  nome: string;

  @Column('varchar', {
    name: 'uri',
    length: 150,
    nullable: false,
  })
  uri: string;

  @Column('varchar', {
    name: 'type',
    length: 150,
    nullable: false,
  })
  type: string;

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

  @OneToOne(
    () => Session,
    session => session.attachments,
  )
  @JoinColumn({ name: 'session_id' })
  session: Session;
  toJSON() {
    return classToPlain(this);
  }
}
