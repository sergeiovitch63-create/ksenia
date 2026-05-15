"use client";

type Props = {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  variant?: "default" | "muted";
};

export default function Marquee({
  items,
  direction = "left",
  speed = 40,
  variant = "default",
}: Props) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee marquee--${variant}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {loop.map((it, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-text">{it}</span>
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
