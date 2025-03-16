import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const userCreationValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Email is required and should be valid"),
];

export const handlerErrorValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next();
};
