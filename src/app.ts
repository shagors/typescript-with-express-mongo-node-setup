/* eslint-disable no-unused-vars */
import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlwares/globalErrorhandler';
import router from './app/routes';
import notFound from './app/middlwares/notFound';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
