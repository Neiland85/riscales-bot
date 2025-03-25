import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/lead.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend de Riscales Bot funcionando correctamente 🚀');
});

// 📦 Rutas de la API
app.use(leadRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

