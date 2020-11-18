import { createConnection } from 'typeorm';
import { getOrmConfig } from './configs/orm.config';

export function dbInit() {
  return createConnection(getOrmConfig());
}
