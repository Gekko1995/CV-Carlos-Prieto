# Imágenes del CV

Esta carpeta es donde van todas las imágenes que aparecen en el CV (foto de perfil, fotos de proyectos, etc.).

## Cómo añadir tu foto de perfil

1. **Pon tu foto aquí** con el nombre `foto.jpg` (también vale `foto.png`).
   - Tamaño recomendado: **600×800 px** (proporción vertical 3:4)
   - Peso ideal: < 300 KB (puedes optimizarla en https://squoosh.app)

2. **Edita** `src/data.js`, busca en `profile`:
   ```js
   photo: null,
   ```
   y cámbialo a:
   ```js
   photo: '/images/foto.jpg',
   ```

3. Listo. Recarga el navegador (`npm run dev`) y verás tu foto en el Hero.

## Cómo añadir imágenes a los proyectos

Cada proyecto en `src/data.js` puede tener su propia imagen. Por ejemplo, para añadir una imagen al proyecto "Plataforma ETH-ANH":

1. Pon la imagen aquí: `public/images/proyecto-eth.jpg`
   - Tamaño recomendado: **1200×675 px** (proporción 16:9)

2. En `src/data.js`, busca el proyecto y cambia:
   ```js
   image: null,
   ```
   por:
   ```js
   image: '/images/proyecto-eth.jpg',
   ```

3. La imagen aparecerá como banner arriba de la tarjeta del proyecto.

## Notas

- Las rutas siempre empiezan con `/images/...` (no `./` ni `public/`).
- Vite copia esta carpeta al `dist/` durante el build automáticamente.
- Formatos soportados: JPG, PNG, WEBP, SVG.
