import { dbConfig } from '../../config/knex';

export type User = {
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DbUser = User & { id: number };

class UserModel {
  private readonly tableName: string;
  private readonly db: any;

  constructor() {
    this.tableName = 'users';
    this.db = dbConfig;
  }

  public async insertNewUser(user: User): Promise<DbUser> {
    try {
      user.createdAt = new Date().toISOString();
      user.updatedAt = new Date().toISOString();
      return await this.db(this.tableName)
        .insert(user)
        .onConflict('id')
        .merge()
        .returning('*');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new UserModel();
