-- Table des avis clients
create table if not exists public.avis (
  id uuid default gen_random_uuid() primary key,
  nom text not null,
  type_seance text not null,
  date_seance date not null,
  note integer not null check (note between 1 and 5),
  commentaire text not null,
  approuve boolean not null default false,
  created_at timestamptz not null default now()
);

-- Index pour les requetes frequentes
create index if not exists avis_approuve_idx on public.avis (approuve, date_seance desc);

-- Row Level Security
alter table public.avis enable row level security;

-- Politique : tout le monde peut INSERER un avis (soumission publique)
drop policy if exists "anyone can insert avis" on public.avis;
create policy "anyone can insert avis"
  on public.avis for insert
  to anon, authenticated
  with check (approuve = false);

-- Politique : tout le monde peut LIRE les avis approuves
drop policy if exists "anyone can read approved avis" on public.avis;
create policy "anyone can read approved avis"
  on public.avis for select
  to anon, authenticated
  using (approuve = true);
