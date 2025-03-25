import express from 'express';
import leadRoutes from './routes/lead.routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use('/api/lead', leadRoutes);

export default app;

