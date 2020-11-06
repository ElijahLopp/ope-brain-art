import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attachment } from './attachment.entity';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly repo: Repository<Attachment>,
  ) {}
  async getAttachments(sessionId: number) {
    const [result, total] = await this.repo.findAndCount({
      where: {
        session: { id: sessionId },
      },
      order: { createdAt: 'DESC' },
    });
    return {
      results: result,
      count: total,
    };
  }
  async addAttachment(sessionId: number, body: any, file: any) {
    try {
      const dataCreate = {
        session: {
          id: sessionId,
        },
        nome: body.nome,
        uri: file.filename,
        type: file.mimetype,
      };
      const response = await this.repo.save(dataCreate);
      return response;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        'error add attachment into database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
