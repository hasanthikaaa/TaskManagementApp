import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const env = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbPort: Number(process.env.DB_PORT),
  dbUsername: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};
