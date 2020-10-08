import {getOrmConfig} from './src/database/database.module';

const configs = getOrmConfig();

export = {
  ...configs,
  cli: {
    entitiesDir: 'src/database/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscribers',
  },
};
