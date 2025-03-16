import express from "express";
import { config } from "dotenv";
config({ path: "./.env.development" });

import userRoute from "./routes/userRoute";
import bodyParser from "body-parser";
import projectRoute from "./routes/projectRoute";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

//routes
app.use(userRoute);
app.use(projectRoute);

app.listen(port, () => {
  console.log("Nodemon server listening on port", port);
});
