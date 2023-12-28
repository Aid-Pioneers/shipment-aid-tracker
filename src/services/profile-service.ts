import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbProfile } from '../types/aliases';
import { Database } from '../types/database.types';

type ValidRole = 'manager' | 'donor'

export class ProfileService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchProfiles(roles: ValidRole[], onSuccess: (projects: DbProfile[]) => void, onError: (error: PostgrestError) => void) {

    const { data, error } = await this.supabase.from('profile').select(`
      id,
      first_name,
      last_name,
      email,
      profile_role(profile_id, role_id),
      role(id, role)
      `).eq('role.role', 'manager');

    return error ? onError(error) : onSuccess(data)
  }
}
