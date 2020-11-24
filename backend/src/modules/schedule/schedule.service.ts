import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FinanceService } from '../finance/finance.service';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly repo: Repository<Schedule>,

    @Inject(FinanceService) private serviceFinance: FinanceService,
  ) {}
  async getSchedules() {
    const result = await this.repo.find({
      relations: ['patient'],
      order: { start: 'DESC' },
    });
    return result;
  }
  async createSchedule(body: any) {
    try {
      const dataCreate = {
        patient: {
          id: body.patient.id,
        },
        start: body.start,
        end: body.end,
        status: body.status,
      };
      const response = await this.repo.save(dataCreate);

      const dataCreateFinance = {
        patient: {
          id: body.patient.id,
        },
        schedule: {
          id: response.id,
        },
        valor: body.valorConsulta,
        paid: 'no',
      };

      const teste = await this.serviceFinance.createFinance(dataCreateFinance);

      const result = await this.repo.findOne({
        relations: ['patient'],
        where: {
          id: response.id,
        },
      });
      return result;
    } catch (err) {
      throw new HttpException(
        'error crete session into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateSchedule(id: number, body: any) {
    try {
      const dataUpdate = {
        patient: {
          id: body.patient.id,
        },
        start: body.start,
        end: body.end,
        status: body.status,
      };
      await this.repo.update(id, dataUpdate);
      return await this.repo.findOne(id, { relations: ['patient'] });
    } catch (err) {
      throw new HttpException(
        'error update schedule into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async deleteSchedule(id: number) {
    try {
      await this.repo.delete(id);
    } catch (err) {
      throw new HttpException(
        'error delete schedule into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
