import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly repo: Repository<Session>,
  ) {}
  async getSessions(patientId: number, page = 0, perPage = 10) {
    const [result, total] = await this.repo.findAndCount({
      relations: ['attachments'],
      where: {
        patient: { id: patientId },
      },
      order: { createdAt: 'DESC' },
      take: perPage,
      skip: page * perPage,
    });
    return {
      results: result,
      count: total,
    };
  }
  async createSession(patientId: number, body: any) {
    try {
      const dataCreate = {
        patient: {
          id: patientId,
        },
        ...body,
      };
      const response = await this.repo.save(dataCreate);
      return response;
    } catch (err) {
      throw new HttpException(
        'error crete session into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateSession(id: number, body: { body: string }) {
    try {
      await this.repo.update(id, body);
      return await this.repo.findOne(id, { relations: ['attachments'] });
    } catch (err) {
      throw new HttpException(
        'error update session into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
