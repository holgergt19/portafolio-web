import { Layers } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import {
  allTech,
  skillGroups,
  methodologies,
  alsoWorkedWith,
} from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="habilidades" muted>
      <Reveal>
        <SectionHeading
          code="010"
          eyebrow="HABILIDADES"
          title="Stack tecnológico"
          highlight="actualizado"
          subtitle="Herramientas que domino en producción, organizadas por capas del desarrollo."
        />
      </Reveal>

      {/* Banda: stack principal (lo destacado, en acento) */}
      <Reveal className="mt-12">
        <div className="hud-panel hud-panel-hover p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="hud-cut-sm flex h-10 w-10 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
                <Layers size={20} />
              </span>
              <div>
                <p className="font-display font-semibold uppercase tracking-wide">Stack principal</p>
                <p className="text-sm text-muted">
                  Lo que uso a diario, desde la base de datos hasta la interfaz.
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-semibold text-accent hud-glow-text">
                {allTech.length}
              </p>
              <p className="font-mono text-xs tracking-widest text-muted">
                TECNOLOGÍAS
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {allTech.map((tech) => (
              <Badge
                key={tech}
                className="border-accent/40 bg-accent/10 text-accent hover:border-accent"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Grupos por capa (6 tarjetas, en cascada). 1 col en móvil, 2 en sm, 3 en lg */}
      <Reveal stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.code}
            className="hud-panel hud-panel-hover p-6 hover:-translate-y-1"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display font-semibold uppercase tracking-wide">{group.name}</h3>
              <span className="font-mono text-xs text-accent">
                {group.code}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {group.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      {/* Franja: metodologías y herramientas de trabajo */}
      <Reveal className="mt-6">
        <div className="hud-panel hud-panel-hover p-6">
          <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted"><span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            METODOLOGÍAS &amp; HERRAMIENTAS
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {methodologies.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Renglón apagado: experiencia previa / puntual */}
      
    </Section>
  );
}
