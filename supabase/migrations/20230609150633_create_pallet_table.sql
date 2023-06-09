create table
  public.pallet (
    id uuid default uuid_generate_v4() not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    shipment_id uuid not null,
    constraint pallet_pkey primary key (id)
  ) tablespace pg_default;
