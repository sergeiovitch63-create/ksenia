"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function PortraitSeancePage() {
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
          <span className={`${styles.heroNum} ${styles.anim}`}>
            01 — Ксения Кошка
          </span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Портретная фотосессия
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p
            className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}
          >
            Когда один взгляд говорит больше тысячи слов
          </p>
          <div
            className={`${styles.heroPriceWrap} ${styles.anim} ${styles.anim3}`}
          >
            <span className={styles.heroPrice}>1 500 ₽</span>
            <span className={styles.heroPriceSub}>
              за полную
              <br />
              сессию
            </span>
          </div>
          <Link
            href="#book"
            className={`${styles.btnBook} ${styles.anim} ${styles.anim4}`}
          >
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
              <radialGradient id="hero-bg-portrait" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-portrait" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-portrait)" />
            <rect width="400" height="400" fill="url(#hero-light-portrait)" />
            <ellipse cx="200" cy="155" rx="72" ry="82" fill="#c8c0b8" />
            <path
              d="M128 140 Q132 96 200 88 Q268 96 272 140"
              fill="#111010"
            />
            <path
              d="M128 140 Q118 168 122 230 Q130 198 136 165Z"
              fill="#111010"
            />
            <path
              d="M272 140 Q282 168 278 230 Q270 198 264 165Z"
              fill="#111010"
            />
            <path
              d="M60 400 Q58 290 200 258 Q342 290 340 400Z"
              fill="#1a1816"
            />
            <rect x="186" y="232" width="28" height="38" rx="7" fill="#b8b0a8" />
            <ellipse cx="175" cy="148" rx="16" ry="12" fill="#2c2825" opacity="0.4" />
            <ellipse cx="225" cy="148" rx="16" ry="12" fill="#2c2825" opacity="0.4" />
            <ellipse cx="175" cy="147" rx="12" ry="9" fill="#e8e4e0" />
            <ellipse cx="225" cy="147" rx="12" ry="9" fill="#e8e4e0" />
            <ellipse cx="175" cy="148" rx="8" ry="8" fill="#3a3530" />
            <ellipse cx="225" cy="148" rx="8" ry="8" fill="#3a3530" />
            <ellipse cx="175" cy="148" rx="4" ry="4" fill="#080808" />
            <ellipse cx="225" cy="148" rx="4" ry="4" fill="#080808" />
            <ellipse cx="178" cy="144" rx="2.5" ry="2" fill="white" opacity="0.85" />
            <ellipse cx="228" cy="144" rx="2.5" ry="2" fill="white" opacity="0.85" />
            <path
              d="M148 135 Q175 126 198 130"
              stroke="#1a1816"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M202 130 Q225 126 252 135"
              stroke="#1a1816"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M194 158 Q189 172 182 178 Q194 183 200 182 Q206 183 218 178 Q211 172 206 158Z"
              fill="rgba(0,0,0,0.1)"
            />
            <path
              d="M180 195 Q200 204 220 195 Q208 208 200 210 Q192 208 180 195Z"
              fill="#8a7870"
            />
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

      <section
        className={`${styles.section} ${styles.reveal}`}
        data-reveal
      >
        <span className={styles.secLabel}>О съёмке</span>
        <h2 className={styles.secTitle}>
          Что вас <em>ждёт</em>
        </h2>
        <p className={styles.descText}>
          Портретная съёмка — это искусство поймать вашу суть. Студийный свет,
          драматические тени, живой взгляд. Каждый кадр — маленький шедевр,
          который останется с вами навсегда.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>
              Профессиональная обработка 10 фото
            </span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>
              Студия или локация на выбор
            </span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>Несколько образов</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◎ Включено</span>
            <span className={styles.includeText}>Онлайн-галерея</span>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt} ${styles.reveal}`}
        data-reveal
      >
        <span className={styles.secLabel}>Детали</span>
        <h2 className={styles.secTitle}>
          Как это <em>происходит</em>
        </h2>
        <p className={styles.descText}>
          Приходите такими, какие вы есть. Никакого специального опыта не нужно
          — я создам атмосферу, в которой вы раскроетесь естественно.
        </p>
        <div className={styles.detailsRow}>
          <div className={styles.detailCell}>
            <span className={styles.detailLabel}>Продолжительность</span>
            <p className={styles.detailValue}>1–2 часа</p>
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
              <input
                type="text"
                placeholder="Например: конец мая, любые выходные"
              />
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
              <p>Портретная фотосессия</p>
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
                <br />
                в честь дня рождения
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
