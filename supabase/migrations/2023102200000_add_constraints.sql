create unique index consignee_partner_pkey ON public.consignee_partner using btree (id);

alter table "public"."consignee_partner" add constraint "consignee_partner_pkey" PRIMARY KEY using index "consignee_partner_pkey";


create unique index country_pkey ON public.country using btree (id);

create unique index country_code_key ON public.country using btree (code);

alter table "public"."country" add constraint "country_pkey" PRIMARY KEY using index "country_pkey";

alter table "public"."country" add constraint "country_code_key" UNIQUE using index "country_code_key";


create unique index donor_pkey ON public.donor using btree (id);

alter table "public"."donor" add constraint "donor_pkey" PRIMARY KEY using index "donor_pkey";


create unique index profiles_pkey on public.profile using btree (id);

alter table "public"."profile" add constraint "profiles_pkey" primary key using index "profiles_pkey";

alter table "public"."profile" add constraint "profile_id_fkey" foreign key (id) references auth.users(id) on delete cascade;


create unique index project_pkey ON public.project using btree (id);

create unique index project_name_key ON public.project using btree (name);

alter table "public"."project" add constraint "project_pkey" PRIMARY KEY using index "project_pkey";

alter table "public"."project" add constraint "project_name_key" UNIQUE using index "project_name_key";


create unique index role_pkey on public.role using btree (id);

create unique index role_role_key on public.role using btree (role);

alter table "public"."role" add constraint "role_pkey" primary key using index "role_pkey";

alter table "public"."role" add constraint "role_role_key" unique using index "role_role_key";


create unique index profile_role_pkey on public.profile_role using btree (profile_id, role_id);

alter table "public"."profile_role" add constraint "profile_role_pkey" primary key using index "profile_role_pkey";

alter table "public"."profile_role" add constraint "profile_role_profile_id_fkey" foreign key (profile_id) references profile(id);

alter table "public"."profile_role" add constraint "profile_role_role_id_fkey" foreign key (role_id) references role(id);


create unique index shipment_status_pkey ON public.shipment_status using btree (id);

alter table "public"."shipment_status" add constraint "shipment_status_pkey" PRIMARY KEY using index "shipment_status_pkey";


create unique index shipment_type_pkey ON public.shipment_type using btree (id);

alter table "public"."shipment_type" add constraint "shipment_type_pkey" PRIMARY KEY using index "shipment_type_pkey";

create unique index shipment_pkey ON public.shipment using btree (id);

alter table "public"."shipment" add constraint "shipment_pkey" PRIMARY KEY using index "shipment_pkey";

alter table "public"."shipment" add constraint "shipment_consignee_id_fkey" FOREIGN KEY (consignee_id) REFERENCES consignee_partner(id);

alter table "public"."shipment" add constraint "shipment_origin_id_fkey" FOREIGN KEY (origin_id) REFERENCES country(id);

alter table "public"."shipment" add constraint "shipment_destination_id_fkey" FOREIGN KEY (destination_id) REFERENCES country(id);

alter table "public"."shipment" add constraint "shipment_donor_id_fkey" FOREIGN KEY (donor_id) REFERENCES donor(id);

alter table "public"."shipment" add constraint "shipment_main_shipment_type_id_fkey" FOREIGN KEY (main_shipment_type_id) REFERENCES shipment_type(id);

alter table "public"."shipment" add constraint "shipment_project_id_fkey" FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE;

alter table "public"."shipment" add constraint "shipment_status_id_fkey" FOREIGN KEY (status_id) REFERENCES shipment_status(id);


create unique index shipment_manager_pkey on public.shipment_manager using btree (profile_id, shipment_id);

alter table "public"."shipment_manager" add constraint "shipment_manager_pkey" primary key using index "shipment_manager_pkey";

alter table "public"."shipment_manager" add constraint "shipment_manager_profile_id_fkey" foreign key (profile_id) references profile(id);

alter table "public"."shipment_manager" add constraint "shipment_manager_shipment_id_fkey" foreign key (shipment_id) references shipment(id);


create unique index pallet_pkey ON public.pallet using btree (id);

alter table "public"."pallet" add constraint "pallet_pkey" PRIMARY KEY using index "pallet_pkey";

alter table "public"."pallet" add constraint "pallet_shipment_id_fkey" FOREIGN KEY (shipment_id) REFERENCES shipment(id) ON DELETE CASCADE;


create unique index pallet_scan_pkey ON public.pallet_scan using btree (id);

alter table "public"."pallet_scan" add constraint "pallet_scan_pkey" PRIMARY KEY using index "pallet_scan_pkey";

alter table "public"."pallet_scan" add constraint "pallet_scan_pallet_id_fkey" FOREIGN KEY (pallet_id) REFERENCES pallet(id) ON DELETE CASCADE;


-- create trigger for creating profiles when users sign-up

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profile (id, first_name, last_name, email)
  values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name', new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
