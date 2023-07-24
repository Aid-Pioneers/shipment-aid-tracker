alter table "public"."pallet" enable row level security;

alter table "public"."pallet_scan" enable row level security;

alter table "public"."project" enable row level security;

alter table "public"."shipment" enable row level security;

create policy "Enable read access for authenticated users."
on "public"."pallet"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for all users."
on "public"."project"
as permissive
for select
to public
using (true);


create policy "Enable read access for authenticated users."
on "public"."shipment"
as permissive
for select
to authenticated
using (true);
