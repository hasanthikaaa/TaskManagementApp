import express from "express";
import { config } from "dotenv";
config({ path: "./.env.development" });

import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
import projectRoute from "./routes/projectRoute";
import taskRoute from "./routes/taskRoute";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

//routes
app.use(userRoute);
app.use(projectRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log("Nodemon server listening on port", port);
});
