import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile, typedRoles } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Typewriter } from "@/components/ui/Typewriter";
import { LottiePlayer } from "@/components/ui/LottiePlayer";
import { HudReticle } from "@/components/ui/HudReticle";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-20 overflow-hidden px-6 pb-20 pt-32 sm:pt-40"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2">
        {/* Texto */}
        <Reveal>
          {profile.available && (
            <span className="hud-cut-sm inline-flex items-center gap-2 border border-line bg-panel px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {profile.availableText}
            </span>
          )}

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide sm:text-6xl">
            Hola, soy
            <br />
            <span className="text-accent hud-glow-text">{profile.name}</span>
          </h1>

          {/* Especialidad con efecto typing */}
          <p className="mt-4 font-mono text-lg text-muted">
            <span className="text-faint">&lt;</span>
            <Typewriter words={typedRoles} className="text-accent" />
            <span className="text-faint"> /&gt;</span>
          </p>

          <p className="mt-5 max-w-md text-lg text-muted">
            <span className="font-medium text-fg">{profile.role}.</span>{" "}
            {profile.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="hud-cut group inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              Ver proyectos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border border-line-strong bg-panel px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} /> Contactar
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-sm text-muted">
            <MapPin size={15} className="text-accent" /> {profile.location}
          </p>
        </Reveal>

        {/* Animación Lottie con retícula HUD detrás */}
        <Reveal delay={150} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Retícula (anillos giratorios) */}
            <HudReticle className="absolute inset-0 h-full w-full" />

            {/* Marcas de encuadre en las esquinas */}
            <div aria-hidden className="absolute inset-4 text-accent/70">
              <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-current" />
              <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-current" />
              <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-current" />
              <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-current" />
            </div>

            {/* Animación (misma proporción que antes, centrada) */}
            <div className="absolute inset-[11%] flex items-center justify-center">
              <div className="aspect-[3/2] w-full">
                <LottiePlayer
                  src="/lottie/hero.json"
                  loop
                  autoplay
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
