import express from 'express';
import { index } from '../controllers/api.controller';

export const apiRouter = express.Router();

apiRouter.get('/', index);
