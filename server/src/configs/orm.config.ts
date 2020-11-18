import { ConnectionOptions, DatabaseType } from 'typeorm';
import path from 'path';
import { logger } from 'src/utils/logger';

export function getOrmConfig() {
  const entityPath = path.join(__dirname, '..', 'models', '**/*.entity.js');
  logger.info('Entities (aka. Models) are stored in', entityPath);
  const {
    DB_TYPE,
    DB_PORT,
    DB_NAME,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
  } = process.env;

  // @ts-ignore
  const ormConfig: ConnectionOptions = {
    type: DB_TYPE as DatabaseType || 'mysql',
    host: DB_HOST || 'localhost',
    port: DB_PORT ? +DB_PORT : 3306,
    username: DB_USER || 'root',
    password: DB_PASSWORD || '',
    database: DB_NAME || 'tourlousain',
    entities: [
      entityPath,
    ],
    synchronize: true,
    logging: false,
  };
  // @ts-check
  return ormConfig;
}
