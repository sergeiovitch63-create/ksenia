"use client";

import { useEffect, useRef, useState } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    observerRef.current = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observerRef.current.observe(target);
    return () => observerRef.current?.disconnect();
  }, []);

  const show = visible && !nearContact;

  return (
    <a
      ref={ref}
      href="#contact"
      className={`floating-cta ${show ? "floating-cta--show" : ""}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <span>Записаться</span>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path
          d="M2 7h10M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="square"
        />
      </svg>
    </a>
  );
}
