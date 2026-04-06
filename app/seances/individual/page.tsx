"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function IndividualSeancePage() {
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
          <span className={`${styles.heroNum} ${styles.anim}`}>07 — Ксения Кошка</span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Индивидуальная фотосессия
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}>
            Только вы и объектив
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
              <radialGradient id="hero-bg-individual" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-individual" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-individual)" />
            <rect width="400" height="400" fill="url(#hero-light-individual)" />

            <path
              d="M70 0 L400 0 L400 400 L330 400 Q385 200 70 0Z"
              fill="rgba(255,255,255,0.06)"
            />
            <path
              d="M80 400 Q78 285 108 248 Q135 218 200 215 Q265 218 292 248 Q322 285 320 400Z"
              fill="#1a1816"
            />
            <path
              d="M82 290 Q98 278 120 284"
              stroke="#b8b0a8"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="188" y="198" width="24" height="24" rx="6" fill="#b0a8a0" />
            <ellipse cx="205" cy="172" rx="62" ry="70" fill="#c8c0b8" />
            <path d="M143 156 Q146 120 205 112 Q264 120 267 156" fill="#0d0d0d" />
            <path d="M143 156 Q136 180 138 228 Q144 206 148 178Z" fill="#0d0d0d" />
            <path d="M267 156 Q274 180 272 228 Q266 206 262 178Z" fill="#0d0d0d" />
            <path
              d="M143 156 Q130 188 134 240"
              stroke="#0c0c0c"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="188" cy="168" rx="14" ry="11" fill="#2c2825" />
            <ellipse cx="188" cy="168" rx="6" ry="6" fill="#060606" />
            <ellipse cx="220" cy="166" rx="14" ry="11" fill="#2c2825" />
            <ellipse cx="220" cy="166" rx="6" ry="6" fill="#060606" />
            <ellipse cx="190" cy="163" rx="3" ry="2.5" fill="white" opacity="0.8" />
            <ellipse cx="222" cy="161" rx="3" ry="2.5" fill="white" opacity="0.8" />
            <path
              d="M174 156 Q190 148 205 151"
              stroke="#181614"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M205 150 Q220 147 234 155"
              stroke="#181614"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M186 192 Q200 200 218 192 Q210 204 200 206 Q190 204 186 192Z"
              fill="#7a6860"
            />
            <path
              d="M138 182 Q160 170 188 172"
              stroke="rgba(192,184,176,0.35)"
              strokeWidth="2"
              fill="none"
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

      <section className={`${styles.section} ${styles.reveal}`} data-reveal>
        <span className={styles.secLabel}>О съёмке</span>
        <h2 className={styles.secTitle}>
          Что вас <em>ждёт</em>
        </h2>
        <p className={styles.descText}>
          Индивидуальная съёмка — пространство только для вас. Без чужих взглядов,
          без лишнего. Здесь вы раскрываетесь полностью: характер, стиль, эмоции.
          Каждый кадр — манифест вашей личности.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>12 обработанных фото</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>Студия или локация</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>Помощь с образами и позами</span>
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
          Приходите с несколькими образами. Это ваше время — мы делаем именно те
          фото, которые хотите вы, отражающие вашу личность.
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
              <p>Индивидуальная фотосессия</p>
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
