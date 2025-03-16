import { dbConfig } from '../../config/knex';

export type UserProject = {
  userId: number;
  projectId: number;
  createdAt?: string;
  updatedAt?: string;
};

export type DbUserProject = UserProject & { id: number };

class UserProjectModel {
  private readonly tableName: string;
  private readonly db: any;

  constructor() {
    this.tableName = 'user_projects';
    this.db = dbConfig;
  }

  public async insertNewUserProject(
    userProject: UserProject,
  ): Promise<DbUserProject> {
    try {
      userProject.createdAt = new Date().toISOString();
      userProject.updatedAt = new Date().toISOString();
      return await this.db(this.tableName)
        .insert(userProject)
        .onConflict('id')
        .merge()
        .returning('*');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new UserProjectModel();
