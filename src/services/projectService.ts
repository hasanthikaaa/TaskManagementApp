import ProjectModel, {
  DbProject,
  Project,
} from "../models/tables/ProjectModel";
import UserProjects from "../models/tables/UserProjects";
import TaskService from "./taskService";

class ProjectService {
  public async createNewProject(
    input: Project,
    userId: number,
  ): Promise<DbProject | undefined> {
    try {
      const dbProject = await ProjectModel.insertNewProject(input);
      // save to users projects table
      if (dbProject && userId) {
        const params = {
          projectId: dbProject[0].id,
          userId,
        };
        await UserProjects.insertNewUserProject(params);
        return dbProject[0];
      }
    } catch (err) {
      throw err;
    }
  }

  public async getAProject(projectId: number): Promise<DbProject> {
    try {
      return await ProjectModel.getProject(projectId);
    } catch (err) {
      throw err;
    }
  }

  public async deleteAProject(projectId: number): Promise<DbProject> {
    try {
      const tasks = await TaskService.getProjectTasks(projectId);
      if (tasks && tasks.length > 0) {
        await Promise.all(
          tasks.map(async (task) => {
            await TaskService.deleteTask(task.id);
          }),
        );
      }
      return await ProjectModel.deleteProject(projectId);
    } catch (err) {
      throw err;
    }
  }
}

export default new ProjectService();
