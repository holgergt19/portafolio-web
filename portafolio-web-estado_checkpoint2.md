# 📗 PORTAFOLIO-WEB — Estado del Proyecto (Checkpoint 2)

> **Continuación del Checkpoint 1.**
> Fecha: 25 de junio de 2026
> Usuario: Andrés (@andregt99)
> Resumen: en esta sesión se eliminó Firebase, se quitó el botón de CV, se integraron animaciones **Lottie** (Hero + tarjetas de "Sobre mí") y se rellenaron Perfil, Contacto y Habilidades con contenido real.

---

## 🎯 RESUMEN DE LO QUE CAMBIÓ DESDE EL CHECKPOINT 1

1. **Contacto** pasó de **formulario** a **solo información** (email, teléfono, ubicación, disponibilidad y redes).
2. **Firebase ELIMINADO por completo** (era usado únicamente por el formulario). Ya no hay base de datos ni Security Rules pendientes.
3. **Botón "Descargar CV" / "CV" eliminado** del Hero y de la cabecera (desktop + móvil).
4. **Iconos de marca** (GitHub/LinkedIn) extraídos a un archivo compartido `BrandIcons.tsx`.
5. **Animaciones Lottie integradas** con `lottie-web` (motor **SVG**, nítido):
   - El **Hero** ahora muestra una animación en lugar de la tarjeta azul "AG".
   - Las **4 tarjetas de estadísticas** de "Sobre mí" muestran una animación cada una en vez del número.
6. **Contenido real** cargado en Perfil, Contacto, Habilidades y roles del Hero.

---

## 🛠️ CAMBIOS EN EL STACK

| Capa | Antes (Checkpoint 1) | Ahora (Checkpoint 2) |
|---|---|---|
| **Base de datos** | Firebase Firestore (formulario) | ❌ **Eliminada** (contacto es solo informativo) |
| **Animaciones** | Solo CSS + IntersectionObserver | ➕ **Lottie** vía `lottie-web` (renderer SVG) |
| **Imágenes / assets** | Locales en `/public` | Igual + **animaciones Lottie** en `/public/lottie/` |

### Dependencias
```bash
# Añadida en esta sesión:
pnpm add lottie-web

# Eliminadas en esta sesión:
pnpm remove firebase
pnpm remove @lottiefiles/dotlottie-react   # se probó primero, pero daba pixelado/desborde
```
> ⚠️ Nota: primero se intentó `@lottiefiles/dotlottie-react` (motor **canvas**), pero se veía **pixelado** y **se desbordaba** de las tarjetas. Se cambió a **`lottie-web` con renderer SVG** (vectorial = nítido y se ajusta al contenedor). Esa es la solución definitiva.

---

## 📁 ARCHIVOS NUEVOS / MODIFICADOS / ELIMINADOS

### 🆕 Nuevos
```
src/components/ui/LottiePlayer.tsx     ← reproductor Lottie (lottie-web, SVG, "use client")
src/components/ui/BrandIcons.tsx       ← SVG de GitHub y LinkedIn (compartidos)
public/lottie/hero.json                ← animación del Hero
public/lottie/stat-anios.json          ← animación "Años programando"
public/lottie/stat-proyectos.json      ← animación "Proyectos entregados"
public/lottie/stat-tecnologias.json    ← animación "Tecnologías dominadas"
public/lottie/stat-clientes.json       ← animación "Empresas / Clientes"
```

### ✏️ Modificados
```
src/components/sections/Contact.tsx     ← solo información (sin formulario, sin Firebase)
src/components/sections/Hero.tsx        ← animación Lottie en vez de tarjeta azul; sin botón CV
src/components/sections/About.tsx       ← cada tarjeta de stats con su animación, centradas y alineadas
src/components/layout/Header.tsx        ← sin enlace "CV" (desktop ni móvil); import Download limpiado
src/components/layout/Footer.tsx        ← usa BrandIcons en vez de SVG en línea
src/data/portfolio.ts                   ← contenido real + Stat.animation + allTech + skillGroups + typedRoles
```

### ❌ Eliminados
```
src/lib/firebase.ts                     ← ya no se usa (Firebase fuera)
```
> El campo `cvUrl` sigue en `portfolio.ts` pero **ya no se usa** (se dejó por si se quiere volver a poner el botón de CV).

---

## ✅ DETALLE DE LO IMPLEMENTADO

