import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';

import commentRoute from './routes/commentRoute';
import projectRoute from './routes/projectRoute';
import taskRoute from './routes/taskRoute';
import userRoute from './routes/userRoute';
config({ path: './.env.development' });

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

//routes
app.use(userRoute);
app.use(projectRoute);
app.use(taskRoute);
app.use(commentRoute);

app.listen(port, () => {
  console.log('Nodemon server listening on port', port);
});
