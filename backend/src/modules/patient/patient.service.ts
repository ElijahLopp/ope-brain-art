import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omit } from 'lodash';
import { Like, Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly repo: Repository<Patient>,
  ) {}
  async getPatient(page = 0, perPage = 10, search = '') {
    const [result, total] = await this.repo.findAndCount({
      where: { nome: Like('%' + search + '%') },
      order: { nome: 'ASC' },
      take: perPage,
      skip: page * perPage,
    });
    return {
      results: result,
      count: total,
    };
  }
  async createPatient(body: any, avatar: any) {
    const newPatient = {
      ...body,
      avatar: avatar ? avatar.filename : null,
    };
    try {
      const response = await this.repo.save(newPatient);
      return response;
    } catch (err) {
      throw new HttpException(
        'error crete patient into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updatePatient(id: number, body: any, avatar: any) {
    let upPatient = omit(body, 'avatar');
    if (avatar) {
      upPatient = {
        ...body,
        avatar: avatar.filename,
      };
    }
    try {
      await this.repo.update(id, upPatient);
      return await this.repo.findOne({ id });
    } catch (err) {
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
