"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function ChildrenSeancePage() {
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
          <span className={`${styles.heroNum} ${styles.anim}`}>05 — Ксения Кошка</span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Детская фотосессия
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}>
            Детство — это мгновение
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
              <radialGradient id="hero-bg-children" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-children" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-children)" />
            <rect width="400" height="400" fill="url(#hero-light-children)" />

            <rect y="280" width="400" height="120" fill="#181614" opacity="0.6" />
            <ellipse cx="280" cy="60" rx="90" ry="70" fill="rgba(255,255,255,0.08)" />
            <path
              d="M110 400 Q112 290 136 264 Q158 240 200 238 Q242 240 264 264 Q288 290 290 400Z"
              fill="#1c1a18"
            />
            <path
              d="M80 290 Q105 275 136 282"
              stroke="#c8c0b8"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M320 290 Q295 275 264 282"
              stroke="#c8c0b8"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="187" y="222" width="26" height="22" rx="5" fill="#c8c0b8" />
            <ellipse cx="200" cy="196" rx="60" ry="66" fill="#c8c0b8" />
            <path d="M140 180 Q143 148 200 140 Q257 148 260 180" fill="#111" />
            <path d="M140 180 Q134 198 136 238 Q142 218 146 194Z" fill="#111" />
            <path d="M260 180 Q266 198 264 238 Q258 218 254 194Z" fill="#111" />
            <path d="M196 140 Q200 128 204 140" stroke="#111" strokeWidth="8" fill="none" />
            <ellipse cx="178" cy="194" rx="18" ry="14" fill="#e8e4e0" />
            <ellipse cx="222" cy="194" rx="18" ry="14" fill="#e8e4e0" />
            <ellipse cx="178" cy="195" rx="13" ry="13" fill="#3a3530" />
            <ellipse cx="222" cy="195" rx="13" ry="13" fill="#3a3530" />
            <ellipse cx="178" cy="195" rx="7" ry="7" fill="#080808" />
            <ellipse cx="222" cy="195" rx="7" ry="7" fill="#080808" />
            <ellipse cx="181" cy="190" rx="3.5" ry="3" fill="white" opacity="0.9" />
            <ellipse cx="225" cy="190" rx="3.5" ry="3" fill="white" opacity="0.9" />
            <path
              d="M172 220 Q200 238 228 220 Q216 232 200 234 Q184 232 172 220Z"
              fill="#5a4a42"
            />
            <rect x="185" y="221" width="30" height="8" rx="2" fill="rgba(255,255,255,0.65)" />
            <ellipse cx="160" cy="210" rx="24" ry="14" fill="rgba(255,255,255,0.05)" />
            <ellipse cx="240" cy="210" rx="24" ry="14" fill="rgba(255,255,255,0.05)" />

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
          Дети не умеют притворяться — и в этом их главная суперсила. Искренний
          смех, удивлённые глаза, неудержимое движение. Я снимаю детей в их
          естественной среде, без скучных поз.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>12 обработанных фото</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>Игровой формат без принуждения</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>Дома или на природе</span>
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
          Лучшее время — после сна и кормления. Возьмите любимые игрушки.
          Родители всегда рядом — это помогает малышам расслабиться.
        </p>
        <div className={styles.detailsRow}>
          <div className={styles.detailCell}>
            <span className={styles.detailLabel}>Продолжительность</span>
            <p className={styles.detailValue}>1–1.5 часа</p>
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
              <p>Детская фотосессия</p>
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
