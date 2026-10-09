# 📕 PORTAFOLIO-WEB — Estado del Proyecto (Checkpoint 4)

> **Continuación del Checkpoint 3.** Fecha: 8 de septiembre de 2026
> Resumen: **rediseño visual completo estilo "HUD de ingeniería" (referencia J.A.R.V.I.S. / Iron Man)**. Sin cambios de contenido, datos ni lógica. Claro/oscuro se conserva.

## 🎨 Sistema de diseño
| Token | Claro ("plano técnico") | Oscuro ("consola HUD") |
|---|---|---|
| Fondo | `#eef3f8` | `#04070d` |
| Acento | `#0891b2` (cian) | `#22d3ee` (cian eléctrico) |
| Paneles | blanco translúcido | azul-negro translúcido + blur |

- **Fuentes:** Chakra Petch (titulares, nueva vía `next/font`) · Inter (texto) · JetBrains Mono (etiquetas).
- **Elementos:** rejilla técnica global + viñeta + scanlines (`.hud-backdrop`), paneles con esquinas en "L" (`.hud-panel`, `.hud-panel-hover`), botones con corte diagonal (`.hud-cut`, `.hud-cut-sm`), retícula giratoria detrás del Lottie del Hero (`HudReticle.tsx`), timeline con nodos luminosos, portadas de proyectos con rejilla + glow.
- Todo el color va por **variables CSS** en `globals.css` (`:root` y `.dark`) expuestas a Tailwind con `@theme inline` → los componentes usan `bg-bg`, `text-fg`, `text-muted`, `border-line`, `bg-panel`, `text-accent`, `text-on-accent`… **Ya no hay clases `slate-*`/`zinc-*` ni `dark:`** en los componentes.

## 📁 Archivos
```
🆕 src/components/ui/HudReticle.tsx        ← retícula SVG decorativa del Hero
✏️ src/app/globals.css                      ← tokens HUD + utilidades (reveal/stagger/projects-scroll intactos)
✏️ src/app/layout.tsx                       ← fuente Chakra Petch + <div class="hud-backdrop">
✏️ src/components/ui/{Section,SectionHeading,Badge,ThemeToggle,RolesCarousel}.tsx  ← solo clases/colores
✏️ src/components/layout/{Header,Footer}.tsx ← estilo HUD (misma navegación, scroll-spy, menú móvil)
✏️ src/components/sections/*.tsx            ← solo clases; misma estructura y datos
🔒 src/data/portfolio.ts, LottiePlayer, Typewriter, SmoothScrollArea, BrandIcons, lib/ ← SIN CAMBIOS
```

## ✅ Cómo retomar
1. Sustituir la carpeta `src/` por la del zip (no hay dependencias nuevas: la fuente la trae `next/font/google`).
2. `pnpm dev` → comprobar Hero (retícula + Lottie), paneles con esquinas, claro/oscuro.
3. Ajustes rápidos: colores en `:root`/`.dark` de `globals.css`; intensidad de rejilla en `--hud-grid*`; scanlines en `--hud-scan`; velocidad de anillos en `.hud-spin*`.

## ⏳ Pendiente (heredado del Checkpoint 3)
- Proyectos / Educación / Certificaciones reales; `tech` de L&L y Puerto Quito; completar `Contact.tsx` (bloque disponibilidad + redes, imports sin uso); `href` reales de redes; coherencia España/Ecuador; `master` → `main`, GitHub, Vercel, SEO.
