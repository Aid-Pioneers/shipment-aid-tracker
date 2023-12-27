alter table "public"."country" add column "code" text not null;

CREATE UNIQUE INDEX country_code_key ON public.country USING btree (code);

alter table "public"."country" add constraint "country_code_key" UNIQUE using index "country_code_key";