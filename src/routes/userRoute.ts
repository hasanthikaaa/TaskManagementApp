import express, { Request, Response } from "express";
import UserController from "../controllers/userController";
import {
  handlerErrorValidation,
  userCreationValidation,
} from "../middlewares/validations";

const router = express.Router();

router.post(
  "/user",
  [...userCreationValidation],
  handlerErrorValidation,
  async (req: Request, res: Response) => {
    await UserController.newUser(req, res);
  },
);

export default router;
