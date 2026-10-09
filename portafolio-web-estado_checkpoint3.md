# 📙 PORTAFOLIO-WEB — Estado del Proyecto (Checkpoint 3)

> **Continuación del Checkpoint 2.**
> Fecha: 6 de julio de 2026
> Usuario: Andrés (@andregt99)
> Resumen: en esta sesión se **rediseñó por completo la sección Habilidades** (de 3 a 6 grupos + banda de stack principal + franja de metodologías + renglón secundario) y se **reemplazó la Experiencia de ejemplo por la experiencia real** (3 puestos). También se documentan hallazgos del código que no estaban en checkpoints anteriores.

---

## 🎯 RESUMEN DE LO QUE CAMBIÓ DESDE EL CHECKPOINT 2

1. **Habilidades rediseñada** en 4 niveles: banda "Stack principal", 6 tarjetas por capa, franja de metodologías y renglón apagado de tecnologías secundarias.
2. **`skillGroups` pasó de 3 → 6 grupos** y se cargaron muchas tecnologías nuevas.
3. **Dos arrays nuevos** en `portfolio.ts`: `methodologies` y `alsoWorkedWith`.
4. **`Skills.tsx` actualizado** (rejilla, banda con badges en acento, franja y renglón) sin tocar `globals.css`.
5. **Experiencia real cargada**: se eliminaron las demo (GOREA, SUNARP) y se pusieron **L&L Legal Consulting Group**, **Junta Cantonal de Puerto Quito** y **AKEA S.A.**
6. Se dejaron **hallazgos documentados** (archivo `SmoothScrollArea.tsx` sin documentar, `Contact.tsx` a medias) para no perderlos.

---

## 📁 ARCHIVOS MODIFICADOS EN ESTA SESIÓN

```
src/data/portfolio.ts                    ← Habilidades (allTech + skillGroups + 2 arrays nuevos) y Experiencia real
src/components/sections/Skills.tsx        ← rediseño de la sección (banda + 6 tarjetas + franja + renglón)
```
> `Experience.tsx` **NO se tocó**: ya recorre el array `experience` y pinta la timeline solo. Basta con cambiar los datos.

---

## ✅ DETALLE DE LO IMPLEMENTADO

### 1. Habilidades — nueva estructura de datos (`portfolio.ts`)

Ahora la sección se arma con **4 arrays**:

| Array | Rol en la UI |
|---|---|
| `allTech` | Banda superior **"Stack principal"** (lo que se usa a diario). |
| `skillGroups` | **6 tarjetas** por capa del desarrollo. |
| `methodologies` *(nuevo)* | **Franja inferior** "Metodologías & herramientas". |
| `alsoWorkedWith` *(nuevo)* | **Renglón apagado** "También he trabajado con…". |

**Los 6 grupos (`skillGroups`):**

```
01 · Lenguajes        → TypeScript, JavaScript, Python, Java, C#, PHP, C/C++, SQL
02 · Frontend         → React, Next.js, Vue.js, TailwindCSS, HTML, CSS, OpenLayers
03 · Backend & APIs   → Node.js, Spring Boot, .NET Core, FastAPI, Ruby on Rails, Hibernate, REST, GraphQL, Microservicios
04 · Bases de datos   → PostgreSQL, SQL Server, Oracle, MySQL, MongoDB, Elasticsearch, NoSQL
05 · DevOps & Cloud   → Docker, Kubernetes, AWS, Azure, Google Cloud, CI/CD, Jenkins, Linux
06 · Datos, BI & IA   → Power BI, Tableau, QlikView, Machine Learning, Deep Learning, PowerApps
```

**Banda `allTech` (11):** TypeScript · React · Next.js · Node.js · Spring Boot · .NET Core · Python · PostgreSQL · SQL Server · Docker · Git.

**`methodologies`:** Git · GitHub · GitLab · JIRA · Postman · Scrum · Kanban · TDD.

