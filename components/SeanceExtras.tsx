import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";

type Suggestion = { slug: string; label: string };

const ALL_SUGGESTIONS: Record<string, Suggestion> = {
  portret: { slug: "portret", label: "Портрет" },
  semya: { slug: "semya", label: "Семья" },
  "lav-stori": { slug: "lav-stori", label: "Лав-стори" },
  deti: { slug: "deti", label: "Дети" },
  ulitsa: { slug: "ulitsa", label: "Улица" },
  individualnaya: { slug: "individualnaya", label: "Индивидуальная" },
  beremennost: { slug: "beremennost", label: "Беременность" },
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    q: "Сколько фотографий я получу?",
    a: "Минимум 15–25 отретушированных кадров в высоком разрешении. Точное количество зависит от длительности съёмки.",
  },
  {
    q: "Сколько времени занимает обработка?",
    a: "Готовые фотографии вы получите в течение 5–7 дней после съёмки. Срочная обработка — по договорённости.",
  },
  {
    q: "Что делать, если будет плохая погода?",
    a: "Мы либо перенесём съёмку на другой день, либо найдём интересную локацию в помещении. Дождливая погода тоже бывает очень атмосферной.",
  },
  {
    q: "Можно ли взять с собой кого-то?",
    a: "Конечно! Друг или близкий человек поможет вам расслабиться, особенно если это ваша первая съёмка.",
  },
];

type Props = {
  currentSlug: string;
  faq?: FaqItem[];
  suggestionSlugs?: string[];
};

export default function SeanceExtras({
  currentSlug,
  faq,
  suggestionSlugs,
}: Props) {
  const sgs = (
    suggestionSlugs ||
    Object.keys(ALL_SUGGESTIONS).filter((s) => s !== currentSlug).slice(0, 3)
  )
    .map((slug) => ALL_SUGGESTIONS[slug])
    .filter(Boolean);

  return (
    <>
      <section className="seance-faq">
        <div className="seance-faq-head">
          <span className="sec-label">FAQ</span>
          <h2>
            Частые <em>вопросы</em>
          </h2>
        </div>
        <Faq items={faq && faq.length ? faq : DEFAULT_FAQ} />
      </section>

      <section className="suggestions">
        <h3>
          Вам также может <em>понравиться</em>
        </h3>
        <div className="suggestions-grid">
          {sgs.map((s) => (
            <Link
              key={s.slug}
              href={`/semki/${s.slug}`}
              className="suggestion-link"
            >
              {s.label} →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
