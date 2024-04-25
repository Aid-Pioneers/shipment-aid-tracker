import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

type ValidRole = "manager" | "donor";

export class ProfileService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchProfiles(roles: ValidRole[]) {
    return this.supabase.from("profile").select(`
      id,
      first_name,
      last_name,
      email,
      profile_role(profile_id, role_id),
      role(id, role)
      `).eq("role.role", "manager");
  }
}
