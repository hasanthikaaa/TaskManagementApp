import { Request, Response } from 'express';
import CommentService from '../services/commentService';

class CommentController {
  public async newComment(req: Request, res: Response): Promise<Response> {
    try {
      const input = {
        content: req?.body?.content,
        userId: req?.body?.userId,
        taskId: req?.params?.taskId,
      };
      const result = await CommentService.newComment(input);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).send('Error creating comment');
    }
  }
}

export default new CommentController();
