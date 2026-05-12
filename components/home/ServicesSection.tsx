"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Svc = {
  slug: string;
  num: string;
  name: string;
  img: string;
  alt: string;
};

const SERVICES: Svc[] = [
  {
    slug: "portret",
    num: "01",
    name: "Портретная",
    img: "/images/portait.PNG",
    alt: "Портретная фотосессия",
  },
  {
    slug: "semya",
    num: "02",
    name: "Семейная",
    img: "/images/famille.CR2",
    alt: "Семейная фотосессия",
  },
  {
    slug: "lav-stori",
    num: "03",
    name: "Лав-стори",
    img: "/images/love-story.JPEG",
    alt: "Съёмка лав-стори",
  },
  {
    slug: "deti",
    num: "04",
    name: "Детская",
    img: "/images/enfant.PNG",
    alt: "Детская фотосессия",
  },
  {
    slug: "ulitsa",
    num: "05",
    name: "Уличная",
    img: "/images/photo-exterieur.JPG",
    alt: "Уличная фотосессия",
  },
  {
    slug: "individualnaya",
    num: "06",
    name: "Индивидуальная",
    img: "/images/portait.PNG",
    alt: "Индивидуальная фотосессия",
  },
];

export function ServicesSection() {
  return (
    <section className="sec services-sec-v2" id="services">
      <Reveal className="reveal">
        <span className="sec-label">Прайс-лист</span>
        <h2>
          Все виды съёмок —
          <br />
          <em>одна цена</em>
        </h2>
      </Reveal>

      <Reveal className="reveal">
        <div className="services-cards">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/semki/${s.slug}`}
              className="svc-card cursor-expand"
              aria-label={`${s.name} — 1 500 ₽`}
            >
              <div className="svc-card-img-wrap">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="svc-card-img"
                  loading="lazy"
                />
                <div className="svc-card-overlay" />
                <span className="svc-card-num">{s.num}</span>
              </div>
              <div className="svc-card-content">
                <h3 className="svc-card-name">{s.name}</h3>
                <div className="svc-card-meta">
                  <span className="svc-card-price">1 500 ₽</span>
                  <span className="svc-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="promo reveal">
        <div className="promo-text">
          <strong>Скидка ко дню рождения</strong>
          На все виды съёмок — специальное предложение
        </div>
        <div className="promo-num">−30%</div>
      </Reveal>
    </section>
  );
}
