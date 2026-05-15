import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function makeToken(id: string) {
  const secret = process.env.AVIS_APPROVAL_SECRET || "dev-secret";
  return createHmac("sha256", secret).update(id).digest("hex").slice(0, 32);
}

function htmlPage(opts: {
  title: string;
  emoji: string;
  message: string;
  color: string;
}) {
  const home = process.env.NEXT_PUBLIC_SITE_URL || "/";
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${opts.title}</title>
<style>
  body { font-family: Georgia, serif; background: #0c0c0c; color: #f5f3f0;
    display: flex; align-items: center; justify-content: center; min-height: 100vh;
    margin: 0; text-align: center; padding: 40px; }
  .badge { font-size: 64px; margin-bottom: 16px; }
  h1 { font-weight: 300; letter-spacing: 0.1em; color: ${opts.color}; margin: 0 0 12px; }
  p { color: #9a948c; margin: 0 0 32px; }
  a { color: #c8a46a; letter-spacing: 0.2em; text-transform: uppercase;
      font-size: 12px; border-bottom: 1px solid #c8a46a; text-decoration: none;
      padding-bottom: 4px; }
</style>
</head>
<body>
<div>
  <div class="badge">${opts.emoji}</div>
  <h1>${opts.title}</h1>
  <p>${opts.message}</p>
  <a href="${home}">← На сайт</a>
</div>
</body>
</html>`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  const token = url.searchParams.get("token");
  const action = url.searchParams.get("action") || "approve";

  if (!id || !token) {
    return new NextResponse("Bad request", { status: 400 });
  }

  const expected = makeToken(id);
  if (
    expected.length !== token.length ||
    !timingSafeEqual(Buffer.from(expected), Buffer.from(token))
  ) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const sb = supabaseAdmin();

  if (action === "reject") {
    const { error } = await sb.from("avis").delete().eq("id", id);
    if (error) {
      return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
    return new NextResponse(
      htmlPage({
        title: "Отзыв удалён",
        emoji: "🗑",
        message: "Отзыв безвозвратно удалён из базы.",
        color: "#c83c3c",
      }),
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // action=approve (par défaut)
  const { error } = await sb.from("avis").update({ approuve: true }).eq("id", id);
  if (error) {
    return new NextResponse(`Error: ${error.message}`, { status: 500 });
  }

  return new NextResponse(
    htmlPage({
      title: "Отзыв опубликован",
      emoji: "✓",
      message: "Отзыв теперь виден на сайте в разделе «Отзывы».",
      color: "#c8a46a",
    }),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
