create table "public"."consignee_partner" (
    "id" bigint generated by default as identity not null,
    "name" text not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);

alter table "public"."consignee_partner" enable row level security;

create policy "Enable ALL actions for authenticated users only"
on "public"."consignee_partner"
as permissive
for all
to authenticated
with check (true);

create table "public"."country" (
    "id" bigint generated by default as identity not null,
    "name" text not null
);

alter table "public"."country" enable row level security;

create policy "Enable ALL actions for authenticated users only"
on "public"."country"
as permissive
for all
to authenticated
with check (true);

create table "public"."donor" (
    "id" bigint generated by default as identity not null,
    "name" text not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);

alter table "public"."donor" enable row level security;

create policy "Enable ALL actions for authenticated users only"
on "public"."donor"
as permissive
for all
to authenticated
with check (true);

create table "public"."shipment_status" (
    "id" bigint generated by default as identity not null,
    "status" text not null
);

alter table "public"."shipment_status" enable row level security;

create policy "Enable ALL actions for authenticated users only"
on "public"."shipment_status"
as permissive
for all
to authenticated
with check (true);


create table "public"."shipment_type" (
    "id" bigint generated by default as identity not null,
    "shipment_type" text not null
);

alter table "public"."shipment_type" enable row level security;

create policy "Enable ALL actions for authenticated users only"
on "public"."shipment_type"
as permissive
for all
to authenticated
with check (true);


alter table "public"."shipment" add column "destination_id" bigint not null;

alter table "public"."shipment" add column "donor_id" bigint;

alter table "public"."shipment" add column "bookkeeping_flexport" boolean;

alter table "public"."shipment" add column "bookkeeping_gik" boolean;

alter table "public"."shipment" add column "drive_link" text;

alter table "public"."shipment" add column "commercial_invoice_link" text;

alter table "public"."shipment" add column "estimated_delivery_date" timestamp with time zone;

alter table "public"."shipment" add column "flexport_tracking_id" text;

alter table "public"."shipment" add column "freight_tracking_id" text;

alter table "public"."shipment" add column "gik_value_amount_usd" numeric;

alter table "public"."shipment" add column "logistics_expense_donation_usd" numeric;

alter table "public"."shipment" add column "main_shipment_type_id" bigint;

alter table "public"."shipment" add column "weight_kg" numeric;

alter table "public"."shipment" add column "consignee" bigint;

alter table "public"."shipment" add column "impact_reporting" boolean;

alter table "public"."shipment" add column "patients_treated" numeric;

alter table "public"."shipment" add column "status"  bigint not null;

alter table "public"."shipment" enable row level security;

CREATE UNIQUE INDEX consignee_partner_pkey ON public.consignee_partner USING btree (id);

CREATE UNIQUE INDEX country_id_key ON public.country USING btree (id);

CREATE UNIQUE INDEX country_pkey ON public.country USING btree (id);

CREATE UNIQUE INDEX donor_pkey ON public.donor USING btree (id);

CREATE UNIQUE INDEX shipment_status_pkey ON public.shipment_status USING btree (id);

CREATE UNIQUE INDEX shipment_type_pkey ON public.shipment_type USING btree (id);

alter table "public"."consignee_partner" add constraint "consignee_partner_pkey" PRIMARY KEY using index "consignee_partner_pkey";

alter table "public"."country" add constraint "country_pkey" PRIMARY KEY using index "country_pkey";

alter table "public"."donor" add constraint "donor_pkey" PRIMARY KEY using index "donor_pkey";

alter table "public"."shipment_status" add constraint "shipment_status_pkey" PRIMARY KEY using index "shipment_status_pkey";

alter table "public"."shipment_type" add constraint "shipment_type_pkey" PRIMARY KEY using index "shipment_type_pkey";

alter table "public"."country" add constraint "country_id_key" UNIQUE using index "country_id_key";

alter table "public"."shipment" add constraint "shipment_consignee_fkey" FOREIGN KEY (consignee) REFERENCES consignee_partner(id) not valid;

alter table "public"."shipment" validate constraint "shipment_consignee_fkey";

alter table "public"."shipment" add constraint "shipment_destination_id_fkey" FOREIGN KEY (destination_id) REFERENCES country(id) not valid;

alter table "public"."shipment" validate constraint "shipment_destination_id_fkey";

alter table "public"."shipment" add constraint "shipment_donor_id_fkey" FOREIGN KEY (donor_id) REFERENCES donor(id) not valid;

alter table "public"."shipment" validate constraint "shipment_donor_id_fkey";

alter table "public"."shipment" add constraint "shipment_main_shipment_type_id_fkey" FOREIGN KEY (main_shipment_type_id) REFERENCES shipment_type(id) not valid;

alter table "public"."shipment" validate constraint "shipment_main_shipment_type_id_fkey";

alter table "public"."shipment" add constraint "shipment_status_fkey" FOREIGN KEY (status) REFERENCES shipment_status(id) not valid;

alter table "public"."shipment" validate constraint "shipment_status_fkey";

create policy "Enable ALL actions for authenticated users only"
on "public"."shipment"
as permissive
for all
to authenticated
with check (true);