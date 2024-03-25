create policy "Enable all access for authenticated managers"
on "public"."shipment_manager"
as permissive
for all
to authenticated
with check (auth.uid() in ( select private.get_authenticated_manager_users()));