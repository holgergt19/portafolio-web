# 📘 PORTAFOLIO-WEB — Estado del Proyecto (Checkpoint 1)

> **Checkpoint para retomar mañana.**
> Fecha: 25 de junio de 2026
> Usuario: Andres (@andregt99)

---

## 🎯 CONTEXTO DEL PROYECTO

### ¿Qué es portafolio-web?
Una **página web de portafolio personal** (tipo blog / web informativa) para presentarse a empresas. Muestra perfil, habilidades, experiencia, proyectos, educación y un formulario de contacto.

### Estructura de la página (acordada)
1. **Header:** logo + navegación (Inicio · Sobre mí · Habilidades · Experiencia · Proyectos · Educación · Contacto) + botón CV + toggle de tema claro/oscuro.
2. **Main (7 secciones al hacer scroll):** Hero → Sobre mí → Habilidades → Experiencia → Proyectos → Educación → Contacto.
3. **Footer:** marca + descripción + columna Secciones + columna Sígueme (redes) + email + copyright.

### Referencia visual
Web tipo "Anders Jackson" (limpia, profesional, acento azul). El contenido de ejemplo actual está basado en esa referencia y es 100% editable.

---

## 🛠️ STACK TECNOLÓGICO

| Capa | Herramienta | Notas |
|---|---|---|
| **Lenguaje** | TypeScript | |
| **Framework** | Next.js 16.2.x (App Router + Turbopack) | |
| **UI** | React 19.2.x | |
| **Estilos** | Tailwind CSS v4 | Modo oscuro **por clase** (custom-variant) |
| **Tema claro/oscuro** | next-themes | Toggle funcional |
| **Iconos** | lucide-react | ⚠️ ya NO trae logos de marca (GitHub/LinkedIn → SVG propio) |
| **Utilidades clases** | clsx + tailwind-merge | helper `cn()` |
| **Base de datos** | Firebase Firestore | Conectada (formulario de contacto) |
| **Imágenes** | Locales en `/public` | ❌ NO se usa Cloudinary ni Firebase Storage |
| **Gestor paquetes** | pnpm | |
| **Repo** | GitHub (pendiente de subir) | |
| **Hosting** | Vercel (pendiente) | |

---

## ✅ LO QUE YA ESTÁ HECHO

### 1. Proyecto creado y funcionando
- Creado con `pnpm create next-app@latest portafolio-web` (TypeScript, ESLint, Tailwind, `src/`, App Router, Turbopack).
- `pnpm dev` arranca sin errores en `http://localhost:3000`.
- Git inicializado localmente (rama `master` → pendiente pasar a `main`).

### 2. Dependencias instaladas
```bash
pnpm add firebase next-themes clsx tailwind-merge lucide-react
```

### 3. Estructura de archivos (patrón: composición + datos centralizados)
```
portafolio-web/
├── .env.local                      ← claves Firebase (NO se sube a Git)
├── next.config.ts                  ← intacto (sin cambios)
├── src/
│   ├── app/
│   │   ├── globals.css             ← Tailwind v4 + dark por clase + estilos de efectos
│   │   ├── layout.tsx              ← fuentes (Inter + JetBrains Mono) + ThemeProvider + SEO
│   │   ├── page.tsx                ← ensambla Header + 7 secciones + Footer
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          ← nav + toggle + menú móvil + scroll-spy
│   │   │   └── Footer.tsx          ← 4 columnas + iconos SVG de marca
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx           (Sobre mí)
│   │   │   ├── Skills.tsx          (Habilidades)
│   │   │   ├── Experience.tsx      (Experiencia)
│   │   │   ├── Projects.tsx        (Proyectos)
│   │   │   ├── Education.tsx       (Educación)
│   │   │   └── Contact.tsx         (Contacto → guarda en Firestore)
│   │   ├── ui/
│   │   │   ├── Section.tsx         ← envoltorio de sección reutilizable
│   │   │   ├── SectionHeading.tsx  ← eyebrow + título + acento
│   │   │   ├── Badge.tsx           ← "pill" de tecnología
│   │   │   ├── ThemeToggle.tsx     ← botón claro/oscuro
│   │   │   ├── Reveal.tsx          🆕 animación al hacer scroll
│   │   │   └── Typewriter.tsx      🆕 efecto typing
│   │   └── theme-provider.tsx      ← wrapper de next-themes
│   ├── data/
│   │   └── portfolio.ts            ⭐ TODO el contenido + tipos (editar aquí)
│   └── lib/
│       ├── firebase.ts             ← conexión a Firestore (export `db`)
│       └── utils.ts                ← helper cn()
```

### 4. Firebase configurado
- Proyecto en consola: **portafolio-web** (Project ID: `portafolio-web-33077`).
- App web registrada; `firebaseConfig` en `.env.local` con variables `NEXT_PUBLIC_FIREBASE_*`.
- `src/lib/firebase.ts` exporta `db` (Firestore).
- **Firestore Database creada** en región `europe-southwest1` (Madrid), en **modo de prueba**.
- El formulario de Contacto guarda mensajes en la colección **`messages`**.
- ❌ Storage NO activado (a propósito: imágenes en local).

### 5. Efectos visuales implementados (sin librerías extra)
1. **Reveal al hacer scroll** — encabezados y bloques entran con fundido; rejillas en cascada (stagger).
2. **Micro-interacciones de hover** — tarjetas que suben + sombra + borde de acento; zoom de iniciales en proyectos; brillo cruzando la tarjeta del hero.
3. **Transición suave de tema** — fundido de 0.3s al cambiar claro/oscuro.
4. **Fondo del hero** — rejilla de puntos difuminada + halo de acento.
5. **Efecto typing** — línea `< Full Stack />` que escribe/borra roles (editable en `typedRoles`).
- ✅ Todos respetan `prefers-reduced-motion` (accesibilidad).

