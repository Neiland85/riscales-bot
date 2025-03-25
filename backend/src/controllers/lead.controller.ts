import { Request, Response } from 'express';

export const createLead = (req: Request, res: Response) => {
  const { name, phone, source } = req.body;

  // Aquí podrías guardar en base de datos o enviar a un CRM
  console.log(`[+] Lead recibido: ${name} - ${phone} - ${source}`);

  return res.status(200).json({ message: 'Lead recibido correctamente' });
};

