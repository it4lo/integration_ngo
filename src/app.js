import express from 'express';
import { Authenticate } from '@middlewares'


const app = express();

app.use(express.json());

//app.use(Authenticate);

app.listen(3333, () => {
  console.log('NoAr');
});


export default app;


