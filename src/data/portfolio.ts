/**
 * ⭐ ÚNICO archivo de contenido del portafolio.
 * Para añadir/editar un proyecto, una experiencia, una certificación, etc.,
 * NO crees archivos nuevos: edita los arrays de aquí abajo.
 * Los componentes solo recorren estos datos y los pintan.
 */

/* ---------- Tipos ---------- */

export interface NavItem {
  label: string;
  href: string; // ancla, ej: "#sobre-mi"
}

export interface Social {
  label: string;
  href: string;
  platform: "github" | "linkedin" | "email" | "phone";
}

export interface Stat {
  value: string;
  label: string;
  animation?: string;
}

export interface SkillGroup {
  code: string; // "01", "02"...
  name: string;
  subtitle: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  title: string;
  initials: string;
  year: string;
  description: string;
  tech: string[];
  featured?: boolean;
  github?: string; // URL al repositorio. Si no existe, la tarjeta no es clicable.
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  date?: string; // fecha de expedición, ej: "Nov. 2024", o rango si está en curso
  credentialUrl?: string; // enlace de verificación (si existe, la credencial es clicable)
  inProgress?: boolean; // true = curso aún no finalizado
}

/* ---------- Perfil ---------- */

export const profile = {
  brand: "Portfolio",
  brandAccent: ".dev",
  name: "Andrés García",
  role: "Desarrollador de Software",
  available: true,
  availableText: "Disponible para nuevos proyectos",
  location: "España",
  email: "corp.andriel@gmail.com",
  phone: "+34 634795348",
  heroIntro:
    "Construyo productos digitales escalables y experiencias elegantes con diferentes herramientas y lenguajes de programación",
  aboutTitle: "Ingeniero enfocado en producir resultados",
  aboutSubtitle: "Perfil técnico y forma de trabajar.",
  aboutText:
    "Ingeniero de Software y Técnico Superior en Administración de Sistemas Informáticos en Red. Mi doble titulación une el desarrollo con los sistemas y las redes, y por eso entiendo un proyecto desde que se escribe hasta que funciona en producción.",
  aboutHighlights: [
    "APIs REST con Spring Boot y .NET Core",
    "Bases de datos PostgreSQL y SQL Server",
    "Frontends con React y TypeScript",
    "Despliegue y soporte en entornos empresariales",
  ],
};

/* ---------- Roles para el efecto typing del hero ---------- */

export const typedRoles: string[] = [
  "Full Stack Development",
  "Frontend",
  "Backend",
  "JavaScript",
  "three.js",
  "Python",
  "Java",
  "C#",
  "SQL",
  "HTML",
  "CSS",
  "Go",
  "PHP",
  "Kotlin",
  "C/C++",
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "React Native",
  "Flutter",
  "Node.js",
  "Spring Boot",
  ".NET / ASP.NET Core",
  "Django",
  "FastAPI",
  "Ruby",
  "API REST",
  "GraphQL",
  "Swagger / OpenAPI",
  "WebSockets",
  "PostgreSQL",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Oracle",
  "Git",
  "GitHub",
  "GitLab",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "AWS",
  "Azure",
  "Google Cloud",
  "Postman",
  "Redes",
  "Protocolos de seguridad cisco",
  "Virtualización de sistemas operativos",
  "Gestión de usuarios",
];

/* ---------- Navegación ---------- */

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

/* ---------- Redes ---------- */

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrés-garcía-38b038279",
    platform: "linkedin",
  },
];

/* ---------- Estadísticas (Sobre mí) ---------- */

export const stats: Stat[] = [
  { value: "5+", label: "Años programando", animation: "/lottie/stat-anios.json" },
  { value: "15+", label: "Proyectos", animation: "/lottie/stat-proyectos.json" },
  { value: "20+", label: "Tecnologías dominadas", animation: "/lottie/stat-tecnologias.json" },
  { value: "3", label: "Empresas / Clientes", animation: "/lottie/stat-clientes.json" },
];

/* ---------- Habilidades ----------
   Estructura en 3 niveles para que la sección respire y sea honesta con la
   profundidad (y no parezca un muro de keywords):
     1) allTech        → banda superior "Stack principal" (lo que usas a diario)
     2) skillGroups    → 6 tarjetas por capa del desarrollo
     3) methodologies  → franja inferior (cómo trabajas: no son "tecnologías")
     4) alsoWorkedWith → renglón apagado (experiencia previa / puntual)
   Para añadir/quitar una tecnología: edita el array correspondiente. */

