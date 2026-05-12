# Tech Top Talent Academy Assets

Coloca aqui los visuales finales del dashboard. El codigo ya referencia estos nombres exactos; cuando agregues los archivos, Vite los servira desde `/academy/...`.

## Backgrounds principales

| Archivo | Uso | Tamano recomendado |
| --- | --- | --- |
| `backgrounds/section-01-hero.webp` | Fondo espacial general de la pantalla principal | `2400 x 1350 px` |
| `missions/mission-01-bg.webp` | Fondo interno de la tarjeta 01 | `640 x 900 px` |
| `missions/mission-02-bg.webp` | Fondo interno de la tarjeta 02 | `640 x 900 px` |
| `missions/mission-03-bg.webp` | Fondo interno de la tarjeta 03 | `640 x 900 px` |
| `missions/mission-04-bg.webp` | Fondo interno de la tarjeta 04 | `640 x 900 px` |
| `panels/cockpit-preview.webp` | Imagen panoramica del panel inferior central | `1280 x 360 px` |

## Iconos de misiones

Usa PNG con fondo transparente para permitir ilustraciones complejas. WebP tambien funciona bien si quieres reducir peso; en ese caso cambia las cuatro rutas `iconPath` en `src/App.tsx` de `.png` a `.webp`.

| Archivo | Uso | Tamano recomendado |
| --- | --- | --- |
| `icons/mission-01-icon.png` | Icono de infraestructura / DC enterprise | `512 x 512 px` |
| `icons/mission-02-icon.png` | Icono de alta disponibilidad / shield | `512 x 512 px` |
| `icons/mission-03-icon.png` | Icono de nube hibrida / planeta | `512 x 512 px` |
| `icons/mission-04-icon.png` | Icono de integracion / radar | `512 x 512 px` |

## Notas

- Exporta backgrounds en `.webp` con calidad 80-90 para mantener buen peso.
- Exporta iconos en PNG transparente a `512 x 512 px`; se renderizan visualmente cerca de `98 x 98 px`, pero el doble/quadruple de resolucion ayuda en pantallas retina.
- Mantén los elementos importantes al centro de cada imagen; las tarjetas usan `background-size: cover`.
- Si un icono no existe todavia, el dashboard muestra un icono SVG inline temporal.
