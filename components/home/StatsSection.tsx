"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 200, prefix: "+", label: "съёмок" },
  { value: 4, suffix: "", label: "года опыта" },
  { value: 98, suffix: "%", label: "довольных клиентов" },
  { value: 5, suffix: " дн.", label: "до получения фото" },
];

function StatItem({ stat, inView }: { stat: Stat; inView: boolean }) {
  const v = useCountUp(stat.value, 1600, inView);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {stat.prefix}
        {v}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="stats" ref={ref}>
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <StatItem key={i} stat={s} inView={inView} />
        ))}
      </div>
    </section>
  );
}
