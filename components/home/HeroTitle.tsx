"use client";

import { motion } from "framer-motion";

const WORD = "Ксения";
const WORD_GOLD = "Кошка";

export default function HeroTitle() {
  return (
    <motion.h1
      className="hero-title hero-title--reveal"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
      }}
    >
      <span className="hero-word">
        {WORD.split("").map((c, i) => (
          <motion.span
            key={i}
            className="hero-letter"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {c}
          </motion.span>
        ))}
      </span>
      <span className="hero-word hero-word--gold">
        {WORD_GOLD.split("").map((c, i) => (
          <motion.span
            key={i}
            className="hero-letter"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                },
              },
            }}
          >
            {c}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}
