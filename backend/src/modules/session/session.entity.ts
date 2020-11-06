import { classToPlain, Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Attachment } from '../attachment/attachment.entity';
import { Patient } from '../patient/patient.entity';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    name: 'body',
    nullable: false,
  })
  body: string;

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
    () => Patient,
    patient => patient.sessions,
  )
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @OneToMany(
    () => Attachment,
    attachment => attachment.session,
  )
  attachments: Attachment[];
  toJSON() {
    return classToPlain(this);
  }
}
