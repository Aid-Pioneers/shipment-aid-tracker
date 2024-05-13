drop policy "Enable all access for authenticated managers" on "public"."shipment_manager";

drop policy "enable read for authenticated users only" on "public"."shipment_manager";

revoke delete on table "public"."shipment_manager" from "anon";

revoke insert on table "public"."shipment_manager" from "anon";

revoke references on table "public"."shipment_manager" from "anon";

revoke select on table "public"."shipment_manager" from "anon";

revoke trigger on table "public"."shipment_manager" from "anon";

revoke truncate on table "public"."shipment_manager" from "anon";

revoke update on table "public"."shipment_manager" from "anon";

revoke delete on table "public"."shipment_manager" from "authenticated";

revoke insert on table "public"."shipment_manager" from "authenticated";

revoke references on table "public"."shipment_manager" from "authenticated";

revoke select on table "public"."shipment_manager" from "authenticated";

revoke trigger on table "public"."shipment_manager" from "authenticated";

revoke truncate on table "public"."shipment_manager" from "authenticated";

revoke update on table "public"."shipment_manager" from "authenticated";

revoke delete on table "public"."shipment_manager" from "service_role";

revoke insert on table "public"."shipment_manager" from "service_role";

revoke references on table "public"."shipment_manager" from "service_role";

revoke select on table "public"."shipment_manager" from "service_role";

revoke trigger on table "public"."shipment_manager" from "service_role";

revoke truncate on table "public"."shipment_manager" from "service_role";

revoke update on table "public"."shipment_manager" from "service_role";

alter table "public"."shipment_manager" drop constraint "shipment_manager_profile_id_fkey";

alter table "public"."shipment_manager" drop constraint "shipment_manager_shipment_id_fkey";

alter table "public"."shipment_manager" drop constraint "shipment_manager_pkey";

drop index if exists "public"."shipment_manager_pkey";

drop table "public"."shipment_manager";

alter table "public"."shipment" add column "manager_id" uuid;

alter table "public"."shipment" add constraint "shipment_manager_id_fkey" FOREIGN KEY (manager_id) REFERENCES profile(id) not valid;

alter table "public"."shipment" validate constraint "shipment_manager_id_fkey";



