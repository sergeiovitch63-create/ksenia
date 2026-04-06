"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function LoveStorySeancePage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header className={styles.pageHeader}>
        <Link href="/" className={styles.logo}>
          Ксения <span>Кошка</span>
        </Link>
        <Link href="/#services" className={styles.backBtn}>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Все услуги
        </Link>
      </header>

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="g" />
            <feBlend in="SourceGraphic" in2="g" mode="multiply" />
          </filter>
          <radialGradient id="vig" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
          </radialGradient>
        </defs>
      </svg>

      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={`${styles.heroNum} ${styles.anim}`}>03 — Ксения Кошка</span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Съёмка лав-стори
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}>
            Ваша история в кадрах
          </p>
          <div className={`${styles.heroPriceWrap} ${styles.anim} ${styles.anim3}`}>
            <span className={styles.heroPrice}>1 500 ₽</span>
            <span className={styles.heroPriceSub}>
              за полную
              <br />
              сессию
            </span>
          </div>
          <Link href="#book" className={`${styles.btnBook} ${styles.anim} ${styles.anim4}`}>
            Записаться
          </Link>
        </div>
        <div className={styles.heroRight}>
          <svg
            className={styles.heroIllustration}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="hero-bg-lovestory" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-lovestory" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-lovestory)" />
            <rect width="400" height="400" fill="url(#hero-light-lovestory)" />

            <path d="M40 400 Q38 255 110 225 Q182 255 180 400Z" fill="#1a1816" />
            <ellipse cx="118" cy="195" rx="52" ry="58" fill="#b8b0a8" />
            <path d="M66 180 Q69 150 118 144 Q167 150 170 180" fill="#101010" />
            <path d="M66 180 Q59 205 62 248 Q68 228 72 202Z" fill="#101010" />
            <path d="M220 400 Q218 258 290 228 Q362 258 360 400Z" fill="#1c1a18" />
            <ellipse cx="282" cy="196" rx="50" ry="56" fill="#c0b8b0" />
            <path d="M232 180 Q235 150 282 144 Q329 150 332 180" fill="#0e0e0e" />
            <path d="M332 180 Q339 205 336 248 Q330 228 326 202Z" fill="#0e0e0e" />
            <ellipse cx="106" cy="192" rx="10" ry="8" fill="#2c2825" />
            <ellipse cx="106" cy="192" rx="4" ry="4" fill="#060606" />
            <ellipse cx="130" cy="192" rx="10" ry="8" fill="#2c2825" />
            <ellipse cx="130" cy="192" rx="4" ry="4" fill="#060606" />
            <ellipse cx="107" cy="188" rx="2.2" ry="1.8" fill="white" opacity="0.8" />
            <path
              d="M102 208 Q118 217 134 208"
              stroke="#7a6860"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="270" cy="190" rx="10" ry="8" fill="#2c2825" />
            <ellipse cx="270" cy="190" rx="4" ry="4" fill="#060606" />
            <ellipse cx="294" cy="190" rx="10" ry="8" fill="#2c2825" />
            <ellipse cx="294" cy="190" rx="4" ry="4" fill="#060606" />
            <ellipse cx="271" cy="186" rx="2.2" ry="1.8" fill="white" opacity="0.8" />
            <path
              d="M266 207 Q282 216 298 207"
              stroke="#7a6860"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M170 230 Q200 215 220 228"
              stroke="rgba(200,180,160,0.18)"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="200" cy="220" rx="30" ry="22" fill="rgba(255,255,255,0.03)" />
            <circle cx="20" cy="80" r="28" fill="rgba(255,255,255,0.025)" />
            <circle cx="360" cy="60" r="36" fill="rgba(255,255,255,0.02)" />
            <circle cx="30" cy="350" r="22" fill="rgba(255,255,255,0.025)" />

            <rect width="400" height="400" fill="url(#vig)" opacity="0.65" />
            <rect
              width="400"
              height="400"
              fill="rgba(180,170,160,0.035)"
              filter="url(#grain)"
            />
          </svg>
          <div className={styles.heroGlow} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.reveal}`} data-reveal>
        <span className={styles.secLabel}>О съёмке</span>
        <h2 className={styles.secTitle}>
          Что вас <em>ждёт</em>
        </h2>
        <p className={styles.descText}>
          Лав-стори — это не просто фотосессия, это приключение вдвоём. Прогулка
          по любимым местам города, тёплый свет заката, и вы — настоящие. Кадры,
          которые хочется пересматривать снова и снова.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>20 обработанных фото</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>Прогулочный формат по городу</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>
              Золотой час — рекомендуем закат
            </span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◎ Включено</span>
            <span className={styles.includeText}>Онлайн-галерея</span>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.reveal}`} data-reveal>
        <span className={styles.secLabel}>Детали</span>
        <h2 className={styles.secTitle}>
          Как это <em>происходит</em>
        </h2>
        <p className={styles.descText}>
          Не нужно позировать. Просто будьте собой — держитесь за руки, смейтесь,
          шепчитесь. Я буду рядом, но незаметно.
        </p>
        <div className={styles.detailsRow}>
          <div className={styles.detailCell}>
            <span className={styles.detailLabel}>Продолжительность</span>
            <p className={styles.detailValue}>2–3 часа</p>
          </div>
          <div className={styles.detailCell}>
            <span className={styles.detailLabel}>Стоимость</span>
            <p className={styles.detailValue}>1 500 ₽</p>
          </div>
        </div>
      </section>

      <section className={styles.bookSection} id="book">
        <span className={styles.secLabel}>Запись</span>
        <h2 className={`${styles.secTitle} ${styles.reveal}`} data-reveal>
          Забронировать <em>дату</em>
        </h2>
        <div className={`${styles.bookLayout} ${styles.reveal}`} data-reveal>
          <div>
            <div className={styles.formRow}>
              <label>Имя</label>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className={styles.formRow}>
              <label>Телефон / Telegram</label>
              <input type="text" placeholder="+7 ..." />
            </div>
            <div className={styles.formRow}>
              <label>Желаемая дата</label>
              <input type="text" placeholder="Например: конец мая, любые выходные" />
            </div>
            <div className={styles.formRow}>
              <label>Сообщение</label>
              <textarea placeholder="Расскажите о себе, пожеланиях, вопросах..." />
            </div>
            <button type="button" className={styles.btnSubmit}>
              Отправить заявку
            </button>
          </div>
          <div className={styles.bookInfo}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Тип съёмки</span>
              <p>Съёмка лав-стори</p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Instagram</span>
              <p>
                <a href="#">@ksenia.koshka</a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>WhatsApp</span>
              <p>
                <a href="#">Написать сообщение</a>
              </p>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Скидка</span>
              <p>
                −30% на все съёмки
                <br />в честь дня рождения
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Ксения Кошка · Фотограф · Калининград</p>
        <span className={styles.footerMark}>К · К</span>
        <p>Все права защищены</p>
      </footer>
    </>
  );
}
