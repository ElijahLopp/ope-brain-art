import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from '../session/session.module';
import { PatientController } from './patient.controller';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient]),
    forwardRef(() => SessionModule),
  ],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
