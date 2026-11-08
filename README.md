# ComponentsLibrery

Colección de 33 componentes de React con animaciones, sombras y detalles distintos, listos para copiar y pegar en cualquier proyecto.

- Solo React + CSS Modules, sin librerías extra.
- Cada componente vive en su propia carpeta con su `.jsx` y su `.module.css` (y su imagen, si usa una).
- Funcionan sin props con datos de ejemplo y se personalizan con props.
- Respetan la opción del sistema "reducir movimiento".

## Ver la página de muestra

```bash
npm install
npm run dev
```

## Usar un componente en otro proyecto

1. Copia la carpeta completa del componente, por ejemplo `src/Components/Cards/TiltCard`.
2. Impórtalo:

```jsx
import TiltCard from './Components/Cards/TiltCard/TiltCard'

<TiltCard titulo="Hola" texto="Mi card con inclinación 3D" />
```

Funciona en cualquier proyecto de React que soporte CSS Modules (Vite, Next.js, etc.).

## Componentes

| Categoría | Componentes |
| --- | --- |
| Cards | BuyCard, IphoneCard, TiltCard, GlassCard, FlipCard, PricingCard, ProfileCard, StatCard, SpotlightCard |
| Buttons | ShineButton, RippleButton, MagneticButton, LoadingButton, LikeButton, Toggle, CopyButton |
| Pasarelas | Marquee, Slider, ExpandGallery, Carrusel |
| Animaciones | Typewriter, WaveText, GradientText, Loader, Reveal, Skeleton |
| Interfaz | Accordion, Tabs, FloatingInput, Tooltip, Modal, Toast, ProgressBar |

La carpeta `src/Pagina` es solo para la página de muestra; no hace falta copiarla.
