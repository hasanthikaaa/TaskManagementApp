import { Request, Response } from "express";
import TaskService from "../services/taskService";

class TaskController {
  public async createTask(req: Request, res: Response): Promise<Response> {
    try {
      const input = {
        name: req?.body?.name,
        projectId: Number(req?.params?.projectId) || 0,
      };
      const result = await TaskService.createTask(input);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).send("Error creating task");
    }
  }

  public async getATask(req: Request, res: Response): Promise<Response> {
    try {
      const taskId = Number(req?.params?.id) || 0;
      const result = await TaskService.getATask(taskId);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).send("Error retrieving task");
    }
  }

  public async getProjectTasks(req: Request, res: Response): Promise<Response> {
    try {
      const projectId = Number(req?.params?.projectId) || 0;
      const result = await TaskService.getProjectTasks(projectId);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).send("Error retrieving project tasks");
    }
  }

  public async updateTask(req: Request, res: Response): Promise<Response> {
    try {
      const taskId = Number(req?.params?.id) || 0;
      const userId = Number(req?.body?.userId) || undefined;
      const status = req?.body?.status || undefined;
      const result = await TaskService.updateTask(taskId, userId, status);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).send("Error updating tasks");
    }
  }

  public async deleteTask(req: Request, res: Response): Promise<Response> {
    try {
      const taskId = Number(req?.params?.id) || 0;
      await TaskService.deleteTask(taskId);
      return res.status(200).json({ data: "Task Deleted Successfully" });
    } catch (err) {
      return res.status(400).send("Error deleting tasks");
    }
  }
}

export default new TaskController();
