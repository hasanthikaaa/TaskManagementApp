import { config } from "dotenv";
import { Knex } from "knex";

config({ path: `.env.development` });

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      port: Number(process.env.DB_PORT),
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
};

export default knexConfig;