// 1) Banda superior: selección destacada (lo que usas a diario).
export const allTech: string[] = [
  "Servicios de Red",
  "React",
  "Next.js",
  "Virtualizacion SO",
  "Redes",
  "Servidores",
  "Spring Boot",
  ".NET Core",
  "Python",
  "PostgreSQL",
  "SQL Server",
  "Docker",
  "Git",
  "Linux",
  "Windows server"
];

// 2) Tarjetas por capa (6 grupos).
export const skillGroups: SkillGroup[] = [
  {
    code: "01",
    name: "Lenguajes",
    subtitle: "Fundamentos y lógica",
    skills: ["Three.js", "JavaScript", "Python", "Java", "PHP", "C/C++", "SQL"],
  },
  {
    code: "02",
    name: "Frontend",
    subtitle: "Interfaces y UX",
    skills: ["React", "Next.js", "Vue.js", "PHP", "HTML", "CSS"],
  },
  {
    code: "03",
    name: "Backend & APIs",
    subtitle: "Servicios y datos",
    skills: [
      "Node.js",
      "Spring Boot",
      ".NET Core",
      "FastAPI",
      "REST",
      "Microservicios",
    ],
  },
  {
    code: "04",
    name: "Bases de datos",
    subtitle: "Persistencia y consultas",
    skills: ["PostgreSQL", "SQL Server", "Oracle", "MySQL", "MongoDB", "Elasticsearch", "NoSQL"],
  },
  {
    code: "05",
    name: "DevOps & Cloud",
    subtitle: "Despliegue e infraestructura",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD", "Linux","Firebase","Protocolos redes: eigrp, rip, ospf","VLANs"],
  },
  {
    code: "06",
    name: "Datos, BI & IA",
    subtitle: "Análisis y modelos",
    skills: ["Power BI", "Tableau", "QlikView", "Machine Learning"],
  },
];

// 3) Franja inferior: metodologías y herramientas de trabajo.
export const methodologies: string[] = [
  "Git",
  "GitHub",
  "GitLab",
  "JIRA",
  "Scrum",
  "Agile",
];

// 4) Renglón apagado: experiencia previa / puntual.
export const alsoWorkedWith: string[] = [
  "R",
  "VB.NET",
  "Google Apps Script",
  "MS Access",
  "Ruby",
];

/* ---------- Experiencia ----------
   Orden: de más reciente a más antigua (así la recorre la timeline).
   summary = 1 frase resumen; bullets = logros/tareas; tech = badges.
   ⚠️ En L&L y Puerto Quito dejé tech: [] porque en las descripciones no se
   nombra un stack concreto y no quería inventar badges. Pásame las herramientas
   reales de cada uno y las relleno. */

export const experience: ExperienceItem[] = [
  {
    role: "Asistente Técnico Jurídico",
    company: "L&L Legal Consulting Group",
    period: "Mar. 2024 — Jun. 2024",
    location: "Quito, Ecuador",
    summary:
      "Rol híbrido entre tecnología y operaciones legales, enfocado en la implementación de chatbots de atención al cliente y en la mejora de la interfaz web institucional.",
    bullets: [
      "Implementación y gestión de chatbots para atención al cliente, optimizando tiempos de respuesta y experiencia de usuario.",
      "Mejora y optimización de la interfaz web institucional aplicando principios de usabilidad y eficiencia.",
      "Soporte técnico y operativo a los distintos departamentos y atención directa a clientes en escenarios de alta demanda.",
      "Apoyo en la logística y gestión de trámites judiciales, contribuyendo a la digitalización de procesos internos.",
    ],
    tech: [],
  },
  {
    role: "Asistente Operativo y Técnico",
    company: "Junta Cantonal de Protección de Derechos de Puerto Quito",
    period: "Ago. 2023 — Feb. 2024",
    location: "Puerto Quito, Ecuador",
    summary:
      "Soporte técnico a sistemas institucionales y diseño de nuevas soluciones tecnológicas para optimizar procesos y la eficiencia operativa.",
    bullets: [
      "Soporte técnico a diversos sistemas institucionales dentro de proyectos tecnológicos interdepartamentales.",
      "Diseño y propuesta de soluciones tecnológicas, incluyendo la automatización de la transcripción en tiempo real de audiencias.",
      "Registro eficiente de declaraciones de testigos sin necesidad de grabar las sesiones ni transcribir manualmente después.",
      "Seguimiento y acompañamiento de casos, digitalización documental y mejora de la eficiencia operativa.",
    ],
    tech: [],
  },
  {
    role: "Analista de Datos",
    company: "AKEA S.A.",
    period: "Feb. 2023 — Jun. 2023",
    location: "Pichincha, Ecuador",
    summary:
      "Análisis de datos de inventario para identificar patrones en los niveles de stock y apoyar la toma de decisiones operativas.",
    bullets: [
      "Análisis exploratorio y estadístico de datos con MongoDB y consultas SQL para la extracción, procesamiento y análisis de información.",
      "Identificación de patrones de comportamiento en los niveles de stock para apoyar decisiones operativas.",
      "Soporte tecnológico y operativo a los distintos departamentos, contribuyendo a la optimización de procesos internos.",
    ],
    tech: ["MongoDB", "SQL"],
  },
];

