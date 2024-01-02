-- add an origin for a shipment
alter table public.shipment
add column "origin_id" bigint not null;

alter table "public"."shipment" add constraint "shipment_origin_id_fkey" FOREIGN KEY (origin_id) REFERENCES country(id) not valid;

alter table "public"."shipment" validate constraint "shipment_origin_id_fkey";