import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experiencia">
      <Reveal>
        <SectionHeading
          code="011"
          eyebrow="EXPERIENCIA"
          title="Trayectoria"
          highlight="profesional"
          subtitle="Empresas, roles y aprendizajes clave en mi recorrido como desarrollador."
        />
      </Reveal>

      <div className="relative mt-14">
        {/* Línea vertical de la timeline */}
        <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-accent/60 via-line-strong to-transparent sm:left-2.5" />

        <Reveal stagger className="space-y-10">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="relative pl-10 sm:pl-12">
              <div className="hud-panel hud-panel-hover p-5 sm:p-6">
              {/* Punto */}
              <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-accent bg-bg shadow-[0_0_12px_var(--hud-glow)]">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-accent">{job.period}</span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                  <MapPin size={12} /> {job.location}
                </span>
              </div>

              <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-wide">{job.role}</h3>
              <p className="text-sm font-medium text-muted">
                {job.company}
              </p>

              <p className="mt-3 text-sm text-muted">
                {job.summary}
              </p>

              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
