import { Mail, Phone } from "lucide-react";
import { navItems, profile, socials } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  phone: Phone,
} as const;

export function Footer() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <footer className="relative border-t border-line bg-bg-2/70 px-6 py-14">
      {/* Línea de acento superior */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="hud-cut-sm flex h-8 w-8 items-center justify-center bg-accent font-display text-sm font-bold text-on-accent">
              {initials}
            </span>
            <span className="font-display text-base tracking-wide">
              {profile.brand}
              <span className="text-accent">{profile.brandAccent}</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">{profile.heroIntro}</p>
        </div>

        {/* Secciones */}
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" /> SECCIONES
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sígueme */}
        <div>
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" /> SÍGUEME
          </h3>
          <div className="mt-4 flex gap-2">
            {socials.map((social) => {
              const Icon = iconMap[social.platform];
              const isExternal =
                social.platform === "github" || social.platform === "linkedin";
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="hud-cut-sm inline-flex h-9 w-9 items-center justify-center border border-line bg-panel text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
        </p>
        <p className="font-mono text-xs">Creado por Andres Garcia</p>
      </div>
    </footer>
  );
}
