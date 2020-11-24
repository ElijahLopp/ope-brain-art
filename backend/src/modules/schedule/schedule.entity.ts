import { classToPlain, Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from '../patient/patient.entity';

@Entity('schedule')
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp', {
    name: 'start',
    nullable: false,
  })
  start: Date;

  @Column('timestamp', {
    name: 'end',
    nullable: false,
  })
  end: Date;
  @Column('int', {
    name: 'status',
    nullable: false,
  })
  status: number;

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
    patient => patient.schedules,
  )
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;
  toJSON() {
    return classToPlain(this);
  }
}
