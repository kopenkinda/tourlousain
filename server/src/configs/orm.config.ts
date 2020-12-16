import { ConnectionOptions, DatabaseType } from 'typeorm';
import path from 'path';

export function getOrmConfig() {
  const entityPaths = [
    path.join(__dirname, '..', 'models', '**/*.entity.js'),
    path.join(__dirname, '..', 'models', '**/*.entity.ts'),
  ];
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
    entities: entityPaths,
    synchronize: true,
    logging: false,
  };
  // @ts-check
  return ormConfig;
}
