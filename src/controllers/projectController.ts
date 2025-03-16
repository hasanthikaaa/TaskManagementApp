import { Response, Request } from "express";
import ProjectService from "../services/projectService";

class ProjectController {
  public async createProject(req: Request, res: Response): Promise<Response> {
    try {
      const input = {
        name: req.body.name,
        description: req.body.description,
      };
      const userId = req.params.userId;
      const project = await ProjectService.createNewProject(
        input,
        Number(userId),
      );
      return res.status(200).json(project);
    } catch (err) {
      return res.status(400).send("Error creating project");
    }
  }

  public async getAProject(req: Request, res: Response): Promise<Response> {
    try {
      const projectId = req.params.id;
      console.log({ projectId });

      const project = await ProjectService.getAProject(Number(projectId));
      return res.status(200).json(project);
    } catch (err) {
      return res.status(400).send("Error retrieving project");
    }
  }

  public async deleteAProject(req: Request, res: Response): Promise<Response> {
    try {
      const projectId = req.params.id;
      console.log({ projectId });

      const project = await ProjectService.deleteAProject(Number(projectId));
      return res.status(200).json("Deleted successfully");
    } catch (err) {
      return res.status(400).send("Error retrieving project");
    }
  }
}

export default new ProjectController();
