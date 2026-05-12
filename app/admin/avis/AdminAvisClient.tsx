"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Avis } from "@/lib/supabase";

const TYPE_LABEL: Record<string, string> = {
  portret: "Портрет",
  semya: "Семья",
  "lav-stori": "Лав-стори",
  deti: "Дети",
  ulitsa: "Улица",
  individualnaya: "Индивидуальная",
  beremennost: "Беременность",
};

export default function AdminAvisClient({
  initialAvis,
  errorMsg,
}: {
  initialAvis: Avis[];
  errorMsg: string | null;
}) {
  const [avis, setAvis] = useState<Avis[]>(initialAvis);
  const [filter, setFilter] = useState<"pending" | "approved" | "all">(
    "pending"
  );
  const [busy, setBusy] = useState<string | null>(null);
  const router = useRouter();

  const filtered = avis.filter((a) =>
    filter === "all"
      ? true
      : filter === "pending"
      ? !a.approuve
      : a.approuve
  );

  const counts = {
    pending: avis.filter((a) => !a.approuve).length,
    approved: avis.filter((a) => a.approuve).length,
    all: avis.length,
  };

  const setApprove = async (id: string, approuve: boolean) => {
    setBusy(id);
    const res = await fetch(`/api/admin/avis/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approuve }),
    });
    if (res.ok) {
      setAvis((cur) => cur.map((a) => (a.id === id ? { ...a, approuve } : a)));
    }
    setBusy(null);
  };

  const remove = async (id: string) => {
    if (!confirm("Удалить отзыв безвозвратно?")) return;
    setBusy(id);
    const res = await fetch(`/api/admin/avis/${id}`, { method: "DELETE" });
    if (res.ok) {
      setAvis((cur) => cur.filter((a) => a.id !== id));
    }
    setBusy(null);
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <main className="admin">
      <header className="admin-header">
        <h1>Модерация отзывов</h1>
        <button onClick={logout} className="admin-logout">
          Выйти
        </button>
      </header>

      <div className="admin-tabs">
        {(
          [
            { id: "pending", label: "На проверке", n: counts.pending },
            { id: "approved", label: "Опубликовано", n: counts.approved },
            { id: "all", label: "Все", n: counts.all },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            className={`admin-tab ${filter === t.id ? "admin-tab--on" : ""}`}
            onClick={() => setFilter(t.id)}
          >
            {t.label} <span>{t.n}</span>
          </button>
        ))}
      </div>

      {errorMsg && <div className="admin-error">{errorMsg}</div>}

      <div className="admin-list">
        {filtered.length === 0 && (
          <p className="admin-empty">Здесь ничего нет.</p>
        )}
        {filtered.map((a) => (
          <article key={a.id} className="admin-card">
            <div className="admin-card-head">
              <div>
                <h3>{a.nom}</h3>
                <p className="admin-meta">
                  {TYPE_LABEL[a.type_seance] ?? a.type_seance} ·{" "}
                  {new Date(a.date_seance).toLocaleDateString("ru-RU", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {"★".repeat(a.note)}
                  {"☆".repeat(5 - a.note)}
                </p>
                <p className="admin-submitted">
                  Отправлено {new Date(a.created_at).toLocaleString("ru-RU")}
                </p>
              </div>
              <span
                className={`admin-badge ${
                  a.approuve ? "admin-badge--ok" : "admin-badge--pending"
                }`}
              >
                {a.approuve ? "Опубликовано" : "Ожидает"}
              </span>
            </div>

            <p className="admin-text">«{a.commentaire}»</p>

            <div className="admin-actions">
              {!a.approuve ? (
                <button
                  className="admin-btn admin-btn--ok"
                  disabled={busy === a.id}
                  onClick={() => setApprove(a.id, true)}
                >
                  ✓ Опубликовать
                </button>
              ) : (
                <button
                  className="admin-btn"
                  disabled={busy === a.id}
                  onClick={() => setApprove(a.id, false)}
                >
                  ↩ Снять с публикации
                </button>
              )}
              <button
                className="admin-btn admin-btn--danger"
                disabled={busy === a.id}
                onClick={() => remove(a.id)}
              >
                Удалить
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
