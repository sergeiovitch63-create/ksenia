import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="nf-bg" aria-hidden="true" />
      <div className="nf-content">
        <span className="nf-eyebrow">404 · Страница не найдена</span>
        <h1 className="nf-title">
          Эта страница <em>потерялась</em>
          <br />в тумане Калининграда
        </h1>
        <p className="nf-sub">
          Возможно, ссылка устарела или мы случайно её удалили.
        </p>
        <Link href="/" className="nf-cta">
          ← Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
