import CommentModel, {
  Comment,
  DbComment,
} from "../models/tables/CommentModel";

class CommentService {
  public async newComment(comment: Comment): Promise<DbComment> {
    try {
      return await CommentModel.insertNewComment(comment);
    } catch (err) {
      throw err;
    }
  }
}

export default new CommentService();
