drop policy "Enable read access for authenticated users." on "public"."pallet";

drop policy "Enable insert for authenticated users only" on "public"."project";

drop policy "Enable read access for authenticated users." on "public"."shipment";

alter table "public"."pallet" disable row level security;

alter table "public"."pallet_scan" disable row level security;

alter table "public"."project" disable row level security;

alter table "public"."shipment" add column "bookkeeping_flexport" boolean;

alter table "public"."shipment" add column "bookkeeping_gik" boolean;

alter table "public"."shipment" add column "commercial_invoice_link" text;

alter table "public"."shipment" add column "consignee" text;

alter table "public"."shipment" add column "destination" text not null;

alter table "public"."shipment" add column "doner" text;

alter table "public"."shipment" add column "drive_link" text;

alter table "public"."shipment" add column "estimated_delivery_date" timestamp with time zone;

alter table "public"."shipment" add column "flexport_tracking_id" text;

alter table "public"."shipment" add column "freight_tracking_id" text;

alter table "public"."shipment" add column "gik_value" text;

alter table "public"."shipment" add column "impact_reporting" boolean;

alter table "public"."shipment" add column "invoice_link" text;

alter table "public"."shipment" add column "logistics_expense_donation" text;

alter table "public"."shipment" add column "main_shipment_type" text;

alter table "public"."shipment" add column "patients_treated" numeric;

alter table "public"."shipment" add column "status" text;

alter table "public"."shipment" add column "weight" text;

alter table "public"."shipment" disable row level security;


alter table "storage"."objects" drop constraint "objects_owner_fkey";


