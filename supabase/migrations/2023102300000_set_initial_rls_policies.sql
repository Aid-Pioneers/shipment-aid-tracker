create schema private;

create function private.get_authenticated_manager_users()
returns setof uuid
language sql
security definer
set search_path = public
stable
as $$
    select  profile_id
    from    profile_role
    inner join
            role
    on      role.role = 'manager'
        and profile_role.role_id = role.id
    where   profile_role.profile_id = auth.uid()
$$;

create policy "Enable read access for authenticated users"
on "public"."consignee_partner"
as permissive
for select
to authenticated
using (true);

create policy "Enable all access for authenticated managers"
on "public"."consignee_partner"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));


create policy "Enable read access for authenticated users"
on "public"."country"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for authenticated users"
on "public"."donor"
as permissive
for select
to authenticated
using (true);

create policy "Enable all access for authenticated managers"
on "public"."donor"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));


create policy "Enable read access for authenticated users"
on "public"."pallet"
as permissive
for select
to authenticated
using (true);

create policy "Enable all access for authenticated managers"
on "public"."pallet"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));


create policy "enable read for authenticated users only"
on "public"."profile"
as permissive
for select
to authenticated
using (true);

create policy "users can update own profile."
on "public"."profile"
as permissive
for update
to public
using ((auth.uid() = id));


create policy "Enable read access for authenticated users"
on "public"."project"
as permissive
for select
to authenticated
using (true);

create policy "Enable all access for authenticated managers"
on "public"."project"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));


create policy "allow read for authenticated users"
on "public"."role"
as permissive
for select
to authenticated
using (true);


create policy "Enable read access for authenticated users"
on "public"."shipment"
as permissive
for select
to authenticated
using (true);

create policy "Enable all access for authenticated users"
on "public"."shipment"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));


create policy "enable read for authenticated users only"
on "public"."shipment_manager"
as permissive
for select
to authenticated
using (true);


create policy "Enable ALL actions for authenticated users only"
on "public"."shipment_status"
as permissive
for select
to authenticated
using (true);


create policy "Enable ALL actions for authenticated users only"
on "public"."shipment_type"
as permissive
for select
to authenticated
using (true);