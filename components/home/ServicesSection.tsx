import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  return (
    <section className="sec" id="services">
      <Reveal className="reveal">
        <span className="sec-label">Прайс-лист</span>
        <h2>
          Все виды съёмок —
          <br />
          <em>одна цена</em>
        </h2>
      </Reveal>
      <Reveal className="services-list reveal">
        <Link href="/seances/portrait" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">01</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#1a1816" />
                <ellipse cx="26" cy="18" rx="11" ry="13" fill="#b8b0a8" />
                <path d="M15 16 Q16 8 26 6 Q36 8 37 16" fill="#111" />
                <path d="M5 52 Q6 36 26 32 Q46 36 47 52Z" fill="#141210" />
                <ellipse cx="21" cy="16" rx="3" ry="2.5" fill="#222" />
                <ellipse cx="21" cy="16" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="31" cy="16" rx="3" ry="2.5" fill="#222" />
                <ellipse cx="31" cy="16" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="22" cy="14.5" rx="0.8" ry="0.6" fill="white" opacity="0.8" />
                <ellipse cx="32" cy="14.5" rx="0.8" ry="0.6" fill="white" opacity="0.8" />
                <path
                  d="M22 23 Q26 26 30 23"
                  stroke="#7a6860"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.5" />
              </svg>
            </div>
            <span className="svc-name">Портретная фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/family" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">02</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#181614" />
                <ellipse cx="13" cy="14" rx="7" ry="8" fill="#b0a8a0" />
                <path d="M6 12 Q7 6 13 5 Q19 6 20 12" fill="#111" />
                <path d="M4 52 Q5 36 13 33 Q21 36 22 52Z" fill="#141210" />
                <ellipse cx="39" cy="13" rx="7" ry="8" fill="#b8b0a8" />
                <path d="M32 11 Q33 5 39 4 Q45 5 46 11" fill="#0e0e0e" />
                <path d="M30 52 Q31 36 39 33 Q47 36 48 52Z" fill="#141210" />
                <ellipse cx="26" cy="26" rx="5.5" ry="6" fill="#c0b8b0" />
                <path d="M20.5 24 Q21 19 26 18 Q31 19 31.5 24" fill="#111" />
                <path d="M19 52 Q20 40 26 38 Q32 40 33 52Z" fill="#141210" />
                <path
                  d="M21 34 Q23 30 26 31"
                  stroke="#b0a8a0"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M31 34 Q29 30 26 31"
                  stroke="#b0a8a0"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.55" />
              </svg>
            </div>
            <span className="svc-name">Семейная фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/lovestory" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">03</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#141210" />
                <circle cx="8" cy="10" r="6" fill="rgba(255,255,255,0.03)" />
                <circle cx="44" cy="8" r="8" fill="rgba(255,255,255,0.025)" />
                <ellipse cx="16" cy="17" rx="8" ry="9" fill="#a8a09a" />
                <path d="M8 15 Q9 8 16 7 Q23 8 24 15" fill="#111" />
                <path d="M6 52 Q7 37 16 34 Q25 37 26 52Z" fill="#141210" />
                <ellipse cx="36" cy="16" rx="8" ry="9" fill="#b8b0a8" />
                <path d="M28 14 Q29 7 36 6 Q43 7 44 14" fill="#0d0d0d" />
                <path d="M27 52 Q28 37 36 34 Q44 37 45 52Z" fill="#141210" />
                <path
                  d="M24 22 Q26 18 28 22"
                  stroke="rgba(200,180,160,0.2)"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.65" />
              </svg>
            </div>
            <span className="svc-name">Съёмка лав-стори</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/pregnancy" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">04</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#1e1c18" />
                <path
                  d="M35 0 L52 0 L52 52 L30 52 Q45 30 35 0Z"
                  fill="rgba(255,255,255,0.05)"
                />
                <path
                  d="M14 52 Q13 38 16 28 Q20 18 26 17 Q32 18 36 28 Q39 40 37 52Z"
                  fill="#b8b0a8"
                />
                <ellipse cx="28" cy="37" rx="10" ry="9" fill="rgba(255,255,255,0.1)" />
                <path
                  d="M16 34 Q19 31 23 33"
                  stroke="#c0b8b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M38 34 Q35 31 31 33"
                  stroke="#c0b8b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect x="23" y="11" width="6" height="8" rx="2" fill="#b8b0a8" />
                <ellipse cx="26" cy="8" rx="8" ry="9" fill="#c0b8b0" />
                <path d="M18 6 Q19 0 26 -1 Q33 0 34 6" fill="#0e0e0e" />
                <ellipse cx="23" cy="7" rx="2.5" ry="2" fill="#222" />
                <ellipse cx="23" cy="7" rx="1" ry="1" fill="#050505" />
                <ellipse cx="23.5" cy="6" rx="0.6" ry="0.5" fill="white" opacity="0.7" />
                <path
                  d="M22 12 Q26 15 30 12"
                  stroke="#7a6860"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.5" />
              </svg>
            </div>
            <span className="svc-name">Фотосессия для беременных</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/children" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">05</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#201e1a" />
                <ellipse cx="40" cy="5" rx="20" ry="16" fill="rgba(255,255,255,0.07)" />
                <path
                  d="M14 52 Q15 36 20 30 Q23 25 26 25 Q29 25 32 30 Q37 36 38 52Z"
                  fill="#181614"
                />
                <path
                  d="M20 33 Q13 30 7 33"
                  stroke="#c0b8b0"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M32 33 Q39 30 45 33"
                  stroke="#c0b8b0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect x="23" y="18" width="6" height="8" rx="2" fill="#c0b8b0" />
                <ellipse cx="26" cy="13" rx="10" ry="11" fill="#c8c0b8" />
                <path d="M16 10 Q17 3 26 2 Q35 3 36 10" fill="#111" />
                <path d="M16 10 Q14 14 15 20 Q17 16 18 12Z" fill="#111" />
                <path d="M36 10 Q38 14 37 20 Q35 16 34 12Z" fill="#111" />
                <ellipse cx="21" cy="12" rx="4" ry="3.5" fill="#e8e4e0" />
                <ellipse cx="31" cy="12" rx="4" ry="3.5" fill="#e8e4e0" />
                <ellipse cx="21" cy="12" rx="2.5" ry="2.5" fill="#2c2825" />
                <ellipse cx="21" cy="12" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="31" cy="12" rx="2.5" ry="2.5" fill="#2c2825" />
                <ellipse cx="31" cy="12" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="22" cy="10.5" rx="0.9" ry="0.7" fill="white" opacity="0.9" />
                <ellipse cx="32" cy="10.5" rx="0.9" ry="0.7" fill="white" opacity="0.9" />
                <path
                  d="M20 19 Q26 24 32 19 Q28 22 26 23 Q24 22 20 19Z"
                  fill="#5a4a42"
                />
                <rect x="22" y="19.5" width="8" height="2.5" rx="0.5" fill="rgba(255,255,255,0.65)" />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.45" />
              </svg>
            </div>
            <span className="svc-name">Детская фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/street" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">06</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#141210" />
                <rect x="0" y="12" width="16" height="40" fill="#0e0c0a" />
                <rect x="36" y="8" width="16" height="44" fill="#0e0c0a" />
                <rect x="3" y="16" width="5" height="6" fill="rgba(255,255,255,0.04)" />
                <rect x="39" y="14" width="5" height="6" fill="rgba(255,255,255,0.04)" />
                <rect x="3" y="28" width="5" height="6" fill="rgba(255,255,255,0.03)" />
                <rect y="44" width="52" height="8" fill="#0c0a08" />
                <path
                  d="M18 52 Q17 36 19 26 Q22 20 26 19 Q30 20 33 26 Q35 36 34 52Z"
                  fill="#1a1816"
                />
                <rect x="23.5" y="12" width="5" height="8" rx="2" fill="#b8b0a8" />
                <ellipse cx="26" cy="9" rx="8" ry="9" fill="#c0b8b0" />
                <path d="M18 7 Q19 1 26 0 Q33 1 34 7" fill="#0e0e0e" />
                <ellipse cx="26" cy="1" rx="6" ry="3.5" fill="#0e0e0e" />
                <ellipse cx="22" cy="8" rx="2.8" ry="2.2" fill="#222" />
                <ellipse cx="22" cy="8" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="30" cy="8" rx="2.8" ry="2.2" fill="#222" />
                <ellipse cx="30" cy="8" rx="1.2" ry="1.2" fill="#050505" />
                <ellipse cx="22.7" cy="6.8" rx="0.9" ry="0.7" fill="white" opacity="0.75" />
                <ellipse cx="30.7" cy="6.8" rx="0.9" ry="0.7" fill="white" opacity="0.75" />
                <path
                  d="M21 15 Q26 18 31 15 Q27 19 26 20 Q25 19 21 15Z"
                  fill="#7a6860"
                />
                <path
                  d="M18 45 Q17 50 19 52 Q26 51 33 52 Q35 50 34 45Z"
                  fill="rgba(26,24,22,0.5)"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.6" />
              </svg>
            </div>
            <span className="svc-name">Уличная фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/individual" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">07</span>
            <div className="svc-thumb">
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <rect width="52" height="52" fill="#181614" />
                <path
                  d="M36 0 L52 0 L52 52 L32 52 Q48 26 36 0Z"
                  fill="rgba(255,255,255,0.07)"
                />
                <path
                  d="M6 52 Q8 40 14 36 Q20 33 26 33 Q32 33 38 36 Q44 40 46 52Z"
                  fill="#1a1816"
                />
                <path
                  d="M8 40 Q14 35 22 36"
                  stroke="#b0a8a0"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect x="23" y="26" width="6" height="9" rx="2" fill="#b8b0a8" />
                <ellipse cx="27" cy="18" rx="11" ry="13" fill="#c8c0b8" />
                <path d="M16 14 Q17 5 27 3 Q37 5 38 14" fill="#0d0d0d" />
                <path d="M16 14 Q12 20 13 35 Q16 26 17 18Z" fill="#0d0d0d" />
                <path d="M38 14 Q42 20 41 35 Q38 26 37 18Z" fill="#0d0d0d" />
                <ellipse cx="22" cy="17" rx="3.2" ry="2.5" fill="#2c2825" />
                <ellipse cx="22" cy="17" rx="1.3" ry="1.3" fill="#050505" />
                <ellipse cx="32" cy="16" rx="3.2" ry="2.5" fill="#2c2825" />
                <ellipse cx="32" cy="16" rx="1.3" ry="1.3" fill="#050505" />
                <ellipse cx="23" cy="15.5" rx="0.9" ry="0.7" fill="white" opacity="0.75" />
                <ellipse cx="33" cy="14.5" rx="0.9" ry="0.7" fill="white" opacity="0.75" />
                <path
                  d="M17 12 Q22 9 27 11"
                  stroke="#181412"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M27 10 Q32 8 37 12"
                  stroke="#181412"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M20 24 Q27 28 34 24 Q29 29 27 30 Q25 29 20 24Z"
                  fill="#7a6860"
                />
                <rect width="52" height="52" fill="url(#vig)" opacity="0.6" />
              </svg>
            </div>
            <span className="svc-name">Индивидуальная фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>
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
