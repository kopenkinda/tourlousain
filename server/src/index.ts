import 'reflect-metadata';
import dotenv from 'dotenv';

import { dbInit } from './database';
import { serverInit } from './server';
import { logger } from './utils/logger';

(async () => {
  try {
    dotenv.config();
    await dbInit();
    logger.info('Connection to the database is established');
    const app = serverInit();
    const PORT = process.env.SERVER_PORT || 1337;

    app.listen(PORT, () => {
      logger.info(`App running on http://localhost:${PORT}/`);
    });
  } catch (e) {
    logger.error(e);
    process.exit();
  }
})();
