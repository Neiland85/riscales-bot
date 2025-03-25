# 🎨 Frontend – riscales-bot

Este módulo contiene la interfaz del **bot comercial de Riscales Alimentación**, desarrollado con **React + TailwindCSS**. Simula la experiencia de compra de productos gourmet mediante una interfaz conversacional e intuitiva.

📦 Repositorio raíz: [riscales-bot](https://github.com/Neiland85/riscales-bot)  
💡 Inspirado por: Iceberg e-commerce assistant  
🤖 Potenciado por [Integrabot.net](https://integrabot.net)

---

## 🚀 Instalación y ejecución

### 1. Requisitos

- Node.js ≥ 18.x
- Gestor de paquetes: `pnpm` (recomendado)

### 2. Ejecutar en local

```bash
cd frontend
pnpm install
pnpm dev

La app estará disponible en:
👉 http://localhost:5173

    ⚠️ Utiliza Vite para desarrollo ultra-rápido.

🖼️ Características

    Navegación por categorías (jamones, embutidos, quesos, aceites, vinos, etc.)

    Bot conversacional con simulación de pedido

    Carrito dinámico y resumen final

    Envío del pedido vía WhatsApp

    Visual branding personalizado de Riscales

    Etiqueta final: “Potenciado por Integrabot.net”

🧱 Estructura del proyecto

frontend/
├── src/
│   ├── components/     ← Componentes reutilizables
│   ├── data/           ← Datos de productos y categorías
│   ├── assets/         ← Imágenes y recursos
│   ├── views/          ← Páginas principales
│   └── main.jsx        ← Entrypoint React
│
├── public/
├── .env
└── index.html

🌐 Despliegue en Vercel

El proyecto está optimizado para Vercel.
Pasos:

    Conectar el repositorio de GitHub a Vercel

    Seleccionar frontend/ como directorio raíz

    Configurar entorno con:

        Framework Preset: Vite

        Build command: pnpm build

        Output directory: dist

✅ Se generará una URL del tipo: https://riscales-bot.vercel.app
⚙️ Scripts disponibles

pnpm dev         # Modo desarrollo
pnpm build       # Build optimizada para producción
pnpm preview     # Previsualizar build de producción

🧠 Autoría

Creado por @Neiland85
Más soluciones en 👉 Integrabot.net
