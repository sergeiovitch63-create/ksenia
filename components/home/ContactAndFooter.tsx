import { Reveal } from "@/components/Reveal";

export function ContactAndFooter() {
  return (
    <>
      <section className="sec" id="contact">
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
          <div>
            <div className="form-row">
              <label>Имя</label>
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="form-row">
              <label>Тип съёмки</label>
              <select defaultValue="">
                <option value="">Выберите съёмку</option>
                <option>Портретная</option>
                <option>Семейная</option>
                <option>Лав-стори</option>
                <option>Для беременных</option>
                <option>Детская</option>
                <option>Уличная</option>
                <option>Индивидуальная</option>
              </select>
            </div>
            <div className="form-row">
              <label>Сообщение</label>
              <textarea placeholder="Желаемая дата, место, вопросы..." />
            </div>
            <button type="button" className="btn-send">
              Отправить заявку
            </button>
          </div>
          <div>
            <div className="detail-block">
              <span className="detail-label">Instagram</span>
              <p>
                <a href="#">@ksenia.koshka</a>
              </p>
            </div>
            <div className="detail-block">
              <span className="detail-label">WhatsApp</span>
              <p>
                <a href="#">Написать сообщение</a>
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

      <footer>
        <p>© 2025 Ксения Кошка · Фотограф · Калининград</p>
        <span className="footer-mark">К · К</span>
        <p>Все права защищены</p>
      </footer>
    </>
  );
}
