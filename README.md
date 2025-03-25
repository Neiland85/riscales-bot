# 🤖 Riscales Bot – Asistente Comercial Automatizado

Este proyecto implementa un asistente conversacional comercial para **Riscales Alimentación**, que permite recopilar leads desde un formulario web, enviarlos por WhatsApp y almacenarlos automáticamente en **Google Sheets**.

---

## 📦 Tecnologías Utilizadas

- **Frontend**: Next.js + TypeScript + Tailwind (v0.dev)
- **Backend**: Node.js + Express + TypeScript
- **Base de datos**: Google Sheets (API REST con autenticación JWT)
- **Mensajería**: WhatsApp (link directo con número prellenado)
- **CI/CD**: GitHub Actions para validaciones automáticas

---

## 🧩 Estructura del Proyecto

riscales-bot/ ├── backend/ │ ├── src/ │ │ ├── controllers/ │ │ ├── routes/ │ │ ├── middlewares/ │ │ └── services/ │ ├── .env │ └── eslint.config.mjs ├── frontend/ │ └── app/lead-form/ ├── .github/ │ └── workflows/ │ └── riscales-ci.yml


---

## 🚀 Instalación Local

### Requisitos

- Node.js 18+
- `pnpm` instalado globalmente
- Cuenta de Google Cloud + credenciales JWT
- Archivo `.env` con el ID de tu Google Spreadsheet

### Clonación e instalación

```bash
git clone https://github.com/Neiland85/riscales-bot.git
cd riscales-bot

# Frontend
pnpm install
pnpm dev

# Backend
cd backend
pnpm install
pnpm dev

🔒 Variables de Entorno (.env)

Crea un archivo .env en la carpeta backend/ con el siguiente contenido:

GOOGLE_SPREADSHEET_ID=1N1v0aWxdJHHBkTU3emLUIhjcpLAqCsFeQlflef1lQHM
PORT=3001

Las credenciales del servicio deben colocarse en backend/credentials/service-account.json (este archivo no se sube al repo por seguridad).
🧪 Pruebas

Para ejecutar pruebas unitarias en backend (si están configuradas):

cd backend
pnpm test

🌐 Funcionalidad

Formulario en /lead-form para introducir nombre y teléfono

Validación de datos (nombre, teléfono)

Envío automático a Google Sheets vía API

Redirección a WhatsApp con mensaje personalizado

    Validaciones CI con GitHub Actions en pull requests

👥 Contribuir

    Haz un fork de este repositorio.

    Crea tu rama: git checkout -b feature/nueva-funcionalidad.

    Realiza tus cambios y haz commit: git commit -m 'feat: mejora interesante'.

    Sube tu rama: git push origin feature/nueva-funcionalidad.

    Abre un Pull Request y describe tu mejora.

🧠 Futuras Mejoras

Integración con una base de datos real (PostgreSQL / MongoDB)

Panel de administración con métricas y seguimiento de leads

Notificaciones por email al recibir nuevos leads

Protección con reCAPTCHA

    Multilingüe

👨‍💻 Autor

Desarrollado por Neil Muñoz (Neiland85) — freelance developer & tech entrepreneur.
Contacto: integrabot.nmunoz@gmail.com

📄 Licencia

Este proyecto está bajo la licencia Apache 2.0.  
Puedes usarlo, modificarlo y distribuirlo libremente siempre que respetes los términos de la licencia.  
Más info: [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)

