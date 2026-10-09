"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

/**
 * Escribe y borra palabras en bucle. Respeta prefers-reduced-motion:
 * si el usuario lo tiene activo, muestra la primera palabra fija.
 */
export function Typewriter({ words, className }: TypewriterProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const current = words[index % words.length];
    const completed = text === current;
    const emptied = text === "";

    let delay = deleting ? 45 : 90;
    if (!deleting && completed) delay = 1600; // pausa al terminar la palabra
    if (deleting && emptied) delay = 300;

    const timeout = setTimeout(() => {
      if (!deleting && completed) {
        setDeleting(true);
      } else if (deleting && emptied) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, reduced]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink font-normal">|</span>
    </span>
  );
}
