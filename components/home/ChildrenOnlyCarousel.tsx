"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { createPortal } from "react-dom";

const ITEMS = [
  { src: "/images/enfant.PNG", label: "Дети" },
  { src: "/images/enfant-1.PNG", label: "Дети" },
  { src: "/images/enfant-2.PNG", label: "Дети" },
];
const N = ITEMS.length;

export function ChildrenOnlyCarousel() {
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

    const W = cfEl.parentElement?.offsetWidth ?? 0;
    const mobile = W <= 768;

    const GAP = mobile ? W * 0.46 : 320;
    const ROT_Y = mobile ? 52 : 48;
    const ROT_X = mobile ? 8 : 6;
    const SC1 = mobile ? 0.65 : 0.72;
    const SC2 = mobile ? 0.45 : 0.52;
    const Z1 = mobile ? -60 : -80;
    const Z2 = mobile ? -160 : -200;
    const OPA1 = mobile ? 0.5 : 0.55;
    const OPA2 = mobile ? 0.22 : 0.25;
    const TY1 = mobile ? 22 : 18;
    const TY2 = mobile ? 44 : 38;

    const cards = Array.from(cfEl.querySelectorAll<HTMLElement>(".cf-card"));
    cards.forEach((card, i) => {
      let off = i - cur;
      if (off > N / 2) off -= N;
      if (off < -N / 2) off += N;
      const abs = Math.abs(off);

      if (abs > 2) {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        return;
      }

      const tx = off * GAP;
      const ry = off === 0 ? 0 : off < 0 ? ROT_Y : -ROT_Y;
      const rx = off === 0 ? 0 : ROT_X;
      const sc = abs === 0 ? 1 : abs === 1 ? SC1 : SC2;
      const tz = abs === 0 ? 0 : abs === 1 ? Z1 : Z2;
      const ty = abs === 0 ? 0 : abs === 1 ? TY1 : TY2;
      const op = abs === 0 ? 1 : abs === 1 ? OPA1 : OPA2;

      card.style.opacity = String(op);
      card.style.zIndex = String(10 - abs);
      card.style.pointerEvents = "auto";
      card.style.transform = `translateX(${tx}px) translateY(${ty}px) rotateY(${ry}deg) rotateX(${rx}deg) scale(${sc}) translateZ(${tz}px)`;
      card.classList.toggle("active", off === 0);
    });

    dotsEl.querySelectorAll(".cf-dot").forEach((d, i) => {
      d.classList.toggle("active", i === cur);
    });
  }, [cur]);

  const goTo = useCallback((idx: number) => {
    setCur(((idx % N) + N) % N);
  }, []);

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
              if (i !== cur) {
                goTo(i);
              }
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
                alt="Детская фотография в zoom"
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
