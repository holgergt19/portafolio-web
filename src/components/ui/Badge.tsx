import { cn } from "@/lib/utils";

/** Etiqueta de tecnología estilo HUD: angular, mono, borde fino. */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] border border-line bg-panel-2 px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg",
        className
      )}
    >
      {children}
    </span>
  );
}
