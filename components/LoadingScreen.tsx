"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      setVisible(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setAnimating(true), 50);
    const t2 = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("intro-seen", "1");
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  const letters = "КСЕНИЯ КОШКА".split("");

  return (
    <div className={`loading-screen ${animating ? "loading-screen--out" : ""}`}>
      <svg
        className="loading-shutter"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="shutter-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>
        <g clipPath="url(#shutter-clip)">
          {[0, 60, 120, 180, 240, 300].map((rot, i) => (
            <polygon
              key={i}
              points="50,50 50,0 70,0"
              className="shutter-blade"
              style={{
                transform: `rotate(${rot}deg)`,
                transformOrigin: "50px 50px",
                animationDelay: `${i * 40}ms`,
              }}
            />
          ))}
        </g>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#c8a46a"
          strokeWidth="0.5"
        />
      </svg>
      <div className="loading-name" aria-hidden="true">
        {letters.map((l, i) => (
          <span
            key={i}
            style={{ animationDelay: `${600 + i * 60}ms` }}
            className={l === " " ? "loading-space" : ""}
          >
            {l === " " ? " " : l}
          </span>
        ))}
      </div>
    </div>
  );
}
