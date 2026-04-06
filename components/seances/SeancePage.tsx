import Link from "next/link";

export function SeancePage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0c0c0c",
        color: "#f5f3f0",
        padding: "120px 52px 80px",
        fontFamily: "var(--font-raleway), sans-serif",
        fontWeight: 300,
      }}
    >
      <p style={{ fontSize: "0.58rem", letterSpacing: "0.38em", color: "#c8a46a", marginBottom: "14px" }}>
        Съёмка
      </p>
      <h1
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
          fontWeight: 300,
          marginBottom: "16px",
        }}
      >
        {title}
      </h1>
      {description ? (
        <p style={{ color: "#9a948c", maxWidth: "520px", lineHeight: 1.7, marginBottom: "40px" }}>
          {description}
        </p>
      ) : null}
      <Link
        href="/"
        style={{
          fontSize: "0.62rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#c8a46a",
          textDecoration: "none",
        }}
      >
        ← На главную
      </Link>
    </main>
  );
}
