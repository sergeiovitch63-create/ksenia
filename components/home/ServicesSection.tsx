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
              <img src="/images/portait.PNG" alt="Портретная фотосессия" />
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
              <img src="/images/famille.CR2" alt="Семейная фотосессия" />
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
              <img src="/images/love-story.JPEG" alt="Съёмка лав-стори" />
            </div>
            <span className="svc-name">Съёмка лав-стори</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/children" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">04</span>
            <div className="svc-thumb">
              <img src="/images/enfant.PNG" alt="Детская фотосессия" />
            </div>
            <span className="svc-name">Детская фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/street" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">05</span>
            <div className="svc-thumb">
              <img src="/images/photo-exterieur.JPG" alt="Уличная фотосессия" />
            </div>
            <span className="svc-name">Уличная фотосессия</span>
          </div>
          <span className="svc-price">1 500 ₽</span>
          <span className="svc-arrow">→</span>
        </Link>

        <Link href="/seances/individual" className="service-row" style={{ cursor: "pointer" }}>
          <div className="svc-left">
            <span className="svc-num">06</span>
            <div className="svc-thumb">
              <img src="/images/portait.PNG" alt="Индивидуальная фотосессия" />
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
