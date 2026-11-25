-- Run this once in the Supabase SQL editor to enable per-account language sync.
-- The table is private to the authenticated user and is not linked to a couple conversation.
create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  language text not null default 'fr'
    check (language in ('fr', 'en', 'es', 'pt', 'de', 'it', 'ar', 'zh')),
  updated_at timestamptz not null default now()
);

alter table public.user_preferences enable row level security;

create policy "Users can read their own preferences"
  on public.user_preferences for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert their own preferences"
  on public.user_preferences for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own preferences"
  on public.user_preferences for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
