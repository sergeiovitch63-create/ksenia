"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import Lightbox, { type LightboxItem } from "@/components/Lightbox";

type Cat =
  | "all"
  | "portret"
  | "semya"
  | "lav-stori"
  | "ulitsa"
  | "deti"
  | "beremennost";

type GalleryItem = LightboxItem & {
  category: Exclude<Cat, "all">;
  span?: boolean;
};

const ITEMS: GalleryItem[] = [
  {
    src: "/images/photo-exterieur.JPG",
    alt: "Уличная съёмка",
    tag: "Уличная съёмка",
    category: "ulitsa",
    slug: "ulitsa",
    span: true,
  },
  {
    src: "/images/portait.PNG",
    alt: "Портрет",
    tag: "Портрет",
    category: "portret",
    slug: "portret",
  },
  {
    src: "/images/portait-1.JPG",
    alt: "Портрет",
    tag: "Портрет",
    category: "portret",
    slug: "portret",
  },
  {
    src: "/images/love-story.JPEG",
    alt: "Лав-стори",
    tag: "Лав-стори",
    category: "lav-stori",
    slug: "lav-stori",
  },
  {
    src: "/images/enfant.PNG",
    alt: "Дети",
    tag: "Дети",
    category: "deti",
    slug: "deti",
  },
  {
    src: "/images/portrait-2.JPG",
    alt: "Индивидуальная",
    tag: "Индивидуальная",
    category: "portret",
    slug: "individualnaya",
  },
  {
    src: "/images/enfant-1.PNG",
    alt: "Дети",
    tag: "Дети",
    category: "deti",
    slug: "deti",
  },
  {
    src: "/images/portrait-3.JPEG",
    alt: "Портрет",
    tag: "Портрет",
    category: "portret",
    slug: "portret",
  },
];

const FILTERS: { id: Cat; label: string }[] = [
  { id: "all", label: "Всё" },
  { id: "portret", label: "Портрет" },
  { id: "semya", label: "Семья" },
  { id: "lav-stori", label: "Лав-стори" },
  { id: "ulitsa", label: "Улица" },
  { id: "deti", label: "Дети" },
  { id: "beremennost", label: "Беременность" },
];

export function GallerySection() {
  const [cat, setCat] = useState<Cat>("all");
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const visible =
    cat === "all" ? ITEMS : ITEMS.filter((i) => i.category === cat);

  return (
    <section className="sec gallery-sec" id="galerie">
      <Reveal className="reveal">
        <span className="sec-label">Портфолио</span>
        <h2>
          Моменты <em>в кадре</em>
        </h2>
      </Reveal>

      <Reveal className="reveal">
        <div className="gallery-filters" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`gf-btn ${cat === f.id ? "gf-btn--active" : ""}`}
              onClick={() => setCat(f.id)}
              role="tab"
              aria-selected={cat === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div className="gallery-grid-v2" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.button
              key={item.src}
              className={`g-item-v2 cursor-expand ${
                item.span ? "g-item-v2--span" : ""
              }`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLbIdx(i)}
              aria-label={`Открыть ${item.tag}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="g-overlay-v2">
                <span className="g-tag-v2">{item.tag}</span>
                <span className="g-zoom">+</span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="gallery-empty">Скоро здесь появятся фотографии этой категории.</p>
      )}

      <Lightbox
        items={visible}
        index={lbIdx}
        onClose={() => setLbIdx(null)}
        onIndexChange={setLbIdx}
      />
    </section>
  );
}
