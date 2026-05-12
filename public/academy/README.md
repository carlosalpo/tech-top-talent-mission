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
| `backgrounds/section-04-cockpit.webp` | Fallback del panel inferior central si no existe `cockpit-preview.webp` | `1280 x 360 px` |

## Iconos de misiones

Usa SVG transparente siempre que puedas. Si prefieres PNG, conserva el mismo nombre de archivo en el codigo o actualiza `iconPath` en `src/App.tsx`.

| Archivo | Uso | Tamano recomendado |
| --- | --- | --- |
| `icons/mission-01-icon.svg` | Icono de infraestructura / DC enterprise | `256 x 256 px` |
| `icons/mission-02-icon.svg` | Icono de alta disponibilidad / shield | `256 x 256 px` |
| `icons/mission-03-icon.svg` | Icono de nube hibrida / planeta | `256 x 256 px` |
| `icons/mission-04-icon.svg` | Icono de integracion / radar | `256 x 256 px` |

## Notas

- Exporta backgrounds en `.webp` con calidad 80-90 para mantener buen peso.
- Mantén los elementos importantes al centro de cada imagen; las tarjetas usan `background-size: cover`.
- Si un icono no existe todavia, el dashboard muestra un icono SVG inline temporal.
