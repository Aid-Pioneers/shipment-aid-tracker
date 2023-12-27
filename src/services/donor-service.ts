import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbDonor } from '../types/aliases';
import { Database } from '../types/database.types';

export class DonorService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchDonors(onSuccess: (projects: DbDonor[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('donor').select('*');
    return error ? onError(error) : onSuccess(data)
  }
}
