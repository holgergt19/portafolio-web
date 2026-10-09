import type { ElementType } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SmoothScrollArea } from "@/components/ui/SmoothScrollArea";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="proyectos" muted>
      <Reveal>
        <SectionHeading
          code="100"
          eyebrow="PROYECTOS"
          title="Mis"
          highlight="proyectos"
          subtitle="Aplicaciones y plataformas que he desarrollado con enfoque en procesos reales y experiencia de usuario."
        />
      </Reveal>

      {/* Contenedor relativo: aloja el área con scroll + el degradado inferior */}
      <div className="relative mt-14">
        {/*
          SmoothScrollArea = viewport con scroll + efecto iPhone (inercia + rebote)
          en escritorio. Las clases van al viewport:
          - max-h-[...]   → altura visible (≈ 2 filas en escritorio). Sube/baja
            estos valores para mostrar más o menos tarjetas antes del scroll.
          - overflow-y-auto → activa el scroll vertical.
          - pl-2 pr-3 py-2 → aire interior para que el hover (elevación + sombra)
            no se recorte contra el borde.
          (La clase .projects-scroll la añade el propio componente.)
        */}
        <SmoothScrollArea className="max-h-[36rem] overflow-y-auto py-2 pl-2 pr-3 sm:max-h-[40rem] lg:max-h-[44rem]">
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              // Si el proyecto tiene repo, la tarjeta entera es un enlace a GitHub
              // (se abre en pestaña nueva). Si no lo tiene (p. ej. un proyecto de
              // hardware sin código publicado), se muestra como tarjeta normal,
              // sin hover de enlace ni cursor de puntero.
              const Wrapper: ElementType = project.github ? "a" : "div";
              const linkProps = project.github
                ? {
                    href: project.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `Ver repositorio de ${project.title} en GitHub`,
                  }
                : {};

              return (
                <Wrapper
                  key={project.title}
                  {...linkProps}
                  className={cn(
                    "hud-panel group flex h-full flex-col overflow-hidden",
                    project.github && "hud-panel-hover hover:-translate-y-1.5"
                  )}
                >
                  {/* Portada con iniciales */}
                  <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-line bg-bg-2 [background-image:linear-gradient(var(--hud-grid-major)_1px,transparent_1px),linear-gradient(90deg,var(--hud-grid-major)_1px,transparent_1px)] [background-size:20px_20px]">
                    <span aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,var(--hud-glow),transparent_70%)] opacity-70 transition-opacity group-hover:opacity-100" />
                    <span aria-hidden className="absolute h-24 w-24 rounded-full border border-dashed border-accent/40 transition-transform duration-700 group-hover:rotate-90" />
                    <span className="relative font-display text-4xl font-bold text-accent hud-glow-text transition-transform duration-500 group-hover:scale-110">
                      {project.initials}
                    </span>
                    {project.github && (
                      <span className="absolute left-3 top-3 flex items-center gap-1 border border-line bg-panel px-2 py-1 text-fg backdrop-blur-sm">
                        <GithubIcon size={13} />
                      </span>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display font-semibold uppercase tracking-wide transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {/* Pie: enlace al repo, o nota si no hay repo público */}
                    <div className="mt-4 border-t border-line pt-3">
                      {project.github ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-accent">
                          <GithubIcon size={13} />
                          Ver repositorio
                        </span>
                      ) : (
                        <span className="font-mono text-xs text-faint">
                          Proyecto de hardware — sin repositorio público
                        </span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </Reveal>
        </SmoothScrollArea>

        {/* Degradado inferior: pista visual de que hay más proyectos al hacer scroll.
            pointer-events-none → no bloquea el scroll ni los clics. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg to-transparent" />
      </div>
    </Section>
  );
}
