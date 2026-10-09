"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const [scrolled, setScrolled] = useState(false);

  // Header con fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta en el menú la sección visible (scroll spy)
  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-line bg-bg/75 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      {/* Línea de acento superior tipo barra de estado */}
      <div
        aria-hidden
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-opacity",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 font-semibold">
          <span className="hud-cut-sm flex h-8 w-8 items-center justify-center bg-accent font-display text-sm font-bold text-on-accent">
            {initials}
          </span>
          <span className="font-display text-base tracking-wide">
            {profile.brand}
            <span className="text-accent">{profile.brandAccent}</span>
          </span>
        </a>

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, i) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-3 py-1.5 text-sm transition-colors",
                  isActive ? "text-accent" : "text-muted hover:text-fg"
                )}
              >
                <span className="mr-1.5 font-mono text-[10px] text-faint">
                  {String(i).padStart(2, "0")}
                </span>
                {item.label}
                {/* Subrayado luminoso del activo */}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-all",
                    isActive ? "opacity-100 shadow-[0_0_8px_var(--hud-glow)]" : "opacity-0 group-hover:opacity-40"
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* Acciones derecha */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="hud-cut-sm inline-flex h-9 w-9 items-center justify-center border border-line bg-panel text-muted lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <nav className="border-t border-line bg-bg/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-l-2 border-transparent px-3 py-2 text-muted transition-colors hover:border-accent hover:text-fg"
                >
                  <span className="font-mono text-[10px] text-faint">
                    {String(i).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
