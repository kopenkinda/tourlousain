import path from 'path';
import fs from 'fs';
import type { Express } from 'express';
import { logger } from 'src/utils/logger';
import IRoute from '../interfaces/IRoute.interface';

const dir = fs.readdirSync(__dirname);
// eslint-disable-next-line max-len
const ctrlDirectories = dir.filter((element) => fs.statSync(path.join(__dirname, element)).isDirectory());

const ctrlFiles : string[] = [];

ctrlDirectories.forEach((element) => {
  fs.readdirSync(path.join(__dirname, element))
    .forEach((file) => ctrlFiles.push(path.join(element, file)));
});

function CreateCtrl(app: Express) {
  const Ctrl = ctrlFiles.map(async (file) => {
    const module = await import(path.resolve(file));
    const mod = module?.default;
    if (mod === undefined || mod?.method === undefined || mod?.handler === undefined) {
      logger.error('Route non valide');
      process.exit(1);
    }
    const route: IRoute = {
      prefix: file.split('.')[0],
      method: mod?.method,
      handler: mod?.handler,
    };

    return route;
  });
}

export default CreateCtrl;
