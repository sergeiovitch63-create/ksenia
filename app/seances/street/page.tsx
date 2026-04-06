"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function StreetSeancePage() {
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
          <span className={`${styles.heroNum} ${styles.anim}`}>06 — Ксения Кошка</span>
          <h1 className={`${styles.heroTitle} ${styles.anim} ${styles.anim1}`}>
            Уличная фотосессия
          </h1>
          <div className={`${styles.divider} ${styles.anim} ${styles.anim2}`} />
          <p className={`${styles.heroTagline} ${styles.anim} ${styles.anim2}`}>
            Город как декорация вашей жизни
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
              <radialGradient id="hero-bg-street" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#2a2824" />
                <stop offset="100%" stopColor="#0c0b0a" />
              </radialGradient>
              <radialGradient id="hero-light-street" cx="60%" cy="20%" r="55%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="url(#hero-bg-street)" />
            <rect width="400" height="400" fill="url(#hero-light-street)" />

            <rect x="0" y="60" width="100" height="340" fill="#0e0c0a" />
            <rect x="300" y="40" width="100" height="360" fill="#0e0c0a" />
            <rect x="8" y="82" width="28" height="36" fill="rgba(255,255,255,0.035)" />
            <rect x="50" y="82" width="28" height="36" fill="rgba(255,255,255,0.025)" />
            <rect x="8" y="140" width="28" height="36" fill="rgba(255,255,255,0.04)" />
            <rect x="50" y="140" width="28" height="36" fill="rgba(255,255,255,0.02)" />
            <rect x="308" y="72" width="28" height="36" fill="rgba(255,255,255,0.035)" />
            <rect x="352" y="72" width="28" height="36" fill="rgba(255,255,255,0.025)" />
            <rect x="308" y="140" width="28" height="36" fill="rgba(255,255,255,0.04)" />
            <rect y="320" width="400" height="80" fill="#0e0c0a" />
            <rect y="336" width="400" height="2" fill="rgba(255,255,255,0.04)" />
            <path
              d="M148 400 Q142 305 146 240 Q156 204 200 198 Q244 204 254 240 Q258 305 252 400Z"
              fill="#161412"
            />
            <path
              d="M148 258 Q162 248 200 245 Q238 248 252 258 L256 400 L144 400Z"
              fill="#121010"
            />
            <path
              d="M162 255 Q178 242 200 244 Q200 262 194 268 Q188 265 162 255Z"
              fill="#1c1a18"
            />
            <path
              d="M238 255 Q222 242 200 244 Q200 262 206 268 Q212 265 238 255Z"
              fill="#1c1a18"
            />
            <path
              d="M148 305 Q128 298 110 306"
              stroke="#c0b8b0"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            <rect x="188" y="182" width="24" height="24" rx="5" fill="#b8b0a8" />
            <ellipse cx="200" cy="160" rx="48" ry="54" fill="#c8c0b8" />
            <path d="M152 147 Q155 116 200 108 Q245 116 248 147" fill="#111010" />
            <path d="M248 147 Q254 165 248 196 Q244 178 240 157Z" fill="#111010" />
            <path d="M152 147 Q146 165 152 196 Q156 178 160 157Z" fill="#111010" />
            <ellipse cx="200" cy="109" rx="28" ry="15" fill="#111010" />
            <ellipse cx="185" cy="157" rx="12" ry="9" fill="#2c2825" />
            <ellipse cx="185" cy="157" rx="5" ry="5" fill="#060606" />
            <ellipse cx="215" cy="157" rx="12" ry="9" fill="#2c2825" />
            <ellipse cx="215" cy="157" rx="5" ry="5" fill="#060606" />
            <ellipse cx="187" cy="153" rx="2.8" ry="2.2" fill="white" opacity="0.8" />
            <ellipse cx="217" cy="153" rx="2.8" ry="2.2" fill="white" opacity="0.8" />
            <path
              d="M178 146 Q192 139 206 142"
              stroke="#181412"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M194 142 Q208 139 222 146"
              stroke="#181412"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M182 178 Q200 186 218 178 Q209 188 200 190 Q191 188 182 178Z"
              fill="#7a6860"
            />
            <path
              d="M148 336 Q144 368 148 400 Q172 394 200 395 Q228 394 252 400 Q256 368 252 336Z"
              fill="rgba(22,20,18,0.45)"
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
          Калининград — красивый город с душой. Старые улочки, янтарный свет,
          архитектура с историей. Уличная съёмка — это движение, жизнь, энергия.
          Никакой студии — только настоящий мир вокруг.
        </p>

        <div className={styles.includesGrid}>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>✦ Включено</span>
            <span className={styles.includeText}>15 обработанных фото</span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◈ Включено</span>
            <span className={styles.includeText}>
              Прогулка по локациям Калининграда
            </span>
          </div>
          <div className={styles.includeItem}>
            <span className={styles.includeIcon}>◉ Включено</span>
            <span className={styles.includeText}>Закатный свет приоритетом</span>
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
          Оденьтесь комфортно и стильно. Хорошая погода не обязательна — пасмурный
          день даёт потрясающий свет. Список локаций обсудим заранее.
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
              <p>Уличная фотосессия</p>
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
