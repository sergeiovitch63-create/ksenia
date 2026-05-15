/**
 * Envoie une notification via un bot Telegram.
 * Supporte plusieurs destinataires via TELEGRAM_CHAT_ID separe par virgules.
 * Retourne `{ ok: true }` si au moins un envoi a reussi.
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
  const chatIdsRaw = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatIdsRaw) {
    return {
      ok: false,
      error: "TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID manquant",
    };
  }

  const chatIds = chatIdsRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (chatIds.length === 0) {
    return { ok: false, error: "TELEGRAM_CHAT_ID vide" };
  }

  const errors: string[] = [];
  let oneSucceeded = false;

  for (const chatId of chatIds) {
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
        const bodyText = await res.text().catch(() => "");
        errors.push(`${chatId}: ${res.status} ${bodyText.slice(0, 120)}`);
      } else {
        oneSucceeded = true;
      }
    } catch (e) {
      errors.push(
        `${chatId}: ${e instanceof Error ? e.message : String(e)}`
      );
    }
  }

  if (!oneSucceeded) {
    return { ok: false, error: errors.join(" | ") };
  }
  return errors.length > 0
    ? { ok: true, error: `Partiel: ${errors.join(" | ")}` }
    : { ok: true };
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
