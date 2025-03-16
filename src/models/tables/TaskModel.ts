import { dbConfig } from '../../config/knex';

export type Task = {
  projectId: number;
  name: string;
  userId?: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DbTask = Task & { id: number };

class TaskModel {
  private readonly tableName: string;
  private readonly db: any;

  constructor() {
    this.tableName = 'tasks';
    this.db = dbConfig;
  }

  public async insertNewTask(task: Task): Promise<DbTask[]> {
    try {
      task.status = 'todo';
      task.userId = 1;
      task.createdAt = new Date().toISOString();
      task.updatedAt = new Date().toISOString();
      console.log('task', task);

      const result = await this.db(this.tableName).insert(task).returning('*');
      console.log({ result });
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getATask(taskId: number): Promise<DbTask> {
    try {
      return await this.db(this.tableName).select('*').where('id', taskId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getTasksByProjectId(projectId: number): Promise<DbTask[]> {
    try {
      return await this.db(this.tableName)
        .select('*')
        .where('projectId', projectId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async updateTask(
    taskId: number,
    userId?: number,
    status?: string,
  ): Promise<DbTask> {
    try {
      const updateObj = {
        ...(userId && { userId: userId }),
        ...(status && { status }),
      };
      console.log('updateObj', updateObj);
      return await this.db(this.tableName)
        .where('id', taskId)
        .update(updateObj)
        .returning('*');
    } catch (err) {
      throw err;
    }
  }

  public async deleteTask(taskId: number): Promise<DbTask> {
    try {
      return await this.db(this.tableName).where('id', taskId).delete();
    } catch (err) {
      throw err;
    }
  }
}

export default new TaskModel();
