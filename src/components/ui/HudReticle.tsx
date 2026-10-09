import { cn } from "@/lib/utils";

/**
 * Retícula decorativa estilo HUD (anillos, arcos y marcas que giran despacio).
 * SVG puro: sin JS, colores por token (currentColor = acento) y respeta
 * prefers-reduced-motion desde globals.css. Se coloca detrás de la animación
 * del Hero.
 */
export function HudReticle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn("text-accent", className)}
      fill="none"
      stroke="currentColor"
    >
      {/* Anillo exterior con ticks */}
      <g className="hud-spin-slow" opacity="0.35">
        <circle cx="200" cy="200" r="190" strokeWidth="0.75" strokeDasharray="2 6" />
        {Array.from({ length: 36 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="10"
            x2="200"
            y2={i % 6 === 0 ? "26" : "18"}
            strokeWidth={i % 6 === 0 ? 1.5 : 0.75}
            transform={`rotate(${i * 10} 200 200)`}
          />
        ))}
      </g>

      {/* Arcos segmentados (sentido contrario) */}
      <g className="hud-spin-rev" opacity="0.55">
        <circle
          cx="200"
          cy="200"
          r="160"
          strokeWidth="6"
          strokeDasharray="60 40 20 80 100 200"
          strokeLinecap="butt"
        />
        <circle cx="200" cy="200" r="150" strokeWidth="0.75" opacity="0.6" />
      </g>

      {/* Anillo medio con marcas gruesas */}
      <g className="hud-spin" opacity="0.7">
        <circle cx="200" cy="200" r="120" strokeWidth="1" strokeDasharray="3 10" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x="197"
            y="74"
            width="6"
            height="14"
            fill="currentColor"
            stroke="none"
            transform={`rotate(${i * 45} 200 200)`}
          />
        ))}
      </g>

      {/* Anillo interior pulsante */}
      <g className="hud-pulse">
        <circle cx="200" cy="200" r="90" strokeWidth="0.75" />
        <circle cx="200" cy="200" r="86" strokeWidth="2" strokeDasharray="120 400" />
      </g>

      {/* Cruz central */}
      <g opacity="0.5" strokeWidth="0.75">
        <line x1="200" y1="0" x2="200" y2="60" />
        <line x1="200" y1="340" x2="200" y2="400" />
        <line x1="0" y1="200" x2="60" y2="200" />
        <line x1="340" y1="200" x2="400" y2="200" />
      </g>
    </svg>
  );
}
