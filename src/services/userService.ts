import UserModel, { DbUser, User } from "../models/tables/UserModel";

class UserService {
  public async newUser(user: User): Promise<DbUser> {
    try {
      return await UserModel.insertNewUser(user);
    } catch (err) {
      throw err;
    }
  }
}

export default new UserService();
