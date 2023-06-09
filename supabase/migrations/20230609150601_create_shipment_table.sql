create table
  public.shipment (
    id uuid default uuid_generate_v4() not null,
    project_id uuid not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    constraint shipment_pkey primary key (id),
    constraint shipment_project_id_fkey foreign key (project_id) references project (id) on delete cascade
  ) tablespace pg_default;
