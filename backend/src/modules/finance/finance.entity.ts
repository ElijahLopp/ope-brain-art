import { classToPlain, Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from '../patient/patient.entity';
import { Schedule } from '../schedule/schedule.entity';

@Entity('finance')
export class Finance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 15,
    name: 'paid',
    nullable: false,
  })
  paid: string;

  @Column('float', {
    name: 'valor',
    nullable: false,
  })
  valor: number;

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
    patient => patient.finances,
  )
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @OneToOne(
    () => Schedule,
    schedule => schedule.finance,
  )
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
  toJSON() {
    return classToPlain(this);
  }
}
