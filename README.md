# CV — Carlos Andrés Prieto Martín

CV interactivo de **Carlos Andrés Prieto Martín** · Ingeniero Mecatrónico.

Construido con **Vite + React 18**. Soporta modo claro/oscuro, es responsive y exporta a PDF desde el navegador (botón "Descargar PDF" o `Ctrl/Cmd+P`).

## Desarrollo

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Producción

```bash
npm run build
npm run preview
```

El build se genera en `dist/`.

## Editar el contenido

Toda la información del CV vive en un solo archivo: **`src/data.js`**.

- `profile` — nombre, título, resumen
- `contact` — email, GitHub, LinkedIn, matrícula
- `experience` — experiencia laboral
- `education` — formación académica
- `skills` — habilidades por categoría
- `projects` — proyectos destacados

## Foto de perfil

Por defecto se muestra un placeholder con las iniciales **CP**. Para reemplazarlo por una foto real:

1. Pon la imagen en `public/foto.jpg` (o `.png`).
2. En `src/components/Hero.jsx`, sustituye el bloque `<div className="photo__placeholder">…</div>` por:
   ```jsx
   <img src="/foto.jpg" alt="Carlos Andrés Prieto Martín" className="photo__placeholder" />
   ```

## Deploy en Vercel

1. Vincula el repo en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Vite automáticamente.
3. Listo — el `vercel.json` ya configura el SPA routing.

## Deploy en Netlify

1. Conecta el repo en [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
