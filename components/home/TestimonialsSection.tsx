"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { supabase, type Avis } from "@/lib/supabase";

const MONTHS_RU = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function formatSessionDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${MONTHS_RU[d.getMonth()]} ${d.getFullYear()}`;
}

function TYPE_LABEL(slug: string) {
  const map: Record<string, string> = {
    portret: "Портретная съёмка",
    semya: "Семейная съёмка",
    "lav-stori": "Лав-стори",
    deti: "Детская съёмка",
    ulitsa: "Уличная съёмка",
    individualnaya: "Индивидуальная съёмка",
    beremennost: "Съёмка беременности",
  };
  return map[slug] ?? slug;
}

export default function TestimonialsSection() {
  const [avis, setAvis] = useState<Avis[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("avis")
          .select("*")
          .eq("approuve", true)
          .order("date_seance", { ascending: false })
          .limit(20);
        if (cancelled) return;
        if (error) {
          setErr(error.message);
          setAvis([]);
          return;
        }
        setAvis((data ?? []) as Avis[]);
      } catch (e) {
        if (cancelled) return;
        setErr(String(e));
        setAvis([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  if (avis === null) {
    return (
      <section className="testimonials" id="avis">
        <div className="testimonials-head">
          <span className="sec-label">Отзывы</span>
          <h2>
            Что говорят <em>клиенты</em>
          </h2>
        </div>
        <div className="testimonials-empty">Загрузка...</div>
      </section>
    );
  }

  return (
    <section className="testimonials" id="avis">
      <div className="testimonials-head">
        <span className="sec-label">Отзывы</span>
        <h2>
          Что говорят <em>клиенты</em>
        </h2>
      </div>

      {avis.length === 0 ? (
        <div className="testimonials-empty">
          {err ? (
            <p>Скоро здесь появятся отзывы клиентов.</p>
          ) : (
            <p>Будьте первым, кто оставит отзыв о съёмке.</p>
          )}
        </div>
      ) : (
        <div className="testimonials-wrap">
          <button
            className="t-arrow t-arrow--prev"
            onClick={() => scroll(-1)}
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>
          <div className="testimonials-track" ref={trackRef}>
            {avis.map((a, i) => (
              <motion.article
                key={a.id}
                className="t-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                style={{
                  transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
                }}
              >
                <div className="t-stars" aria-label={`${a.note} из 5`}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span
                      key={k}
                      className={k < a.note ? "t-star t-star--on" : "t-star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="t-text">«{a.commentaire}»</p>
                <div className="t-meta">
                  <span className="t-name">— {a.nom}</span>
                  <span className="t-sep">·</span>
                  <span className="t-type">{TYPE_LABEL(a.type_seance)}</span>
                  <span className="t-sep">·</span>
                  <span className="t-date">
                    {formatSessionDate(a.date_seance)}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
          <button
            className="t-arrow t-arrow--next"
            onClick={() => scroll(1)}
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
