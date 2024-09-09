import { IUser } from "../../types";
import User from "./model";

class UserDao {
  async createUser(user: IUser) {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export default new UserDao();
