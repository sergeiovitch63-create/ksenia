"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function FamilySeancePage() {
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
          <span className={`${styles.heroNum} ${styles.anim}`}>02 — Ксения Кошка</span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Семейная фотосессия
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}>
            Моменты, которые объединяют
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
              <radialGradient id="hero-bg-family" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-family" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-family)" />
            <rect width="400" height="400" fill="url(#hero-light-family)" />

            <ellipse cx="110" cy="130" rx="48" ry="56" fill="#b8b0a8" />
            <path d="M62 115 Q65 78 110 72 Q155 78 158 115" fill="#111" />
            <path d="M40 400 Q38 290 110 265 Q182 290 180 400Z" fill="#1a1816" />
            <ellipse cx="290" cy="125" rx="44" ry="52" fill="#c0b8b0" />
            <path d="M246 110 Q249 76 290 70 Q331 76 334 110" fill="#0e0e0e" />
            <path d="M220 400 Q218 295 290 270 Q362 295 360 400Z" fill="#1a1816" />
            <ellipse cx="200" cy="230" rx="34" ry="38" fill="#c8c0b8" />
            <path d="M166 218 Q168 196 200 192 Q232 196 234 218" fill="#111" />
            <path d="M165 400 Q163 320 200 305 Q237 320 235 400Z" fill="#141210" />
            <path
              d="M180 262 Q190 248 200 252"
              stroke="#b0a8a0"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M220 262 Q210 248 200 252"
              stroke="#b0a8a0"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="100" cy="127" rx="8" ry="6" fill="#2c2825" />
            <ellipse cx="100" cy="127" rx="3" ry="3" fill="#060606" />
            <ellipse cx="120" cy="127" rx="8" ry="6" fill="#2c2825" />
            <ellipse cx="120" cy="127" rx="3" ry="3" fill="#060606" />
            <path
              d="M97 142 Q110 149 123 142"
              stroke="#7a6860"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="280" cy="122" rx="8" ry="6" fill="#2c2825" />
            <ellipse cx="280" cy="122" rx="3" ry="3" fill="#060606" />
            <ellipse cx="300" cy="122" rx="8" ry="6" fill="#2c2825" />
            <ellipse cx="300" cy="122" rx="3" ry="3" fill="#060606" />
            <path
              d="M276 137 Q290 145 304 137"
              stroke="#7a6860"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="192" cy="227" rx="7" ry="5.5" fill="#2c2825" />
            <ellipse cx="192" cy="227" rx="2.5" ry="2.5" fill="#060606" />
            <ellipse cx="208" cy="227" rx="7" ry="5.5" fill="#2c2825" />
            <ellipse cx="208" cy="227" rx="2.5" ry="2.5" fill="#060606" />
            <path
              d="M189 240 Q200 248 211 240"
              stroke="#7a6860"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
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
          Семья — это ваша история. Живая, тёплая, настоящая. Я снимаю не
          постановочные кадры, а настоящие эмоции: смех, объятия, взгляды.
          Именно такие фото хочется вешать на стену.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>15 обработанных фото</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>Выезд на локацию</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>Все возрасты и составы семьи</span>
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
          Приходите всей семьёй — с детьми, питомцами, бабушками. Чем естественнее
          — тем лучше. Я создам атмосферу игры, где все расслабятся.
        </p>
        <div className={styles.detailsRow}>
          <div className={styles.detailCell}>
            <span className={styles.detailLabel}>Продолжительность</span>
            <p className={styles.detailValue}>1.5–2 часа</p>
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
              <p>Семейная фотосессия</p>
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
