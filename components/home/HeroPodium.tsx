"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { CarouselCards } from "./CarouselCards";

const LABELS = ["Портрет", "Семья", "Лав-стори", "Беременность", "Дети"];
const N = 5;

export function HeroPodium() {
  const cfElRef = useRef<HTMLDivElement>(null);
  const dotsElRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const autoTRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tx0Ref = useRef(0);

  const layout = useCallback(() => {
    const cfEl = cfElRef.current;
    const dotsEl = dotsElRef.current;
    if (!cfEl || !dotsEl) return;

    const W = cfEl.parentElement?.offsetWidth ?? 0;
    const mobile = W <= 768;

    const CW = mobile ? 200 : 220;
    const GAP = mobile ? W * 0.42 : 250;
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

    /* Cartes déjà centrées en CSS (left:50% + margin négatif). Seul l’écart latéral compte. */
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
    resetAuto();
    return () => {
      if (autoTRef.current) clearInterval(autoTRef.current);
    };
  }, [resetAuto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCur((c) => (c - 1 + N) % N);
        resetAuto();
      }
      if (e.key === "ArrowRight") {
        setCur((c) => (c + 1) % N);
        resetAuto();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resetAuto]);

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

  const onCardClick = (i: number) => {
    if (i !== cur) {
      goTo(i);
      resetAuto();
    }
  };

  const onDotClick = (i: number) => {
    goTo(i);
    resetAuto();
  };

  return (
    <section className="hero">
      <p className="hero-eyebrow">Фотограф · Калининград</p>
      <h1 className="hero-title">
        Ксения <em>Кошка</em>
      </h1>
      <p className="hero-sub">Ловлю момент. Создаю образ.</p>

      <div
        className="stage-wrap"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="coverflow" id="cf" ref={cfElRef}>
          <CarouselCards onCardClick={onCardClick} />
        </div>

        <div className="stage-floor" />

        <div className="cf-active-label" id="cfActiveLabel">
          {LABELS[cur]}
          <span>Нажмите на карточку</span>
        </div>

        <div className="cf-dots" id="cfDots" ref={dotsElRef}>
          {Array.from({ length: N }, (_, i) => (
            <div
              key={i}
              className={`cf-dot${i === cur ? " active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => onDotClick(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onDotClick(i);
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="scroll-hint">
        <span>Листайте вниз</span>
        <div className="scroll-line" />
      </div>
      <div className="mobile-label" id="mobileLabel">
        {LABELS[cur]}
      </div>
    </section>
  );
}
