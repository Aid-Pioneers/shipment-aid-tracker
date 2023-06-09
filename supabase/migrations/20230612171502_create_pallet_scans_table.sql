create table
  public.pallet_scan (
    id uuid default uuid_generate_v4() not null,
    pallet_id uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    location geography not null,
    constraint pallet_scan_pkey primary key (id),
    constraint pallet_scan_pallet_id_fkey foreign key (pallet_id) references pallet (id) on delete cascade
  ) tablespace pg_default;
