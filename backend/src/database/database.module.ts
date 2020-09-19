import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { ConfigEnum } from '../config/config.enum';
import { ConfigService } from '../config/config.service';
import { parseUri, ReturnParseUri } from '../helpers/parse-uri';

type schemeType = 'mysql' | 'mariadb' | 'postgres' | 'sqlite';

export function getOrmConfig(): ConnectionOptions {
  const _configService = new ConfigService();
  const DATABASE_URI = _configService.get(ConfigEnum.DATABASE_URI);

  if (!DATABASE_URI) {
    throw new Error('DATABASE_URL not specified');
  }

  const mysqlConfig: ReturnParseUri = parseUri(DATABASE_URI);
  const schemeParse: schemeType = mysqlConfig.scheme as schemeType;

  return {
    type: 'postgres',
    host: 'ec2-52-22-216-69.compute-1.amazonaws.com',
    port: 5432,
    username: 'ohvuxdzzthwaet',
    password:
      '963478d5eb792827204bd8a6080444d14a29cb9d4f9a354595970bcd3a392d72',
    database: 'dfl9bhtoqhj6k8',
    synchronize: false,
    logging: false,
    ssl: {
      rejectUnauthorized: false,
    },
    entities: [join(__dirname, '../**/*.entity.js')],
    migrations: [join(__dirname, '../database/migrations/**/{*.ts,*.js}')],
    subscribers: [join(__dirname, '../database/subscribers/**/{*.ts,*.js}')],
  };
}

export async function connOrm(): Promise<Connection> {
  const config = getOrmConfig();
  return createConnection(config);
}

export class DatabaseModule {
  static orm(): DynamicModule {
    const ormConfig: ConnectionOptions = getOrmConfig();

    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forRoot(ormConfig)],
      exports: [DatabaseModule],
    };
  }
}
