import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

export class DonorService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchDonors() {
    return this.supabase.from("donor").select("*");
  }
}
