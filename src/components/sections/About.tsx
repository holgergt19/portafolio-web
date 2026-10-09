import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LottiePlayer } from "@/components/ui/LottiePlayer";
import { RolesCarousel } from "@/components/ui/RolesCarousel";
import { profile, stats } from "@/data/portfolio";

/**
 * Roles del carrusel vertical (sección "Sobre mí").
 * "Desarrollador de Software" NO va aquí: ya es el rol principal del Hero.
 * El orden importa: los primeros son los que más peso tienen en tu perfil.
 * Para añadir/quitar roles, edita solo este array.
 */
const roles: string[] = [
  "Desarrollador web",
  "Analista de datos",
  "Administrador de bases de datos",
  "Desarrollador de apps móviles",
  "Científico de datos",
  "Arquitecto de software",
  "DevOps",
  "Virtualización de SO",
  "Ciberseguridad",
  "Tester / QA de software",
  "Administrador de sistemas(ASIR)",
  "Administrador de redes",
  "Soporte técnico",
  "Project Manager técnico",
  "Consultor IT",
];

export function About() {
  return (
    <Section id="sobre-mi">
      <Reveal>
        <SectionHeading
          code="001"
          eyebrow="SOBRE MÍ"
          title="Ingeniero enfocado en"
          highlight="producir resultados"
          subtitle={profile.aboutSubtitle}
        />
      </Reveal>

      {/* lg:items-start evita que la columna de stats se estire a la altura del texto */}
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Texto + carrusel de roles */}
        <Reveal>
          <p className="text-muted">{profile.aboutText}</p>

          {/* Roles en carrusel vertical (sustituye a los antiguos highlights) */}
          <RolesCarousel roles={roles} className="mt-8" />
        </Reveal>

        {/* Estadísticas: todas las tarjetas idénticas, animación arriba + subtítulo alineado abajo */}
        <Reveal stagger className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              // ⬇️ Altura del RECTÁNGULO (igual para las 4): h-44, h-48, h-56...
              className="hud-panel hud-panel-hover flex h-48 flex-col overflow-hidden p-4 text-center hover:-translate-y-0.5"
            >
              {/* Zona de la animación: rellena el espacio libre pero SIN desbordar (min-h-0) */}
              <div className="flex min-h-0 flex-1 items-center justify-center">
                {stat.animation ? (
                  <LottiePlayer src={stat.animation} className="h-full w-full" />
                ) : (
                  <p className="text-3xl font-semibold text-accent">{stat.value}</p>
                )}
              </div>
              {/* Subtítulo: altura fija abajo (shrink-0) => todos alineados */}
              <p className="mt-2 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
