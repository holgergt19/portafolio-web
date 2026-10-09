import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Franja alterna: banda ligeramente más densa con líneas guía arriba/abajo */
  muted?: boolean;
}

export function Section({ id, children, className, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 px-6 py-20 sm:py-28",
        muted && "bg-bg-2/60 border-y border-line",
        className
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
