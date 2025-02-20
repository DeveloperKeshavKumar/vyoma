import express, { json, urlencoded } from 'express';
import cors from 'cors';
import serverless from "serverless-http";
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors(
   {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
   }
))
app.use('/', router);

if (process.env.NODE_ENV === 'DEV') {
   app.listen(PORT, () => {
      console.log(`Running on http://localhost:${PORT}`)
   })
}

export const handler = serverless(app);