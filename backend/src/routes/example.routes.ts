import { Router } from 'express';
import { helloWorld } from '../controllers/example.controller';

const router = Router();

router.get('/hello', helloWorld);

export default router;

