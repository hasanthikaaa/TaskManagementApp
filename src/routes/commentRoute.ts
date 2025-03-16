import express, { Request, Response } from 'express';
import CommentController from '../controllers/commentController';

const router = express.Router();

router.post('/task/:taskId/comment', async (req: Request, res: Response) => {
  await CommentController.newComment(req, res);
});

export default router;
