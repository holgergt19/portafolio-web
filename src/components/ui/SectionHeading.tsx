interface SectionHeadingProps {
  code: string; // "001", "010"...
  eyebrow: string; // "SOBRE MÍ"
  title: string;
  highlight?: string; // parte del título en acento
  subtitle?: string;
  centered?: boolean;
}

/**
 * Cabecera de sección estilo HUD:
 * línea guía · [ código ] etiqueta · línea guía — y el título en tipografía display.
 */
export function SectionHeading({
  code,
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-muted ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="hud-rule w-10 sm:w-16" />
        <span className="inline-flex items-center gap-2">
          <span className="text-accent">[</span>
          <span className="text-accent">{code}</span>
          <span className="text-accent">]</span>
          <span>{eyebrow}</span>
        </span>
        <span className="hud-rule w-10 sm:w-16" />
      </div>

      <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
        {title}{" "}
        {highlight && <span className="text-accent hud-glow-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className={`mt-3 max-w-2xl text-muted ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}

      {/* Regla con marca central */}
      <div className={`mt-6 flex items-center gap-1 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px w-8 bg-accent/40" />
      </div>
    </div>
  );
}
