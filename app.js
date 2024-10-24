import 'dotenv/config';
import express from 'express';
import userRouter from './routes/userRoutes.js'

const app = express();

app.use('/users', userRouter);

app.listen(3000, () => console.log('Ecommerce online!'));
