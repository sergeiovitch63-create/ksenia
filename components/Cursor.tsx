"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"default" | "expand" | "link">(
    "default"
  );
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(".cursor-expand")) setVariant("expand");
      else if (
        target.closest("a, button, .cursor-link, [role='button']")
      )
        setVariant("link");
      else setVariant("default");
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot cursor-${variant} ${
          hidden ? "cursor-hidden" : ""
        }`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring cursor-${variant} ${
          hidden ? "cursor-hidden" : ""
        }`}
        aria-hidden="true"
      >
        <span className="cursor-label">VOIR</span>
      </div>
    </>
  );
}
