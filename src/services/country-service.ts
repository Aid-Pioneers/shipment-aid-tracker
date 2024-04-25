import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

export class CountryService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchCountries() {
    return this.supabase.from("country").select("*");
  }
}
