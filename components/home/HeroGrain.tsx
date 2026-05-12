"use client";

import { useEffect, useRef } from "react";

export default function HeroGrain() {
  const ref = useRef<SVGFETurbulenceElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let seed = 0;
    const tick = () => {
      seed = (seed + 1) % 100;
      ref.current?.setAttribute("seed", String(seed));
      raf = requestAnimationFrame(tick);
    };
    let last = 0;
    const throttled = (t: number) => {
      if (t - last > 80) {
        seed = (seed + 1) % 100;
        ref.current?.setAttribute("seed", String(seed));
        last = t;
      }
      raf = requestAnimationFrame(throttled);
    };
    raf = requestAnimationFrame(throttled);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg className="hero-grain" aria-hidden="true">
      <filter id="hero-grain-filter">
        <feTurbulence
          ref={ref}
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-grain-filter)" />
    </svg>
  );
}
