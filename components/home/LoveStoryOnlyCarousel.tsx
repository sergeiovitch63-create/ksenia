"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { createPortal } from "react-dom";

const ITEMS = [{ src: "/images/love-story.JPEG", label: "Лав-стори" }];
const N = ITEMS.length;

export function LoveStoryOnlyCarousel() {
  const cfElRef = useRef<HTMLDivElement>(null);
  const dotsElRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const [zoomedSrc, setZoomedSrc] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const autoTRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tx0Ref = useRef(0);

  const layout = useCallback(() => {
    const cfEl = cfElRef.current;
    const dotsEl = dotsElRef.current;
    if (!cfEl || !dotsEl) return;

    const cards = Array.from(cfEl.querySelectorAll<HTMLElement>(".cf-card"));
    cards.forEach((card, i) => {
      card.style.opacity = i === cur ? "1" : "0";
      card.style.zIndex = i === cur ? "10" : "0";
      card.style.pointerEvents = i === cur ? "auto" : "none";
      card.style.transform =
        "translateX(0) translateY(0) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)";
      card.classList.toggle("active", i === cur);
    });

    dotsEl.querySelectorAll(".cf-dot").forEach((d, i) => {
      d.classList.toggle("active", i === cur);
    });
  }, [cur]);

  const resetAuto = useCallback(() => {
    if (autoTRef.current) clearInterval(autoTRef.current);
    autoTRef.current = setInterval(() => {
      setCur((c) => (c + 1) % N);
    }, 3800);
  }, []);

  useEffect(() => {
    layout();
  }, [layout]);

  useEffect(() => {
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [layout]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    resetAuto();
    return () => {
      if (autoTRef.current) clearInterval(autoTRef.current);
    };
  }, [resetAuto]);

  useEffect(() => {
    if (!zoomedSrc) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomedSrc]);

  const onTouchStart = (e: TouchEvent) => {
    tx0Ref.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const dx = tx0Ref.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 35) {
      setCur((c) => (c + (dx > 0 ? 1 : -1) + N) % N);
      resetAuto();
    }
  };

  return (
    <div className="stage-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="coverflow" ref={cfElRef}>
        {ITEMS.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="cf-card"
            data-i={i}
            onClick={() => {
              if (autoTRef.current) clearInterval(autoTRef.current);
              setZoomedSrc(item.src);
            }}
          >
            <img className="cf-photo" src={item.src} alt={item.label} />
            <div className="cf-label">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="stage-floor" />
      <div className="cf-active-label">{ITEMS[cur].label}</div>
      <div className="cf-dots" ref={dotsElRef}>
        {Array.from({ length: N }, (_, i) => (
          <div key={i} className={`cf-dot${i === cur ? " active" : ""}`} />
        ))}
      </div>

      {zoomedSrc && isMounted
        ? createPortal(
            <div
              role="button"
              tabIndex={0}
              aria-label="Fermer le zoom"
              onClick={() => setZoomedSrc(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setZoomedSrc(null);
              }}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.9)",
                zIndex: 2147483647,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
                cursor: "zoom-out",
              }}
            >
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setZoomedSrc(null)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "22px",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  fontSize: "28px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <img
                src={zoomedSrc}
                alt="Лав-стори фото в zoom"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: "92vw",
                  maxHeight: "92vh",
                  objectFit: "contain",
                  border: "1px solid rgba(200, 164, 106, 0.45)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
                  cursor: "default",
                }}
              />
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
