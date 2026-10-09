import type { ElementType } from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { certifications, education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="educacion">
      <Reveal>
        <SectionHeading
          code="101"
          eyebrow="EDUCACIÓN"
          title="Formación y"
          highlight="certificaciones"
          subtitle="Título universitario y credenciales que complementan mi perfil técnico."
        />
      </Reveal>

      {/* Título universitario */}
      <Reveal stagger className="mt-14 space-y-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="hud-panel hud-panel-hover flex gap-4 p-6"
          >
            <span className="hud-cut-sm flex h-12 w-12 shrink-0 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
              <GraduationCap size={24} />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display font-semibold uppercase tracking-wide">{edu.degree}</h3>
                <span className="font-mono text-xs text-accent">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-medium text-muted">
                {edu.institution}
              </p>
              <p className="mt-2 text-sm text-muted">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </Reveal>

      {/* Certificaciones */}
      <div className="mt-10">
        <Reveal>
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-display font-semibold uppercase tracking-wide">
              <Award size={18} className="text-accent" /> Certificaciones
            </h3>
            <span className="font-mono text-xs text-muted">
              <span className="text-accent">[</span> {certifications.length} <span className="text-accent">]</span> credenciales
            </span>
          </div>
        </Reveal>

        <Reveal stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            // Igual que en Proyectos: si hay `credentialUrl`, la tarjeta entera
            // es un enlace que abre la verificación de la credencial.
            const Wrapper: ElementType = cert.credentialUrl ? "a" : "div";
            const linkProps = cert.credentialUrl
              ? {
                  href: cert.credentialUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Ver credencial de ${cert.title}`,
                }
              : {};

            return (
              <Wrapper
                key={cert.title}
                {...linkProps}
                className={cn(
                  "hud-panel group flex flex-col p-5",
                  cert.credentialUrl && "hud-panel-hover hover:-translate-y-1"
                )}
              >
                <div className="flex items-start justify-between">
                  <Award size={18} className="text-accent" />
                  {cert.credentialUrl && (
                    <ExternalLink
                      size={14}
                      className="text-faint transition-colors group-hover:text-accent"
                    />
                  )}
                </div>
                <h4 className="mt-3 text-sm font-semibold transition-colors group-hover:text-accent">
                  {cert.title}
                </h4>
                <p className="mt-0.5 font-mono text-xs text-muted">
                  {cert.issuer}
                  {cert.date ? ` · ${cert.date}` : ""}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {cert.description}
                </p>
              </Wrapper>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
