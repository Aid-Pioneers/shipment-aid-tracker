import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

export class ConsigneeService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchConsignees() {
    return this.supabase.from("consignee_partner").select("*");
  }
}
