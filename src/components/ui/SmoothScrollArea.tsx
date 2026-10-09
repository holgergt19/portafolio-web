"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SmoothScrollAreaProps {
  children: ReactNode;
  /** Clases del viewport (donde van max-h, overflow-y-auto, padding, etc.) */
  className?: string;
}

/**
 * Área de scroll con "efecto iPhone" en ESCRITORIO (ratón/trackpad):
 *   - inercia: el contenido sigue deslizándose suave al soltar
 *   - rubber-band: rebote elástico al llegar arriba/abajo
 *
 * En móvil/iPhone y con prefers-reduced-motion se aparta y deja el scroll
 * NATIVO, que en esos casos ya tiene ese comportamiento. Sin librerías.
 */
export function SmoothScrollArea({ children, className }: SmoothScrollAreaProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vp = viewport.current;
    const ct = content.current;
    if (!vp || !ct) return;

    // En táctil o con menos movimiento: scroll nativo (no hacemos nada).
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduced || touch) return;

    // Mientras el JS controla el scroll, desactivamos el smooth de CSS
    // para que no se "sumen" dos suavizados.
    vp.style.scrollBehavior = "auto";

    let target = vp.scrollTop; // destino del scroll real
    let current = vp.scrollTop; // posición animada
    let over = 0; // desplazamiento actual del rebote (px)
    let overImpulse = 0; // empuje acumulado al pasarse del borde
    let raf = 0;
    let running = false;

    const maxScroll = () => vp.scrollHeight - vp.clientHeight;

    const loop = () => {
      // 1) inercia: acercarse suave al destino
      current += (target - current) * 0.14;

      // 2) rebote: el empuje decae y el offset lo persigue (muelle)
      overImpulse *= 0.85;
      over += (overImpulse - over) * 0.18;

      vp.scrollTop = current;
      ct.style.transform = over ? `translate3d(0, ${-over}px, 0)` : "";

      const settled =
        Math.abs(target - current) < 0.3 &&
        Math.abs(over) < 0.3 &&
        Math.abs(overImpulse) < 0.3;

      if (settled) {
        current = target;
        vp.scrollTop = current;
        ct.style.transform = "";
        over = 0;
        overImpulse = 0;
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const max = maxScroll();
      target += e.deltaY;

      // Si nos pasamos de un borde, el exceso alimenta el rebote (amortiguado).
      if (target < 0) {
        overImpulse += target * 0.35;
        target = 0;
      } else if (target > max) {
        overImpulse += (target - max) * 0.35;
        target = max;
      }
      // Límite del rebote para que no se despegue demasiado.
      overImpulse = Math.max(-110, Math.min(110, overImpulse));
      start();
    };

    // Si algo más mueve el scroll (teclado, foco, ancla), nos resincronizamos.
    const onScroll = () => {
      if (!running) {
        current = vp.scrollTop;
        target = vp.scrollTop;
      }
    };

    vp.addEventListener("wheel", onWheel, { passive: false });
    vp.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      vp.removeEventListener("wheel", onWheel);
      vp.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      ct.style.transform = "";
    };
  }, []);

  return (
    <div ref={viewport} className={cn("projects-scroll", className)}>
      <div ref={content} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
