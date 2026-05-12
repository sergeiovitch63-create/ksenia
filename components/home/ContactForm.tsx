"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TYPES = [
  { id: "portret", label: "Портрет" },
  { id: "semya", label: "Семья" },
  { id: "lav-stori", label: "Лав-стори" },
  { id: "deti", label: "Дети" },
  { id: "ulitsa", label: "Улица" },
  { id: "individualnaya", label: "Индивидуальная" },
  { id: "beremennost", label: "Беременность" },
  { id: "other", label: "Другое" },
];

type State = {
  type_seance: string;
  date_souhaitee: string;
  nom: string;
  contact: string;
  message: string;
};

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | "done">(1);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [data, setData] = useState<State>({
    type_seance: "",
    date_souhaitee: "",
    nom: "",
    contact: "",
    message: "",
  });

  const canNext1 = !!data.type_seance;
  const canNext3 = data.nom.trim() && data.contact.trim();

  const submit = async () => {
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/contact", {
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
    <div className="cf">
      {step !== "done" && (
        <div className="cf-progress">
          <div className="cf-progress-bar">
            <div
              className="cf-progress-fill"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
          <span className="cf-progress-text">
            {step} / 4
          </span>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="s1"
            className="cf-step"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="cf-q">Какая съёмка вас интересует?</h3>
            <div className="cf-types">
              {TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`cf-type ${
                    data.type_seance === t.id ? "cf-type--on" : ""
                  }`}
                  onClick={() => {
                    setData((d) => ({ ...d, type_seance: t.id }));
                    setTimeout(() => setStep(2), 200);
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="s2"
            className="cf-step"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="cf-q">Когда вы хотели бы провести съёмку?</h3>
            <label className="cf-field">
              <input
                type="date"
                value={data.date_souhaitee}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) =>
                  setData((d) => ({ ...d, date_souhaitee: e.target.value }))
                }
              />
            </label>
            <div className="cf-actions">
              <button className="cf-prev" onClick={() => setStep(1)}>
                ← Назад
              </button>
              <button className="cf-next" onClick={() => setStep(3)}>
                {data.date_souhaitee ? "Далее →" : "Пропустить →"}
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="s3"
            className="cf-step"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="cf-q">Как с вами связаться?</h3>
            <label className="cf-field">
              <span>Имя</span>
              <input
                type="text"
                value={data.nom}
                onChange={(e) =>
                  setData((d) => ({ ...d, nom: e.target.value }))
                }
                placeholder="Ваше имя"
                maxLength={60}
              />
            </label>
            <label className="cf-field">
              <span>Telegram, WhatsApp или email</span>
              <input
                type="text"
                value={data.contact}
                onChange={(e) =>
                  setData((d) => ({ ...d, contact: e.target.value }))
                }
                placeholder="@username, +7..., email"
                maxLength={120}
              />
            </label>
            <div className="cf-actions">
              <button className="cf-prev" onClick={() => setStep(2)}>
                ← Назад
              </button>
              <button
                className="cf-next"
                disabled={!canNext3}
                onClick={() => setStep(4)}
              >
                Далее →
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="s4"
            className="cf-step"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="cf-q">Хотите добавить что-то ещё?</h3>
            <label className="cf-field">
              <textarea
                rows={5}
                value={data.message}
                onChange={(e) =>
                  setData((d) => ({ ...d, message: e.target.value }))
                }
                placeholder="Место, идея, вопросы... (необязательно)"
                maxLength={1500}
              />
            </label>
            {err && <div className="cf-error">{err}</div>}
            <div className="cf-actions">
              <button className="cf-prev" onClick={() => setStep(3)}>
                ← Назад
              </button>
              <button
                className="cf-next cf-submit"
                onClick={submit}
                disabled={busy}
              >
                {busy ? "Отправка..." : "Отправить заявку ✦"}
              </button>
            </div>
          </motion.div>
        )}

        {step === "done" && (
          <motion.div
            key="done"
            className="cf-step cf-done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="cf-check">✓</div>
            <h3>Спасибо, {data.nom}!</h3>
            <p className="cf-done-text">
              Ксения свяжется с вами в течение 24 часов.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
