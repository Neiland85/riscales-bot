# 🛒 riscales-bot · Asistente Comercial Inteligente para Riscales Alimentación

![Integrabot.net](https://integrabot.net/assets/integrabot-logo-black.png)

**riscales-bot** es una aplicación web desarrollada para **Riscales Alimentación**, especializada en productos gourmet como jamones, quesos, aceites, vinos y más. Este bot permite a clientes profesionales (restaurantes, tiendas, hoteles) realizar **pedidos simulados** de forma conversacional e interactiva.

🧠 Potenciado por [Integrabot.net](https://integrabot.net)  
📦 Repositorio mantenido por [@Neiland85](https://github.com/Neiland85)

---

## ✨ Características

- Frontend en **React + Tailwind CSS**
- Backend en **Node.js + Express**
- Selector de productos por categorías (jamones, quesos, vinos, etc.)
- Visualización con imágenes de alta calidad por categoría
- Resumen de pedido y simulación de envío por WhatsApp
- Preparado para conexión a APIs reales (productos, precios, stock)
- Estructura limpia para despliegue en **Vercel** y futuras integraciones

---

## 📁 Estructura del proyecto

riscales-bot/ │ ├── frontend/ ← App visual en React ├── backend/ ← API en Node.js para productos/pedidos ├── .gitignore ├── LICENSE └── README.md


---

## 🚀 Cómo levantar el proyecto

### Requisitos previos
- Node.js ≥ 18
- pnpm (recomendado)

### Clonar el repositorio
```bash
git clone https://github.com/Neiland85/riscales-bot.git
cd riscales-bot

🔧 Frontend

cd frontend
pnpm install
pnpm dev

    Accede en http://localhost:5173

🔧 Backend

cd backend
pnpm install
pnpm dev

    API en http://localhost:3000/api/products (mock temporal)

🧩 Próximas funcionalidades

    Conexión real con catálogo dinámico y API de precios

    Generación automática de presupuestos

    Envío de pedidos reales por WhatsApp

    Análisis de datos con BigQuery para estrategia SEO

    Dashboard de gestión para el cliente

⚡ Licencia

Distribuido bajo licencia Apache 2.0 · ¡Hazlo crecer!
🤝 Colabora

¿Quieres colaborar, integrarte o aprender más?

📩 Contacto: https://integrabot.net
👨‍💻 Dev: https://github.com/Neiland85

💡 “El futuro del comercio B2B pasa por la automatización inteligente.”


