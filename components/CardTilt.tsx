"use client";

import { useEffect } from "react";

/**
 * Ajoute un effet de parallax 3D au survol des cartes carousel inactives.
 * Écoute globalement les événements mouse sur `.cf-card` et expose
 * des variables CSS `--tilt-x` / `--tilt-y` consommées par `.cf-photo`.
 */
export default function CardTilt() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const MAX_TILT = 14;
    const handlers = new WeakMap<HTMLElement, () => void>();

    const attach = (card: HTMLElement) => {
      if (handlers.has(card)) return;

      const onMove = (e: MouseEvent) => {
        if (card.classList.contains("active")) {
          card.style.removeProperty("--tilt-x");
          card.style.removeProperty("--tilt-y");
          card.style.removeProperty("--tilt-z");
          return;
        }
        const r = card.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / r.width;
        const dy = (e.clientY - r.top - r.height / 2) / r.height;
        card.style.setProperty("--tilt-y", `${dx * MAX_TILT}deg`);
        card.style.setProperty("--tilt-x", `${-dy * MAX_TILT}deg`);
        card.style.setProperty("--tilt-z", `12px`);
      };

      const onLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--tilt-z", "0px");
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      const cleanup = () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
      handlers.set(card, cleanup);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".cf-card").forEach(attach);
    };

    scan();

    // Réattacher quand de nouveaux carousels apparaissent (changement de page)
    const obs = new MutationObserver(() => scan());
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return null;
}
