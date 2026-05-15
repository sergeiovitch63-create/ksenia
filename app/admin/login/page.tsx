"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/admin/avis";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace(next);
      router.refresh();
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || "Ошибка");
    }
    setBusy(false);
  };

  return (
    <form className="admin-login-form" onSubmit={submit}>
      <h1>Админ-зона</h1>
      <p>Введите пароль для доступа к модерации отзывов.</p>
      <label>
        <span>Пароль</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
      </label>
      {err && <div className="admin-error">{err}</div>}
      <button type="submit" disabled={busy || !password}>
        {busy ? "..." : "Войти"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="admin-login">
      <Suspense fallback={<div className="admin-login-form" />}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
