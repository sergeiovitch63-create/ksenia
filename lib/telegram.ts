/**
 * Envoie une notification via un bot Telegram.
 * Retourne `{ ok: true }` si envoyé, `{ ok: false, error }` sinon.
 * Ne throw jamais — l'appelant décide quoi faire.
 */
export type InlineKeyboardButton = {
  text: string;
  url?: string;
  callback_data?: string;
};

export async function sendTelegram(
  text: string,
  opts: {
    parseMode?: "HTML" | "MarkdownV2";
    disablePreview?: boolean;
    inlineKeyboard?: InlineKeyboardButton[][];
  } = {}
): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID manquant" };
  }

  try {
    const body: Record<string, unknown> = {
      chat_id: chatId,
      text,
      parse_mode: opts.parseMode ?? "HTML",
      disable_web_page_preview: opts.disablePreview ?? true,
    };
    if (opts.inlineKeyboard) {
      body.reply_markup = { inline_keyboard: opts.inlineKeyboard };
    }
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return { ok: false, error: `Telegram ${res.status}: ${body.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
