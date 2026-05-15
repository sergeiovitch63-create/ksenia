"use client";

import { useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt?: string;
};

export default function BeforeAfter({ before, after, alt = "" }: Props) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="ba"
      onMouseDown={(e) => {
        dragging.current = true;
        onMove(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && onMove(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        onMove(e.touches[0].clientX);
      }}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={after} alt={alt} className="ba-img ba-img--after" />
      <div className="ba-clip" style={{ width: `${pct}%` }}>
        <img src={before} alt={alt} className="ba-img" />
      </div>
      <div className="ba-handle" style={{ left: `${pct}%` }}>
        <span className="ba-handle-line" />
        <span className="ba-handle-dot">⇆</span>
      </div>
      <span className="ba-label ba-label--left">До</span>
      <span className="ba-label ba-label--right">После</span>
    </div>
  );
}
