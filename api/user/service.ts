import { IUser } from "../../types";
import userDao from "./dao";

const { createUser } = userDao;

class UserService {
  async createUser(user: IUser) {
    try {
      const newUser = await createUser(user);
      return newUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export default new UserService();