/* ---------- Proyectos ----------
   Cada proyecto puede llevar `github` (URL al repositorio). Si lo tiene, la
   tarjeta en Projects.tsx se vuelve un enlace clicable a GitHub. Si no lo
   tiene (p. ej. un proyecto de hardware sin código publicado), la tarjeta se
   muestra normal, sin comportamiento de enlace.
   ⚠️ Los años están puestos por defecto: confírmalos y ajústalos. */

export const projects: Project[] = [
  {
    title: "App Uber (Flutter)",
    initials: "UF",
    year: "2024", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Aplicación móvil multiplataforma (Android/iOS) para gestión de solicitudes tipo taxi, con roles diferenciados de usuario y conductor. Backend en Firebase (datos, autenticación y tiempo real) y geolocalización con Google Maps.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    featured: true,
    github: "https://github.com/holgergt19/AppMovil-UBER-FLUTTER",
  },
  {
    title: "BeiDenti",
    initials: "BD",
    year: "2024", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Aplicación web responsive para la gestión integral de un consultorio odontológico: inventario, usuarios, citas, radiografías e historiales clínicos. Integra un chatbot con la API de OpenAI y una simulación de colocación de brackets sobre el rostro del paciente mediante IA.",
    tech: ["Django REST Framework", "Python", "OpenAI API", "JavaScript"],
    featured: true,
    github: "https://github.com/holgergt19/Deploy-PaginaWeb-BEIDENTI",
  },
  {
    title: "RTV — Reconocimiento de Vehículos",
    initials: "RV",
    year: "2023", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Software de reconocimiento automático de vehículos en imágenes mediante modelos de IA preentrenados, con recorte y transposición precisos del vehículo sobre una imagen base. Interfaz para cargar, procesar, visualizar y descargar resultados.",
    tech: ["Python", "OpenCV", "YOLOv8"],
    featured: true,
    github: "https://github.com/holgergt19/RTV",
  },
  {
    title: "Monitorización de Ordenadores",
    initials: "MO",
    year: "2023", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Sistema de auditoría de consumo energético orientado a sostenibilidad: un agente se instala en cada ordenador a analizar y se conecta por TCP a un equipo local, que centraliza el análisis del consumo (incluido el propio).",
    tech: ["Python", "TCP/Sockets", "HTML"],
    github: "https://github.com/holgergt19/Proyecto-Monitorizacion-ordenadores",
  },
  {
    title: "Muxunay Web",
    initials: "MW",
    year: "2024", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Página web desarrollada con Next.js y TypeScript, construida sobre una base moderna con Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/andregt99/muxunay-web",
  },
  {
    title: "Robot 4WD con Raspberry + Python",
    initials: "R4",
    year: "2023", // ⚠️ AJUSTAR: confirmar año real del proyecto
    description:
      "Robot 4WD con visión por computador (OpenCV) para detección y seguimiento de línea negra en tiempo real. Incluye control manual, control autónomo y mapeo del entorno para recordar zonas visitadas.",
    tech: ["Python", "Raspberry Pi", "OpenCV"],
    // Sin repositorio: proyecto físico (hardware), no tiene código publicado.
  },
   {
    title: "AEGIS — Auditoría de seguridad con IA (en curso)",
    initials: "AE",
    year: "2026",
    description:
      "Servicio de auditoría de vulnerabilidades para aplicaciones web y APIs. Usa agentes de IA (Strix) sobre un laboratorio virtualizado y aislado, valida cada fallo con una prueba real y entrega informes con CVSS y OWASP.",
    tech: ["Proxmox VE", "OPNsense", "Docker", "Python", "FastAPI", "PostgreSQL", "Grafana"],
    featured: true,
  },
  {
    title: "Web de herrería (Forja Sabadell)",
    initials: "HW",
    year: "2026",
    description:
      "Landing de conversión para una herrería con hero fotográfico, ficha técnica por obra y un formulario que abre WhatsApp con el pedido ya redactado. Diseño oscuro propio con planos técnicos en SVG y animaciones con GSAP. Marca ficticia de prototipo.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    featured: true,
    github: "https://github.com/holgergt19/herreria-web", // añadir cuando lo subas
  },
  {
    title: "App Android",
    initials: "PG",
    year: "2026",
    description:
      "App Android nativa para registrar cada semana peso, calorías, rutina y etapa (volumen, definición, mantenimiento). Incluye gráfica de peso con media móvil y una pestaña de salud con IMC, gasto energético, FFMI y ratio cintura/altura. Funciona sin conexión y sin permisos.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    featured: true,
    github: "https://github.com/holgergt19/gym-android", // añadir cuando lo subas
  },
  {
    title: "Simulaciones y mundos en Godot",
    initials: "GD",
    year: "2026",
    description:
      "Proyectos de aprendizaje con el motor Godot: creación de escenarios y mundos y de simulaciones que se ejecutan sobre ellos.",
    tech: ["Godot", "Simulación"],
    github: "https://github.com/holgergt19/godot-simulaciones",
  },
  {
    title: "Factured — App Android de facturas",
    initials: "FA",
    year: "2026",
    description:
      "App Android que escanea tickets y facturas con la cámara, lee el texto con OCR en el propio móvil y extrae comercio, fecha, total y artículos. Se revisan los datos antes de guardar y la app lleva el control del gasto: total del mes, facturas agrupadas por mes y buscador por comercio o artículo.",
    tech: ["Kotlin", "Jetpack Compose", "CameraX", "ML Kit OCR", "Room", "MVVM"],
    featured: true,
    github: "https://github.com/holgergt19/Factured-App-Android-de-facturas", // añadir cuando lo subas
  },
];

