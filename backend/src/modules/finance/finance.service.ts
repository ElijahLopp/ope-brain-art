import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './finance.entity';

@Injectable()
export class FinanceService {
  constructor(
    @InjectRepository(Finance)
    private readonly repo: Repository<Finance>,
  ) {}
  async getFinances({ page, perPage, search }) {
    const [result, total] = await this.repo.findAndCount({
      relations: ['patient'],
      order: { paid: 'ASC', createdAt: 'DESC' },
    });
    const trans = result.map(finance => {
      return {
        id: finance.id,
        date: finance.createdAt,
        patient: finance.patient.nome,
        valor: finance.valor,
        paid: finance.paid,
      };
    });
    return {
      results: trans,
      count: total,
    };
  }
  async createFinance(body: any) {
    try {
      const dataCreate = {
        patient: {
          id: body.patient.id,
        },
        schedule: {
          id: body.schedule.id,
        },
        valor: body.valor,
        paid: body.paid,
      };
      const response = await this.repo.save(dataCreate);

      const result = await this.repo.findOne({
        relations: ['patient', 'schedule'],
        where: {
          id: response.id,
        },
      });
      return result;
    } catch (err) {
      throw new HttpException(
        'error crete finance into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateFinance(id: number, body: any) {
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
  async updateFinancePaid(id: number, body: any) {
    try {
      const dataUpdate = {
        paid: body.paid,
      };
      await this.repo.update(id, dataUpdate);
      const result = await this.repo.findOne(id, { relations: ['patient'] });
      return {
        id: result.id,
        date: result.createdAt,
        patient: result.patient.nome,
        valor: result.valor,
        paid: result.paid,
      };
    } catch (err) {
      throw new HttpException(
        'error update finance into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