---

## ⏳ LO QUE QUEDA POR HACER

### Contenido real
- [ ] Editar `src/data/portfolio.ts` con datos reales (nombre, perfil, proyectos, experiencia, educación, certificaciones, redes, email/teléfono).
- [ ] Colocar el CV en `public/cv.pdf` (el botón "Descargar CV" apunta a `/cv.pdf`).
- [ ] (Opcional) Sustituir el logo de iniciales por un logo en imagen.

### Firebase (antes de publicar)
- [ ] **Afinar las Security Rules de Firestore** — ahora está en modo de prueba (permite escrituras de cualquiera y caduca a ~30 días). Definir reglas para permitir solo crear en `messages`.
- [ ] Probar el formulario de contacto y verificar que llega a Firestore → colección `messages`.

### Git + Deploy
- [ ] Pasar la rama de `master` a `main` (`git branch -M main`).
- [ ] Subir el repo a GitHub (privado).
- [ ] Crear cuenta/proyecto en **Vercel** y conectar el repo.
- [ ] Configurar las variables de entorno `NEXT_PUBLIC_FIREBASE_*` en Vercel.
- [ ] Primer deploy → URL `.vercel.app`.

### Pulido posterior (opcional)
- [ ] Página de blog / experimentos (si se quiere ampliar el "portafolio de experimentos").
- [ ] SEO (Open Graph image, sitemap, robots).
- [ ] Dominio propio.

---

## 🐞 PROBLEMAS RESUELTOS EN ESTAS SESIONES

1. **Carpeta `components` dentro de `app/`** → movida a `src/components/` (hermana de `app`) para que los imports `@/components/...` funcionen.
2. **`lucide-react` sin iconos de marca** → `GitHub` y `LinkedIn` ya no existen como exports en la versión instalada (1.21.0). Solución: definirlos como **SVG en línea** dentro de `Footer.tsx`.
3. **Footer roto al pegar** → al pegar sobre el archivo se perdió una etiqueta `<a>` y salieron ~38 errores en cascada. Solución: vaciar el archivo (`Ctrl+A` → borrar) antes de pegar, o reemplazar el archivo completo.

> 💡 **Regla aprendida:** para archivos largos, reemplazar el archivo entero (no pegar encima) para evitar mezclas.

---

## 🗄️ MODELO DE DATOS FIRESTORE

### Colección `messages` (formulario de contacto)
```
id          → auto
name        → string
email       → string
message     → string
createdAt   → serverTimestamp()
```

---

## 🔑 DATOS CLAVE (para tener a mano)

| Concepto | Valor |
|---|---|
| **Usuario GitHub** | @andregt99 |
| **Email GitHub** | agtbusiness99@gmail.com |
| **Nombre del proyecto** | portafolio-web |
| **Repo local** | `C:\Users\corpa\Documents\GitHub\portafolio-web\` |
| **Firebase Project ID** | portafolio-web-33077 |
| **Región Firestore** | europe-southwest1 (Madrid) |
| **Colección Firestore** | messages |
| **Acento de la web** | `#2563eb` (azul) — se cambia en `globals.css` (`--color-accent`) |
| **Fuentes** | Inter (texto) + JetBrains Mono (etiquetas/código) |
| **Rama Git actual** | master (pasar a `main`) |
| **Sistema operativo** | Windows 11 |

---

## 📋 CÓMO RETOMAR MAÑANA

1. Abrir VS Code en `C:\Users\corpa\Documents\GitHub\portafolio-web\`.
2. Abrir terminal (`Ctrl + Ñ`) y arrancar:
   ```bash
   pnpm dev
   ```
3. Abrir `http://localhost:3000` y comprobar que carga la web completa con sus efectos y el toggle de tema.
4. Continuar por el camino elegido. Orden recomendado:
   1. **Contenido real** en `src/data/portfolio.ts` + CV en `public/cv.pdf`.
   2. **Probar el formulario** de contacto (que llegue a Firestore).
   3. **GitHub** (rama `main` + subir repo).
   4. **Vercel** (deploy + variables de entorno).
   5. **Security Rules** de Firestore antes de dar la URL a empresas.

---

## 🎯 DECISIONES CLAVE TOMADAS

1. ✅ Reutilizar el entorno del proyecto anterior (Node, pnpm, Git, VS Code).
2. ✅ Stack: Next.js + TypeScript + Tailwind v4 + shadcn (cuando haga falta).
3. ✅ Firebase Firestore para datos dinámicos (formulario de contacto).
4. ✅ Imágenes en **local** (`/public`), no Cloudinary ni Storage.
5. ✅ Patrón: **componentes por sección + contenido centralizado** en `data/portfolio.ts` (añadir contenido = editar un array, no crear archivos).
6. ✅ Efectos con **CSS + IntersectionObserver**, sin librerías de animación (bundle ligero).
7. ✅ Animaciones sutiles y con `prefers-reduced-motion` (enfoque profesional).
8. ✅ Vercel y GitHub pospuestos hasta tener contenido y diseño listos.

---

*Documento generado el 25 de junio de 2026 como Checkpoint 1 del proyecto portafolio-web.*
*Listo para retomar en un chat nuevo cargando este archivo + el zip actualizado del proyecto.*