/* ---------- Educación ---------- */

export const education: EducationItem[] = [
  {
    degree: "Grado en Ingeniería — Software Developer",
    institution: "Universidad de Las Américas (UDLA), Ecuador",
    period: "Sept. 2019 — Jul. 2024",
    description:
      "Formación universitaria en Ingeniería de Software, enfocada en los fundamentos del desarrollo de software, análisis y diseño de sistemas, programación, bases de datos, arquitectura de aplicaciones y gestión de proyectos. Durante la carrera adquirí conocimientos en ingeniería de requisitos, metodologías de desarrollo, estructuras de datos, algoritmos y calidad de software, así como experiencia en el desarrollo de aplicaciones académicas orientadas a la resolución de problemas reales mediante soluciones tecnológicas eficientes y escalables.",
  },
  {
    degree:
      "Formación Profesional de Grado Superior — Administración de Sistemas Informáticos en Red (ASIR)",
    institution: "DigitechFP",
    period: "Oct. 2025 — Jul. 2027 (en curso)",
    description:
      "Formación de Grado Superior en Administración de Sistemas Informáticos en Red orientada al diseño, implementación y administración de infraestructuras tecnológicas. Adquisición de conocimientos en sistemas operativos, redes, bases de datos, virtualización, ciberseguridad y servicios en la nube, así como en la automatización de procesos, resolución de incidencias y gestión de entornos IT.",
  },
];

/* ---------- Certificaciones ---------- */

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity",
    issuer: "Google (Coursera)",
    date: "Nov. 2024",
    description:
      "Certificado profesional de 8 cursos centrado en fundamentos de ciberseguridad: gestión de riesgos, seguridad de redes, herramientas SIEM, sistemas de detección de intrusos (IDS), Linux, SQL y automatización de tareas de seguridad con Python.",
    credentialUrl: "https://coursera.org/verify/professional-cert/UXOZHZFHQMGC",
  },
    {
    title: "Introducción a Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Oct. 2025",
    description:
      "Curso introductorio al simulador Cisco Packet Tracer: diseño, configuración y prueba de topologías de red en un entorno virtual.",
    credentialUrl: "/certificados/ccna1.pdf",
  },
  {
    title: "CCNA 1: Introducción a las redes",
    issuer: "Cisco Networking Academy · DigitechFP",
    date: "Oct. 2026",
    description:
      "Primero de la serie CCNA: arquitectura, protocolos y componentes fundamentales de las redes de datos.",
    credentialUrl: "/certificados/ccna2.pdf",
  },
  {
    title: "CCNA 2: Fundamentos de Conmutación, Enrutamiento y Redes Inalámbricas",
    issuer: "Cisco Networking Academy · DigitechFP",
    date: "Oct. 2026",
    description:
      "Segundo de la serie CCNA: arquitectura, configuración y operación de switches y routers en redes empresariales pequeñas y medianas.",
    credentialUrl: "/certificados/ccna3.pdf",
  },
  {
    title: "CCNA 3: Redes Empresariales, Seguridad y Automatización",
    issuer: "Cisco Networking Academy · DigitechFP",
    date: "Oct. 2026",
    description:
      "Tercero de la serie CCNA: arquitecturas de red empresarial, seguridad de redes, automatización y programabilidad mediante APIs.",
    credentialUrl: "/certificados/ccna4.pdf",
  },
];
