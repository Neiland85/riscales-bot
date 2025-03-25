import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
  res.json({ message: 'Hola desde el backend de riscales-bot 🎉' });
};

