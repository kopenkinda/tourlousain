import express from 'express';
import path from 'path';
import { exampleMiddleware } from './middlewares/example.middleware';
import { apiRouter } from './routes/api.router';

export function serverInit() {
  const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(exampleMiddleware);
  app.get('/', (req, res) => res.json({ error: true, status: 404 }));
  app.use('/api', apiRouter);
  return app;
}
