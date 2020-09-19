import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'API - BRAIN ART V1' };
  }

  getHealthCheck() {
    return { message: 'ok' };
  }
}
