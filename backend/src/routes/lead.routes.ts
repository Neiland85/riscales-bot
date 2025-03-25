import { Router } from 'express';
import { createLead } from '../controllers/lead.controller';
import validateLead from '../middlewares/validateLead';

const router = Router();

router.post('/api/lead', validateLead, createLead);

export default router;

