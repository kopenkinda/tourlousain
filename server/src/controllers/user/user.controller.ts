import { Request, Response } from 'express';
import { User } from '../../models/user.entity';

const UserController = {
  async getUsers(req : Request, res : Response) {
    res.json(await User.find());
  },
};

export default UserController;
