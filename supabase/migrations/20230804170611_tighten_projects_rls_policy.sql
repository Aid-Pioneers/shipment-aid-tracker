drop policy "Enable read access for all users." on "public"."project";

create policy "Enable insert for authenticated users only"
on "public"."project"
as permissive
for select
to authenticated
using (true);
