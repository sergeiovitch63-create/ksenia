import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { supabaseAdmin } from "@/lib/supabase";
import { sendTelegram, escapeHtml as escTg } from "@/lib/telegram";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TYPES = [
  "portret",
  "semya",
  "lav-stori",
  "deti",
  "ulitsa",
  "individualnaya",
  "beremennost",
];

function makeToken(id: string) {
  const secret = process.env.AVIS_APPROVAL_SECRET || "dev-secret";
  return createHmac("sha256", secret).update(id).digest("hex").slice(0, 32);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const nom = String(body.nom ?? "").trim();
    const type_seance = String(body.type_seance ?? "").trim();
    const date_seance = String(body.date_seance ?? "").trim();
    const note = Number(body.note);
    const commentaire = String(body.commentaire ?? "").trim();

    if (!nom || nom.length > 60) {
      return NextResponse.json(
        { error: "Имя обязательно (макс. 60 символов)" },
        { status: 400 }
      );
    }
    if (!TYPES.includes(type_seance)) {
      return NextResponse.json(
        { error: "Неверный тип съёмки" },
        { status: 400 }
      );
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date_seance)) {
      return NextResponse.json(
        { error: "Неверный формат даты" },
        { status: 400 }
      );
    }
    if (!Number.isInteger(note) || note < 1 || note > 5) {
      return NextResponse.json(
        { error: "Оценка должна быть от 1 до 5" },
        { status: 400 }
      );
    }
    if (!commentaire || commentaire.length < 10 || commentaire.length > 1200) {
      return NextResponse.json(
        { error: "Комментарий: от 10 до 1200 символов" },
        { status: 400 }
      );
    }

    const sb = supabaseAdmin();
    const { data, error } = await sb
      .from("avis")
      .insert({
        nom,
        type_seance,
        date_seance,
        note,
        commentaire,
        approuve: false,
      })
      .select("id")
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || "Ошибка БД" },
        { status: 500 }
      );
    }

    // Notification Telegram avec boutons inline d'approbation
    const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const token = makeToken(data.id);
    const approveUrl = `${site}/api/avis/approuver?id=${data.id}&token=${token}&action=approve`;
    const rejectUrl = `${site}/api/avis/approuver?id=${data.id}&token=${token}&action=reject`;
    const stars = "★".repeat(note) + "☆".repeat(5 - note);
    const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)/i.test(site);

    const baseText =
      `<b>📸 Новый отзыв</b>\n\n` +
      `<b>${escTg(nom)}</b> · ${escTg(type_seance)}\n` +
      `Дата съёмки: ${escTg(date_seance)}\n` +
      `Оценка: ${stars}\n\n` +
      `<i>«${escTg(commentaire)}»</i>`;

    let tg;
    if (isLocal) {
      // En dev local, Telegram refuse les boutons URL http://localhost
      // → on met les liens dans le texte
      tg = await sendTelegram(
        baseText +
          `\n\n<a href="${approveUrl}">✅ Одобрить</a>  ·  <a href="${rejectUrl}">🗑 Удалить</a>\n` +
          `<i>(en dev local — en prod ce seront des boutons)</i>`
      );
    } else {
      // En prod (HTTPS), Telegram accepte les boutons inline
      tg = await sendTelegram(baseText, {
        inlineKeyboard: [
          [
            { text: "✅ Одобрить", url: approveUrl },
            { text: "🗑 Удалить", url: rejectUrl },
          ],
        ],
      });
    }

    if (!tg.ok) {
      console.error("[avis] Telegram FAILED:", tg.error);
      return NextResponse.json({
        ok: true,
        id: data.id,
        warning: `Avis enregistré mais Telegram a échoué: ${tg.error}`,
      });
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Ошибка сервера" },
      { status: 500 }
    );
  }
}
