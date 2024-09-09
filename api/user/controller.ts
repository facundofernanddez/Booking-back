import { Request, Response } from "express";
import UserService from "./service";

const { createUser } = UserService;

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new UserController();
