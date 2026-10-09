"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms (solo para bloques individuales, no para stagger) */
  delay?: number;
  /** Si es true, anima sus hijos directos en cascada */
  stagger?: boolean;
}

/**
 * Anima la entrada del contenido cuando aparece en pantalla (una sola vez).
 * Usa IntersectionObserver — sin librerías. Las clases viven en globals.css.
 */
export function Reveal({ children, className, delay = 0, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-revealed={revealed}
      className={cn(stagger ? "stagger" : "reveal", className)}
      style={!stagger && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
