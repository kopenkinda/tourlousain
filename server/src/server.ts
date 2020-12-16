import express from 'express';
import path from 'path';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';
import { apiRouter } from './routes/api.router';

export function serverInit() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res) => res.json({ error: true, status: 404 }));
  app.use('/api', apiRouter);

  // ? Setup error handling
  app.use(notFoundHandler);
  app.use(errorHandler);
  return app;
}
