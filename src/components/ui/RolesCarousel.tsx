"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

/** Altura de cada renglón en px (debe coincidir con la clase h-11 = 44px). */
const ITEM_H = 44;
/** Renglones visibles (impar para que el activo quede centrado). */
const VISIBLE = 5;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Se suscribe al media query (sin setState dentro de un efecto). */
function subscribeToReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Lee `prefers-reduced-motion` con useSyncExternalStore:
 * - No usa setState en un efecto (evita el error de renders en cascada).
 * - En el servidor devuelve `false`, así no hay desajuste de hidratación.
 */
function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

interface RolesCarouselProps {
  roles: string[];
  /** Tiempo que cada rol permanece en el centro (ms). */
  interval?: number;
  /** Duración del desplazamiento (ms). */
  duration?: number;
  className?: string;
}

/**
 * Carrusel vertical de roles (tipo "slot machine"):
 * los roles suben en bucle, el del centro se resalta en acento y los de
 * arriba/abajo se van apagando con un degradado. No se lee como una lista.
 *
 * - Bucle infinito sin salto: la lista se duplica y, al llegar al clon,
 *   se reinicia sin animación.
 * - Se pausa al pasar el ratón por encima.
 * - Respeta `prefers-reduced-motion`: muestra los roles quietos.
 */
export function RolesCarousel({
  roles,
  interval = 1800,
  duration = 500,
  className,
}: RolesCarouselProps) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  // Lista duplicada: permite el bucle infinito sin huecos.
  const loop = [...roles, ...roles];

  // Avanza un renglón cada `interval` ms.
  useEffect(() => {
    if (reduced || paused || roles.length <= 1) return;

    const timeout = setTimeout(() => setIndex((i) => i + 1), interval);
    return () => clearTimeout(timeout);
  }, [index, reduced, paused, interval, roles.length]);

  // Al llegar al primer clon, vuelve al inicio SIN animación (bucle invisible).
  useEffect(() => {
    if (index < roles.length) return;

    const timeout = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, duration + 40);
    return () => clearTimeout(timeout);
  }, [index, roles.length, duration]);

  // Reactiva la animación en el siguiente frame tras el reinicio.
  useEffect(() => {
    if (animate) return;

    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [animate]);

  // Con movimiento reducido: los roles quietos, sin carrusel.
  if (reduced) {
    return (
      <p className={cn("text-sm text-muted", className)}>
        {roles.join(" · ")}
      </p>
    );
  }

  const offset = ITEM_H * Math.floor(VISIBLE / 2) - index * ITEM_H;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Guía vertical + marcador de acento a la altura del rol activo */}
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-px bg-line-strong"
      />
      <div
        aria-hidden
        className="absolute -left-px top-1/2 h-9 w-[3px] -translate-y-1/2 bg-accent shadow-[0_0_10px_var(--hud-glow)]"
      />

      {/* Ventana con degradado arriba/abajo */}
      <div
        aria-hidden
        className="ml-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]"
        style={{ height: ITEM_H * VISIBLE }}
      >
        <div
          className="ease-out"
          style={{
            transform: `translateY(${offset}px)`,
            transition: animate
              ? `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
        >
          {loop.map((role, i) => {
            const distance = Math.abs(i - index);
            const isActive = distance === 0;

            return (
              <div
                key={`${role}-${i}`}
                className="flex h-11 items-center whitespace-nowrap"
                style={{
                  opacity: isActive ? 1 : distance === 1 ? 0.5 : 0.22,
                  transition: `opacity ${duration}ms ease-out`,
                }}
              >
                <span
                  className={cn(
                    "text-base transition-colors sm:text-lg",
                    isActive
                      ? "font-medium text-accent"
                      : "text-muted"
                  )}
                >
                  {role}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Para lectores de pantalla: los roles, sin animación */}
      <span className="sr-only">{roles.join(", ")}</span>
    </div>
  );
}
