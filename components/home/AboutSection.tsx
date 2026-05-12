"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const LINES = [
  "Меня зовут Ксения.",
  "Я снимаю то, что слова не могут выразить.",
];

const PARAGRAPH =
  "Каждая съёмка — это разговор без слов. Я ищу свет, эмоцию и тот единственный момент, который рассказывает вашу историю. Работаю с портретами, семьями, парами и беременными — везде, где есть искренность.";

const FACTS = [
  "Базируюсь в Калининграде",
  "Работаю 7 дней в неделю",
  "Снимаю несколько лет",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-photo">
          <div className="about-photo-wrap">
            <Image
              src="/images/HOME-CREATOR.jpg"
              alt="Ксения, фотограф"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="about-img"
              priority
            />
            <div className="about-photo-grain" />
          </div>
          <span className="about-photo-tag">— Калининград —</span>
        </div>

        <div className="about-text">
          <p className="about-eyebrow">О фотографе</p>
          <h2 className="about-title">
            {LINES.map((line, li) => (
              <motion.span
                key={li}
                className="about-line"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + li * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.p
            className="about-paragraph"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {PARAGRAPH}
          </motion.p>

          <motion.div
            className="about-facts"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {FACTS.map((f, i) => (
              <div key={i} className="about-fact">
                <span className="about-fact-line" />
                <span>{f}</span>
                <span className="about-fact-line" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