### 1. Contacto → solo información
- Se quitó el formulario (nombre/email/mensaje) y la escritura en Firestore.
- Ahora muestra: **Email**, **Teléfono**, **Ubicación**, estado de **disponibilidad** y **redes**, todo clicable.
- `Contact.tsx` pasó a ser **server component** (sin `"use client"`).

### 2. Firebase eliminado
- El formulario era el único consumidor de `db`, así que se desinstaló `firebase` y se borró `src/lib/firebase.ts`.
- **Desaparece todo el bloque Firebase del Checkpoint 1**: ni Security Rules, ni modo de prueba, ni variables `NEXT_PUBLIC_FIREBASE_*` en Vercel. **El deploy es ahora más simple.**

### 3. Botón CV eliminado
- Quitado de `Hero.tsx` (botón "Descargar CV") y de `Header.tsx` (enlace "CV" en barra superior y en menú móvil).
- Limpiados los imports de `Download` que quedaban sin uso.

### 4. Iconos de marca compartidos
- `GithubIcon` y `LinkedinIcon` movidos a `src/components/ui/BrandIcons.tsx`.
- `Footer.tsx` (y el nuevo Contacto) los importan desde ahí.

### 5. Animaciones Lottie
- **Reproductor:** `LottiePlayer.tsx` usa `lottie.loadAnimation({ renderer: "svg", path, ... })` dentro de un `useEffect` (solo cliente). Props: `src`, `loop`, `autoplay`, `className`, `style`.
- **Hero:** la tarjeta azul "AG" se sustituyó por `<LottiePlayer src="/lottie/hero.json" loop />` dentro de un contenedor con `aspect-[3/2]` (ajustable).
- **Sobre mí (stats):**
  - Se añadió el campo `animation?: string` a la interface `Stat`.
  - Cada stat apunta a su `.json` (`/lottie/stat-*.json`). Si una no tiene `animation`, muestra el número como respaldo.
  - **Layout final de las tarjetas:** `h-48` (altura fija e igual para las 4) · animación dentro de `flex-1` con **`min-h-0`** (rellena sin desbordar) · `overflow-hidden` en la tarjeta · subtítulo con **`shrink-0`** abajo (todos alineados) · `lg:items-start` en el contenedor para que la columna no se estire.

### 6. Contenido real cargado (`portfolio.ts`)
- **Perfil:** nombre **Andrés García**, rol **Desarrollador de Software**, ubicación **España**, email **corp.andriel@gmail.com**, teléfono **+34 634795348**, intro actualizada.
- **typedRoles:** ampliado con **toda** la lista de tecnologías (identidad + lenguajes + frameworks + BBDD + DevOps).
- **Habilidades:** `allTech` (selección destacada para la banda resumen) y `skillGroups` reorganizados en **5 grupos**: `01 Lenguajes`, `02 Frontend`, `03 Backend & APIs`, `04 Bases de datos`, `05 DevOps & Cloud`.

---

## 🐞 PROBLEMAS RESUELTOS EN ESTA SESIÓN

1. **Lottie pixelado + desbordándose** → el motor **canvas** (`@lottiefiles/dotlottie-react`) se veía borroso al escalar y no respetaba el tamaño. **Solución:** cambiar a **`lottie-web` con renderer `svg`** (vectorial, nítido, se ajusta).
2. **Tarjetas de stats descuadradas / subtítulos a distinta altura** → un flex hijo con `min-height: auto` crecía hasta el tamaño del SVG. **Solución:** `min-h-0` en la zona de la animación + `overflow-hidden` en la tarjeta + `shrink-0` en el subtítulo.
3. **La columna de stats se estiraba** a la altura del texto, dejando huecos enormes. **Solución:** `lg:items-start` en el contenedor de dos columnas.
4. **Lottie en Next.js** → la librería necesita el navegador. **Solución:** `"use client"` + cargar dentro de `useEffect`.

> 💡 **Regla aprendida:** para animaciones de After Effects/LottieFiles en web, usar el formato **Lottie (.json)** con **renderer SVG**, no canvas, para que se vean nítidas y encajen en el layout.

---

## 🧱 ESTRUCTURA DE DATOS NUEVA (relevante)

### Interface `Stat` (ampliada)
```ts
export interface Stat {
  value: string;
  label: string;
  animation?: string; // ruta a la animación Lottie en /public (opcional)
}
```

