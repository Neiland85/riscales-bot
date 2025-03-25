# 🧠 Backend – riscales-bot

Este módulo corresponde a la **API del bot comercial de Riscales Alimentación**, desarrollado en **Node.js + Express**. Gestiona la lógica de negocio relacionada con los productos gourmet, categorías y pedidos de simulación.

📦 Repositorio raíz: [riscales-bot](https://github.com/Neiland85/riscales-bot)  
🤖 Potenciado por [Integrabot.net](https://integrabot.net)

---

## 🚀 Instalación y ejecución

### 1. Requisitos

- Node.js ≥ 18.x
- Gestor de paquetes: `pnpm` (recomendado)

### 2. Iniciar proyecto

```bash
cd backend
pnpm install
pnpm dev

El servidor se levanta en:
👉 http://localhost:3000
🔌 Endpoints disponibles
Método	Endpoint	Descripción
GET	/api/products	Lista de productos organizados por categoría
POST	/api/orders	Enviar un nuevo pedido simulado
GET	/api/categories	Devuelve listado de categorías (future)
GET	/api/offers	Promociones activas (future)
📁 Estructura

backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│   ├── utils/
│   └── index.js        ← entrypoint Express
│
├── package.json
├── README.md
└── .env

    ⚙️ En desarrollo: conexión a base de datos, lógica de stock, autenticación.

📦 Variables de entorno

Ejemplo de .env:

PORT=3000

📈 Futuras integraciones

    MongoDB o PostgreSQL para gestión real de pedidos

    API de WhatsApp para envío automático

    Conexión con CMS para gestión de productos

    Integración con BigQuery para análisis de datos

🛠️ Scripts disponibles

pnpm dev      # Levanta servidor en modo desarrollo
pnpm lint     # Revisa el código con ESLint
pnpm format   # Aplica Prettier

🧠 Autoría

Desarrollado por @Neiland85
Más soluciones en 👉 Integrabot.net
