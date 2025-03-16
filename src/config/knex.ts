import knex from "knex";
import { config } from "dotenv";

config({ path: `.env.development` });

export const dbConfig = knex({
  client: "pg",
  connection: {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
