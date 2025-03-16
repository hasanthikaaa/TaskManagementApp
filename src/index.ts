import express from "express";
import { config } from "dotenv";
config({ path: "./.env.development" });

import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(userRoute);

app.listen(port, () => {
  console.log("Nodemon server listening on port", port);
});
