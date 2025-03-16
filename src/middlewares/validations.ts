import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const userCreationValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Email is required and should be valid'),
];

export const projectCreationValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
];

export const taskCreationValidation = [
  body('name').notEmpty().withMessage('Name is required'),
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
