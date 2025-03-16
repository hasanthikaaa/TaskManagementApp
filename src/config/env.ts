import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const env = {
  port: process.env.PORT,
};
