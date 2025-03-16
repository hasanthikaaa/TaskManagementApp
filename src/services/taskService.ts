import ProjectService from './projectService';
import TaskModel, { DbTask, Task } from '../models/tables/TaskModel';
class TaskService {
  public async createTask(input: Task): Promise<DbTask[]> {
    try {
      const project = await ProjectService.getAProject(input.projectId);
      console.log('project', project);
      if (project) {
        return await TaskModel.insertNewTask(input);
      } else {
        throw 'Project not found.';
      }
    } catch (err) {
      throw err;
    }
  }

  public async getATask(taskId: number): Promise<DbTask> {
    try {
      return await TaskModel.getATask(taskId);
    } catch (err) {
      throw err;
    }
  }

  public async getProjectTasks(projectId: number): Promise<DbTask[]> {
    try {
      return await TaskModel.getTasksByProjectId(projectId);
    } catch (err) {
      throw err;
    }
  }

  public async updateTask(
    taskId: number,
    userId?: number,
    status?: string,
  ): Promise<DbTask> {
    try {
      return await TaskModel.updateTask(taskId, userId, status);
    } catch (err) {
      throw err;
    }
  }

  public async deleteTask(taskId: number): Promise<void> {
    try {
      await TaskModel.deleteTask(taskId);
      return;
    } catch (err) {
      throw err;
    }
  }
}

export default new TaskService();
