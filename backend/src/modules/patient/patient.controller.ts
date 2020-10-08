import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePatientBodyDTO } from './dto/post-create-patienr.dto';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly service: PatientService) {}

  @Get()
  @HttpCode(200)
  getPatient() {
    return this.service.getPatient();
  }
  @Post()
  @HttpCode(201)
  createPatient(@Body() body: CreatePatientBodyDTO) {
    return this.service.createPatient(body);
  }

  @Put(':id')
  @HttpCode(200)
  updatePatient(@Body() body: any, @Param('id') id: number) {
    return this.service.updatePatient(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  deletePatient(@Param('id') id: number) {
    return this.service.deletePatient(id);
  }
}
