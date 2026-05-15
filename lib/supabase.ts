import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;
let _admin: SupabaseClient | null = null;

function getUrl() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url || url === "placeholder") {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL manquant");
  }
  return url;
}

export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  const url = getUrl();
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!anon) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY manquant");
  _client = createClient(url, anon, { auth: { persistSession: false } });
  return _client;
}

export function supabaseAdmin(): SupabaseClient {
  if (_admin) return _admin;
  const url = getUrl();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY manquant");
  _admin = createClient(url, key, { auth: { persistSession: false } });
  return _admin;
}

// Proxy compatible avec l'ancien `supabase.from(...)` côté client
export const supabase = new Proxy(
  {},
  {
    get(_t, prop) {
      const c = getSupabase() as unknown as Record<string, unknown>;
      const v = c[prop as string];
      return typeof v === "function" ? (v as Function).bind(c) : v;
    },
  }
) as SupabaseClient;

export type Avis = {
  id: string;
  nom: string;
  type_seance: string;
  date_seance: string;
  note: number;
  commentaire: string;
  approuve: boolean;
  created_at: string;
};
