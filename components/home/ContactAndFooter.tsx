import { Reveal } from "@/components/Reveal";
import ContactForm from "./ContactForm";

export function ContactAndFooter() {
  return (
    <>
      <section className="sec contact-sec" id="contact">
        <Reveal className="reveal">
          <span className="sec-label">Запись на съёмку</span>
          <h2>
            Давайте создадим
            <br />
            <em>что-то особенное</em>
          </h2>
          <p className="contact-tagline">
            Отвечу в течение 24 часов · Калининград
          </p>
        </Reveal>
        <Reveal className="contact-grid reveal">
          <ContactForm />
          <div>
            <div className="detail-block">
              <span className="detail-label">Instagram</span>
              <p>
                <a
                  href="https://instagram.com/k0shka_art"
                  target="_blank"
                  rel="noreferrer"
                >
                  @k0shka_art
                </a>
              </p>
            </div>
            <div className="detail-block">
              <span className="detail-label">Телефон</span>
              <p>
                <a href="tel:+79506718074">+7 950 671-80-74</a>
              </p>
            </div>
            <div className="detail-block">
              <span className="detail-label">ВКонтакте</span>
              <p>
                <a href="https://vk.ru/fool_999" target="_blank" rel="noreferrer">
                  vk.ru/fool_999
                </a>
              </p>
            </div>
            <div className="detail-block">
              <span className="detail-label">Акция</span>
              <p>
                −30% на все виды съёмок
                <br />
                в честь дня рождения
              </p>
            </div>
            <div className="detail-block">
              <span className="detail-label">Город</span>
              <p>
                Калининград
                <br />
                Работаю 7 дней в неделю
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer-rich">
        <div className="footer-inner">
          <div className="footer-col">
            <span className="footer-brand">
              Ксения <span>Кошка</span>
            </span>
            <p className="footer-tagline">
              Фотограф · Калининград
              <br />
              Работаю 7 дней в неделю
            </p>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Меню</span>
            <a href="/#services">Услуги</a>
            <a href="/#galerie">Галерея</a>
            <a href="/#avis">Отзывы</a>
            <a href="/#contact">Контакт</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Связь</span>
            <a
              href="https://instagram.com/k0shka_art"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="tel:+79506718074">Телефон</a>
            <a href="https://vk.ru/fool_999" target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Запись</span>
            <p className="footer-promo">
              −30% <span>в честь дня рождения</span>
            </p>
            <a href="#contact" className="footer-cta">
              Записаться на съёмку →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-mark">К · К</span>
          <p>© 2025 Ксения Кошка · Все права защищены</p>
          <p>
            <span className="footer-with">Создано с</span>
            <span className="footer-heart"> ✦ </span>
          </p>
        </div>
      </footer>
    </>
  );
}
