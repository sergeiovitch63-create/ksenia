"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useCallback } from "react";

export type LightboxItem = {
  src: string;
  alt: string;
  tag: string;
  slug?: string;
};

type Props = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: Props) {
  const open = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  const current = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lb-close"
            onClick={onClose}
            aria-label="Закрыть"
          >
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path
                d="M3 3l16 16M19 3L3 19"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>

          <button
            className="lb-nav lb-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущее"
          >
            ←
          </button>
          <button
            className="lb-nav lb-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Следующее"
          >
            →
          </button>

          <motion.div
            className="lb-content"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            key={index}
          >
            <img src={current.src} alt={current.alt} className="lb-img" />
            <div className="lb-meta">
              <span className="lb-tag">{current.tag}</span>
              <span className="lb-counter">
                {(index ?? 0) + 1} / {items.length}
              </span>
              {current.slug && (
                <a href={`/semki/${current.slug}`} className="lb-cta">
                  Записаться на этот тип →
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