**`alsoWorkedWith` (apagado):** R · VB.NET · Google Apps Script · MS Access · Ruby.

### 2. Habilidades — rediseño visual (`Skills.tsx`)

- **Banda "Stack principal"** con badges en color de **acento** (azul) y contador que usa `allTech.length`.
- **Rejilla de 6 tarjetas**: se cambió `md:grid-cols-3` → **`sm:grid-cols-2 lg:grid-cols-3`** (1 col móvil · 2 en sm · 3 en lg = 3+3, sin tarjeta huérfana).
- **Franja "Metodologías & herramientas"** (tarjeta blanca con etiqueta mono).
- **Renglón "También he trabajado con…"** con badges de **borde discontinuo** en tono apagado.
- Reutiliza `Badge`, `Section` y `Reveal` → hereda hover, cascada y modo oscuro. **No se tocó `globals.css`.**

**Criterio de diseño (por qué así):** 3 niveles para ser honesto con la profundidad y no parecer un muro de keywords → *stack principal* (lo que defiendes en entrevista) → *rejilla por categorías* (tu amplitud) → *renglón apagado* (lo básico/antiguo).

### 3. Experiencia real (`portfolio.ts`)

Se reemplazaron las 2 demo por **3 puestos reales**, de más reciente a más antiguo:

| # | Puesto | Empresa | Periodo | Ubicación |
|---|---|---|---|---|
| 1 | Asistente Técnico Jurídico | L&L Legal Consulting Group | Mar. 2024 — Jun. 2024 | Quito, Ecuador |
| 2 | Asistente Operativo y Técnico | Junta Cantonal de Protección de Derechos de Puerto Quito | Ago. 2023 — Feb. 2024 | Puerto Quito, Ecuador |
| 3 | Analista de Datos | AKEA S.A. | Feb. 2023 — Jun. 2023 | Pichincha, Ecuador |

- Cada puesto: `summary` de una frase + `bullets` con tareas/logros.
- **`tech`:** AKEA → `["MongoDB", "SQL"]` (únicas herramientas nombradas). **L&L y Puerto Quito → `tech: []`** (con comentario `⚠️` en el archivo) porque en sus descripciones no se nombra un stack concreto. Con `[]` la timeline se ve bien; simplemente no muestra badges hasta rellenarlos.

---

## 🔎 HALLAZGOS DEL CÓDIGO (no estaban en checkpoints previos)

1. **`skillGroups` tenía 3 grupos, no 5.** El Checkpoint 2 decía 5 grupos, pero el código traía 3. **Resuelto en esta sesión → ahora son 6.**
2. **Existe `src/components/ui/SmoothScrollArea.tsx`** (no documentado). Es un scroll con **inercia + rebote tipo iPhone** para escritorio, ya integrado en `Projects.tsx` con su CSS `.projects-scroll` en `globals.css`. Respeta `prefers-reduced-motion` y en táctil usa scroll nativo. **Queda documentado aquí.**
3. **`Contact.tsx` está a medias:** el bloque final de **"Disponibilidad + redes"** es solo un comentario vacío (no se renderiza) y por eso **importa `socials` y define `brandIcon` (con `GithubIcon`/`LinkedinIcon`) que no se usan** → avisos de ESLint. Pendiente de completar/limpiar.

---

## ⏳ LO QUE QUEDA POR HACER

### Contenido real (pendiente)
- [ ] **Experiencia → `tech` de L&L y Puerto Quito** (pasar el stack real para rellenar los badges).
- [ ] **Proyectos** — siguen demo (Sistema de Planillas, MOREMA, etc.). Decidir cuáles son reales y reemplazar.
- [ ] **Educación y certificaciones** — siguen demo (UNTRM + certificados "Plataforma Online"). Actualizar.

