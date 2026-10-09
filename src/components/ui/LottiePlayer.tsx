"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import type { CSSProperties } from "react";

/**
 * Reproductor de animaciones Lottie (.json) con motor SVG (vectorial).
 *
 * Usamos el renderer "svg": se ve nítido a cualquier tamaño (no se pixela)
 * y se ajusta al contenedor sin desbordarse. Solo funciona en cliente,
 * por eso "use client" y la carga dentro de useEffect.
 *
 * Uso:
 *   <LottiePlayer src="/lottie/hero.json" />   // archivo en public/lottie/
 */
interface LottiePlayerProps {
  /** Ruta al .json servido desde /public. Ej: "/lottie/hero.json" */
  src: string;
  className?: string;
  style?: CSSProperties;
  /** Reproduce en bucle (por defecto true) */
  loop?: boolean;
  /** Arranca solo al cargar (por defecto true) */
  autoplay?: boolean;
}

export function LottiePlayer({
  src,
  className,
  style,
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop,
      autoplay,
      path: src,
      rendererSettings: {
        // "meet" = la animación cabe entera dentro del contenedor (sin recortes)
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    return () => animation.destroy();
  }, [src, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}
