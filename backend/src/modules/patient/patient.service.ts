import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientBodyDTO } from './dto/post-create-patienr.dto';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly repo: Repository<Patient>,
  ) {}
  async getPatient() {
    const Contact = await this.repo.find();
    return Contact;
  }
  async createPatient(body: CreatePatientBodyDTO) {
    try {
      const response = await this.repo.save(body);
      return response;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'error crete patient into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updatePatient(id: number, body: CreatePatientBodyDTO) {
    try {
      const response = await this.repo.update(id, body);
      return await this.repo.findOne({ id });
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'error update patient into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deletePatient(id: number) {
    try {
      await this.repo.delete(id);
    } catch (err) {
      throw new HttpException(
        'error delete patient into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
