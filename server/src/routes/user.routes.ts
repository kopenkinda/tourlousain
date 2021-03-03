import IController from '../interfaces/IController.interface';
// import UserController from '../controllers/user.controller';

const controller: IController = {
  prefix: '/user',
  routes: [
    { prefix: '/', handler: (req, res) => res.sendStatus(404), method: 'GET' },
  ],
};
export default controller;