### `skillGroups` → 5 grupos
`01 Lenguajes` · `02 Frontend` · `03 Backend & APIs` · `04 Bases de datos` · `05 DevOps & Cloud`
(La rejilla actual es `md:grid-cols-3` → se ven como 3 + 2. Opcional rebalancear a `sm:grid-cols-2 lg:grid-cols-3`.)

---

## ⏳ LO QUE QUEDA POR HACER

### Contenido real (pendiente)
- [ ] **Experiencia** — sigue con datos demo (GOREA, SUNARP). Reemplazar por experiencia real.
- [ ] **Proyectos** — siguen demo (Sistema de Planillas, MOREMA, etc.). Poner proyectos reales.
- [ ] **Educación y certificaciones** — siguen demo (UNTRM + certificados de ejemplo). Actualizar.

### Pulido visual (opcional)
- [ ] La animación de **estrellas** se ve más pequeña que las demás (trae margen transparente en su `.json`). Opción: añadir un `scale` por animación, o cambiarla por una más ajustada.
- [ ] Rebalancear la rejilla de Habilidades (5 tarjetas) si se quiere 3+2 más parejo.
- [ ] Revisar tamaño/proporción de la animación del Hero (`aspect-[3/2]`).

### Git + Deploy (pendiente, ahora más simple)
- [ ] Pasar rama `master` → `main`.
- [ ] Subir repo a GitHub (privado).
- [ ] Conectar con **Vercel** y desplegar. **Ya NO hay que configurar variables de Firebase.**
- [ ] (Opcional) SEO: Open Graph image, sitemap, robots; dominio propio.

> ❌ **Ya NO aplica del Checkpoint 1:** afinar Security Rules de Firestore, probar el formulario, configurar variables `NEXT_PUBLIC_FIREBASE_*`. Todo eso desapareció al quitar Firebase.

---

## 🔑 DATOS CLAVE (actualizados)

| Concepto | Valor |
|---|---|
| **Usuario GitHub** | @andregt99 |
| **Email GitHub** | agtbusiness99@gmail.com |
| **Nombre (web)** | Andrés García |
| **Rol (web)** | Desarrollador de Software |
| **Ubicación (web)** | España |
| **Email (web)** | corp.andriel@gmail.com |
| **Teléfono (web)** | +34 634795348 |
| **Repo local** | `C:\Users\corpa\Documents\GitHub\portafolio-web\` |
| **Acento de la web** | `#2563eb` (azul) — en `globals.css` (`--color-accent`) |
| **Fuentes** | Inter (texto) + JetBrains Mono (etiquetas/código) |
| **Animaciones** | Lottie `.json` en `public/lottie/` (motor SVG de `lottie-web`) |
| **Rama Git actual** | master (pasar a `main`) |
| **Sistema operativo** | Windows 11 |
| **Firebase** | ❌ Eliminado |

---

## 📋 CÓMO RETOMAR

1. Abrir VS Code en `C:\Users\corpa\Documents\GitHub\portafolio-web\`.
2. Terminal → `pnpm dev` → abrir `http://localhost:3000`.
3. Comprobar que carga: Hero con animación, "Sobre mí" con las 4 animaciones alineadas, Habilidades con los 5 grupos, Contacto solo informativo.
4. Continuar por:
   1. **Contenido real** de Experiencia, Proyectos, Educación y Certificaciones (en `src/data/portfolio.ts`).
   2. **GitHub** (rama `main` + subir repo privado).
   3. **Vercel** (deploy directo, sin variables de entorno).
   4. **Pulido** opcional (animación de estrellas, rejilla de skills, SEO).

---

## 🎯 DECISIONES CLAVE DE ESTA SESIÓN

1. ✅ Contacto = **solo información**, sin formulario → **Firebase eliminado** del proyecto.
2. ✅ Animaciones con **Lottie + `lottie-web` (renderer SVG)**, archivos en `public/lottie/`.
3. ✅ El Hero usa animación en lugar de la tarjeta "AG"; las stats usan animación en vez de números.
4. ✅ Sin botón de CV (Hero ni cabecera) por ahora.
5. ✅ Iconos de marca centralizados en `BrandIcons.tsx`.
6. ✅ Habilidades en 5 grupos; `typedRoles` con la lista completa de tecnologías.

---

*Documento generado el 25 de junio de 2026 como Checkpoint 2 del proyecto portafolio-web.*
*Para retomar en un chat nuevo: cargar este archivo + el Checkpoint 1 + el zip actualizado del proyecto.*
