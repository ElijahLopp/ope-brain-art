import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentModule } from '../attachment/attachment.module';
import { PatientModule } from '../patient/patient.module';
import { FinanceController } from './finance.controller';
import { Finance } from './finance.entity';
import { FinanceService } from './finance.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Finance]),
    forwardRef(() => PatientModule),
    forwardRef(() => AttachmentModule),
  ],
  controllers: [FinanceController],
  providers: [FinanceService],
  exports: [FinanceService],
})
export class FinanceModule {}
