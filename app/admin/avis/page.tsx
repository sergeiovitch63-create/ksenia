import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/adminAuth";
import { supabaseAdmin, type Avis } from "@/lib/supabase";
import AdminAvisClient from "./AdminAvisClient";

export const dynamic = "force-dynamic";

export default async function AdminAvisPage() {
  if (!isAdmin()) {
    redirect("/admin/login?next=/admin/avis");
  }

  const { data, error } = await supabaseAdmin()
    .from("avis")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminAvisClient
      initialAvis={(data ?? []) as Avis[]}
      errorMsg={error?.message ?? null}
    />
  );
}
