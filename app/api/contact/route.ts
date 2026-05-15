import { NextResponse } from "next/server";
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
  "other",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const nom = String(body.nom ?? "").trim();
    const contact = String(body.contact ?? "").trim();
    const type_seance = String(body.type_seance ?? "").trim();
    const date_souhaitee = String(body.date_souhaitee ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!nom || nom.length > 60) {
      return NextResponse.json({ error: "Имя обязательно" }, { status: 400 });
    }
    if (!contact || contact.length > 120) {
      return NextResponse.json(
        { error: "Контакт обязателен" },
        { status: 400 }
      );
    }
    if (!TYPES.includes(type_seance)) {
      return NextResponse.json(
        { error: "Выберите тип съёмки" },
        { status: 400 }
      );
    }

    const tgText =
      `<b>📩 Новая заявка</b>\n\n` +
      `<b>${escTg(nom)}</b>\n` +
      `Контакт: <code>${escTg(contact)}</code>\n` +
      `Съёмка: ${escTg(type_seance)}\n` +
      (date_souhaitee ? `Желаемая дата: ${escTg(date_souhaitee)}\n` : "") +
      (message ? `\n<i>${escTg(message)}</i>` : "");

    const tg = await sendTelegram(tgText);

    if (!tg.ok) {
      console.error("[contact] Telegram FAILED:", tg.error);
      return NextResponse.json(
        { error: `Не удалось отправить уведомление: ${tg.error}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Ошибка отправки" },
      { status: 500 }
    );
  }
}
