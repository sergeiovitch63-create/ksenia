"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const TYPES = [
  { id: "portret", label: "Портретная" },
  { id: "semya", label: "Семейная" },
  { id: "lav-stori", label: "Лав-стори" },
  { id: "deti", label: "Детская" },
  { id: "ulitsa", label: "Уличная" },
  { id: "individualnaya", label: "Индивидуальная" },
  { id: "beremennost", label: "Беременность" },
];

type State = {
  type_seance: string;
  date_seance: string;
  note: number;
  commentaire: string;
  nom: string;
};

export default function LaisserUnAvisPage() {
  const [step, setStep] = useState<1 | 2 | 3 | "done">(1);
  const [data, setData] = useState<State>({
    type_seance: "",
    date_seance: "",
    note: 0,
    commentaire: "",
    nom: "",
  });
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const canNext1 = data.type_seance && data.date_seance;
  const canNext2 = data.note > 0 && data.commentaire.trim().length >= 10;
  const canSubmit = data.nom.trim().length > 0;

  const submit = async () => {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await res.json();
      if (!res.ok) {
        setErr(j.error || "Ошибка");
        setBusy(false);
        return;
      }
      setStep("done");
    } catch (e) {
      setErr("Ошибка сети");
    }
    setBusy(false);
  };

  return (
    <main className="avis-page">
      <header className="avis-header">
        <Link href="/" className="avis-back">
          ← На главную
        </Link>
        <span className="avis-brand">
          Ксения <span>Кошка</span>
        </span>
      </header>

      <div className="avis-shell">
        {step !== "done" && (
          <div className="avis-progress">
            <div className="avis-progress-bar">
              <div
                className="avis-progress-fill"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
            <span className="avis-progress-text">
              Шаг {step} из 3
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              className="avis-step"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h1>Расскажите о съёмке</h1>
              <p className="avis-sub">
                Какую съёмку вы прошли с Ксенией?
              </p>

              <div className="avis-types">
                {TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`avis-type ${
                      data.type_seance === t.id ? "avis-type--on" : ""
                    }`}
                    onClick={() =>
                      setData((d) => ({ ...d, type_seance: t.id }))
                    }
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <label className="avis-field">
                <span>Дата съёмки</span>
                <input
                  type="date"
                  value={data.date_seance}
                  onChange={(e) =>
                    setData((d) => ({ ...d, date_seance: e.target.value }))
                  }
                  max={new Date().toISOString().split("T")[0]}
                />
              </label>

              <div className="avis-actions">
                <button
                  className="avis-next"
                  disabled={!canNext1}
                  onClick={() => setStep(2)}
                >
                  Далее →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="s2"
              className="avis-step"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h1>Ваш отзыв</h1>
              <p className="avis-sub">Поделитесь впечатлениями</p>

              <div className="avis-stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`avis-star ${
                      n <= data.note ? "avis-star--on" : ""
                    }`}
                    onClick={() => setData((d) => ({ ...d, note: n }))}
                    aria-label={`${n} из 5`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <label className="avis-field">
                <span>Ваш комментарий</span>
                <textarea
                  rows={6}
                  value={data.commentaire}
                  onChange={(e) =>
                    setData((d) => ({ ...d, commentaire: e.target.value }))
                  }
                  placeholder="Что вам запомнилось? Как прошла съёмка?"
                  maxLength={1200}
                />
                <span className="avis-counter">
                  {data.commentaire.length}/1200
                </span>
              </label>

              <div className="avis-actions">
                <button className="avis-prev" onClick={() => setStep(1)}>
                  ← Назад
                </button>
                <button
                  className="avis-next"
                  disabled={!canNext2}
                  onClick={() => setStep(3)}
                >
                  Далее →
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="s3"
              className="avis-step"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h1>Почти готово</h1>
              <p className="avis-sub">Как вас зовут?</p>

              <label className="avis-field">
                <span>Ваше имя</span>
                <input
                  type="text"
                  value={data.nom}
                  onChange={(e) =>
                    setData((d) => ({ ...d, nom: e.target.value }))
                  }
                  placeholder="Имя или имя + фамилия"
                  maxLength={60}
                />
              </label>

              {err && <div className="avis-error">{err}</div>}

              <div className="avis-actions">
                <button className="avis-prev" onClick={() => setStep(2)}>
                  ← Назад
                </button>
                <button
                  className="avis-next avis-next--submit"
                  disabled={!canSubmit || busy}
                  onClick={submit}
                >
                  {busy ? "Отправка..." : "Отправить отзыв ✦"}
                </button>
              </div>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div
              key="done"
              className="avis-step avis-done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="avis-check">✓</div>
              <h1>
                Спасибо, {data.nom}!
              </h1>
              <p className="avis-sub">
                Ксения проверит ваш отзыв и опубликует его на сайте.
              </p>
              <Link href="/" className="avis-home-link">
                Вернуться на сайт →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