### Arreglos / limpieza
- [ ] **Completar `Contact.tsx`**: bloque de disponibilidad + redes; y limpiar imports sin uso (`socials`, `brandIcon`, `GithubIcon`, `LinkedinIcon`).
- [ ] **`socials`**: los `href` de GitHub/LinkedIn son genéricos (`https://github.com`). Poner los perfiles reales.
- [ ] **Coherencia de ubicación**: el perfil dice **España**, pero la experiencia es de **Ecuador**. Revisar qué mostrar de cara a empresas.

### Pulido visual (opcional)
- [ ] Animación de **estrellas** en "Sobre mí" se ve más pequeña (margen transparente en su `.json`).
- [ ] Revisar proporción de la animación del Hero (`aspect-[3/2]`).

### Git + Deploy (pendiente)
- [ ] Pasar rama `master` → `main`.
- [ ] Subir repo a GitHub (privado).
- [ ] Conectar con **Vercel** y desplegar (sin variables de entorno, ya no hay Firebase).
- [ ] (Opcional) SEO: Open Graph image, sitemap, robots; dominio propio.

---

## 🔑 DATOS CLAVE (actualizados)

| Concepto | Valor |
|---|---|
| **Usuario GitHub** | @andregt99 |
| **Email GitHub** | agtbusiness99@gmail.com |
| **Nombre (web)** | Andrés García |
| **Rol (web)** | Desarrollador de Software |
| **Ubicación (web)** | España *(la experiencia real es de Ecuador — revisar)* |
| **Email (web)** | corp.andriel@gmail.com |
| **Teléfono (web)** | +34 634795348 |
| **Repo local** | `C:\Users\corpa\Documents\GitHub\portafolio-web\` |
| **Acento de la web** | `#2563eb` (azul) — en `globals.css` (`--color-accent`) |
| **Fuentes** | Inter (texto) + JetBrains Mono (etiquetas/código) |
| **Animaciones** | Lottie `.json` en `public/lottie/` (motor SVG de `lottie-web`) |
| **Scroll Proyectos** | `SmoothScrollArea.tsx` (inercia + rebote en escritorio) |
| **Rama Git actual** | master (pasar a `main`) |
| **Sistema operativo** | Windows 11 |
| **Firebase** | ❌ Eliminado (desde Checkpoint 2) |

---

## 📋 CÓMO RETOMAR

1. Abrir VS Code en `C:\Users\corpa\Documents\GitHub\portafolio-web\`.
2. Terminal → `pnpm dev` → abrir `http://localhost:3000`.
3. Comprobar: **Habilidades** con banda principal + 6 tarjetas + franja + renglón; **Experiencia** con los 3 puestos reales.
4. Continuar por:
   1. Pasar el **stack de L&L y Puerto Quito** (para los badges de Experiencia).
   2. **Proyectos** reales (en `projects` de `portfolio.ts`).
   3. **Educación y certificaciones** reales.
   4. **Completar/limpiar `Contact.tsx`** + `href` reales de redes.
   5. **GitHub** (`main` + repo privado) y **Vercel** (deploy directo).

---

## 🎯 DECISIONES CLAVE DE ESTA SESIÓN

1. ✅ Habilidades en **6 grupos** + banda principal + franja de metodologías + renglón apagado.
2. ✅ Diseño en **3 niveles** por honestidad (destacado → categorías → secundario), reutilizando componentes existentes.
3. ✅ Roles de datos ("Científico/Ingeniero/Analista de datos") **no** van en Habilidades (son roles, no tecnologías).
4. ✅ Experiencia real cargada (L&L, Puerto Quito, AKEA); `tech` solo cuando está evidenciado (no inventar badges).
5. ✅ `Experience.tsx` y `globals.css` intactos; los cambios viven en datos + `Skills.tsx`.

---

*Documento generado el 6 de julio de 2026 como Checkpoint 3 del proyecto portafolio-web.*
*Para retomar en un chat nuevo: cargar este archivo + los Checkpoints 1 y 2 + el zip actualizado del proyecto.*
