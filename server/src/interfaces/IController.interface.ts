import IRoute from './IRoute.interface';

export default interface IController {
  prefix: string,
  routes: IRoute[],
}
