CREATE TABLE public.demo_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) <= 120),
  email text not null check (char_length(email) <= 255),
  company text check (char_length(company) <= 160),
  message text check (char_length(message) <= 2000),
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.demo_leads TO anon, authenticated;
GRANT ALL ON public.demo_leads TO service_role;

ALTER TABLE public.demo_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit demo requests"
  ON public.demo_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);