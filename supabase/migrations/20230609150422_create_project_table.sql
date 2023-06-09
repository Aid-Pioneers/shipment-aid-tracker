create table
  public.project (
    id uuid default uuid_generate_v4() not null,
    created_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    updated_at timestamp with time zone not null default (now() at time zone 'utc'::text),
    name text not null,
    constraint project_pkey primary key (id),
    constraint project_name_key unique (name)
  ) tablespace pg_default;
