import { dbConfig } from "../../config/knex";

export type Project = {
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DbProject = Project & { id: number };

class ProjectModel {
  private readonly tableName: string;
  private readonly db: any;

  constructor() {
    this.tableName = "projects";
    this.db = dbConfig;
  }

  public async insertNewProject(project: Project): Promise<DbProject[]> {
    try {
      project.createdAt = new Date().toISOString();
      project.updatedAt = new Date().toISOString();
      return await this.db(this.tableName).insert(project).returning("*");
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getProject(projectId: number): Promise<DbProject> {
    try {
      return await this.db(this.tableName).select("*").where("id", projectId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async deleteProject(projectId: number): Promise<DbProject> {
    try {
      return await this.db(this.tableName).delete("*").where("id", projectId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new ProjectModel();
