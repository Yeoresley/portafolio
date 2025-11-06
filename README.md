# ASSI — v2 (Next.js + Tailwind + i18n + Blog + KPIs)

## Dev
npm install
npm run dev

## SMTP .env
Copia `.env.local.example` a `.env.local` y completa.

## Estructura
- `/app/[locale]` rutas en ES/EN
- `/posts` artículos markdown
- `/app/api/contact` envío de formulario por SMTP

## Deploy Vercel
Importa el repo, añade env vars (`SMTP_*`, `CONTACT_TO`), deploy.
