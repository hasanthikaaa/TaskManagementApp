import express from "express";
import { config } from "dotenv";
import { env } from "./config/env";

config({ path: "./.env.development" });

const app = express();
const port = env.port || 3000;

app.listen(port, () => {
  console.log("Nodemon server listening on port", port);
});
