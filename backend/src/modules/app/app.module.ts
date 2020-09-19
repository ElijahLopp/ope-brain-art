import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ConfigEnum } from '../../config/config.enum';
import { ConfigService } from '../../config/config.service';
import { DatabaseModule } from '../../database/database.module';
import { PatientModule } from '../patient/patient.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PatientModule, SharedModule, DatabaseModule.orm()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static host: string;
  static port: number | string;
  static isDev: boolean;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = AppModule.normalizePort(
      this._configService.get(ConfigEnum.PORT) || 8000,
    );
    AppModule.host = this._configService.get(ConfigEnum.HOST);
    AppModule.isDev = this._configService.isDevelopment;
  }
  private static normalizePort(param: number | string): number | string {
    const portNumber: number =
      typeof param === 'string' ? parseInt(param, 10) : param;

    if (isNaN(portNumber)) return param;

    return portNumber;
  }
}
