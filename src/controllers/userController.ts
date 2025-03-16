import { Request, Response } from "express";
import UserService from "../services/userService";
import * as console from "node:console";

class UserController {
  public async newUser(req: Request, res: Response): Promise<Response> {
    try {
      const input = {
        name: req?.body?.name,
        email: req?.body?.email,
      };
      const result = await UserService.newUser(input);
      console.log("result", result);
      return res.status(200).json(result);
    } catch (err) {
      console.log("err", err);
      return res.status(400).send("Error creating user");
    }
  }
}

export default new UserController();
