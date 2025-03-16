import { dbConfig } from "../../config/knex";

export type Comment = {
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DbComment = Comment & { id: number };

class CommentModel {
  private readonly tableName: string;
  private readonly db: any;

  constructor() {
    this.tableName = "comments";
    this.db = dbConfig;
  }

  public async insertNewComment(comment: Comment): Promise<DbComment> {
    try {
      comment.createdAt = new Date().toISOString();
      comment.updatedAt = new Date().toISOString();
      return await this.db(this.tableName)
        .insert(comment)
        .onConflict("id")
        .merge()
        .returning("*");
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new CommentModel();
