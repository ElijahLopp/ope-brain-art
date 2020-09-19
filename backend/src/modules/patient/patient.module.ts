import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './patient.controller';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
