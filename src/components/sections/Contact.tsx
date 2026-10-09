import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile, socials } from "@/data/portfolio";

// Mapa de plataforma -> icono (los de marca son SVG propios; el resto, lucide)
const brandIcon = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  phone: Phone,
} as const;

export function Contact() {
  // Tarjetas de contacto directo (se editan desde data/portfolio.ts)
  const directContacts = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
    },
    {
      label: "Teléfono",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      Icon: Phone,
    },
    {
      label: "Ubicación",
      value: profile.location,
      href: undefined,
      Icon: MapPin,
    },
  ];

  return (
    <Section id="contacto" muted>
      <Reveal>
        <SectionHeading
          code="110"
          eyebrow="CONTACTO"
          title="Hablemos de tu"
          highlight="proyecto"
          subtitle="¿Tienes una vacante o un proyecto en mente? Estos son mis canales de contacto."
        />
      </Reveal>

      {/* Tarjetas de contacto directo */}
      <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-3">
        {directContacts.map(({ label, value, href, Icon }) => {
          const card = (
            <div className="hud-panel hud-panel-hover flex h-full flex-col items-start gap-3 p-6 hover:-translate-y-1">
              <span className="hud-cut-sm flex h-10 w-10 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <div>
                <p className="font-mono text-xs tracking-widest text-muted">
                  {label.toUpperCase()}
                </p>
                <p className="mt-1 font-mono font-medium break-words">{value}</p>
              </div>
            </div>
          );

          return href ? (
            <a key={label} href={href} className="group block">
              {card}
            </a>
          ) : (
            <div key={label}>{card}</div>
          );
        })}
      </Reveal>

      {/* Disponibilidad + redes */}
      
    </Section>
  );
}
