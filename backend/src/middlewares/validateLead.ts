import { Request, Response, NextFunction } from 'express';

export default function validateLead(req: Request, res: Response, next: NextFunction) {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Nombre y teléfono son obligatorios' });
  }
  next();
}

