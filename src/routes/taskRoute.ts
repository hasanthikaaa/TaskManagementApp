import express, { Request, Response } from "express";
import {
  handlerErrorValidation,
  taskCreationValidation,
} from "../middlewares/validations";
import TaskController from "../controllers/taskController";

const router = express.Router();

router.post(
  "/project/:projectId/task",
  [...taskCreationValidation],
  handlerErrorValidation,
  async (req: Request, res: Response) => {
    await TaskController.createTask(req, res);
  },
);

router.get("/task/:id", async (req: Request, res: Response) => {
  await TaskController.getATask(req, res);
});

router.get("/project/:projectId/tasks", async (req: Request, res: Response) => {
  await TaskController.getProjectTasks(req, res);
});

router.delete("/task/:id", async (req: Request, res: Response) => {
  await TaskController.deleteTask(req, res);
});

router.patch("/task/:id", async (req: Request, res: Response) => {
  await TaskController.updateTask(req, res);
});

export default router;
