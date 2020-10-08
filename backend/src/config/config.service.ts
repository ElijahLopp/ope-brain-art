import {Injectable} from '@nestjs/common';

@Injectable()
export class ConfigService {
  private environmentHosting: string = process.env.NODE_ENV || 'development';

  get(name: string): string {
    return String(process.env[name]);
  }

  get isDevelopment(): boolean {
    return this.environmentHosting === 'development';
  }
}
