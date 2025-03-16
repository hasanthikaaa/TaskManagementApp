import express, { Request, Response } from "express";
import {
  handlerErrorValidation,
  projectCreationValidation,
} from "../middlewares/validations";
import ProjectController from "../controllers/projectController";

const router = express.Router();

router.post(
  "/project/:userId",
  [...projectCreationValidation],
  handlerErrorValidation,
  async (req: Request, res: Response) => {
    await ProjectController.createProject(req, res);
  },
);

router.get("/project/:id", async (req: Request, res: Response) => {
  await ProjectController.getAProject(req, res);
});

export default router;
