"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Вы пишете",
    desc: "Расскажите о вашей идее в форме или WhatsApp",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="7" width="24" height="18" />
        <path d="M4 7l12 10L28 7" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Мы встречаемся",
    desc: "Выбираем место, стиль и время съёмки вместе",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="5" y="9" width="22" height="16" rx="1" />
        <path d="M10 9V5h12v4" />
        <circle cx="16" cy="17" r="4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Получаете фото",
    desc: "Готовые снимки в высоком качестве за 5–7 дней",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="4" y="6" width="24" height="20" />
        <path d="M4 22l8-8 6 6 4-4 6 6" />
        <circle cx="22" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="process" id="process" ref={ref}>
      <div className="process-head">
        <span className="sec-label">Как это работает</span>
        <h2>
          Три шага <em>к вашим фото</em>
        </h2>
      </div>

      <div className="process-grid">
        <motion.div
          className="process-line"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.num}
            className="process-step"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.2 + i * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="process-icon">{s.icon}</div>
            <div className="process-num">{s.num}</div>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
