import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbCountry } from '../types/aliases';
import { Database } from '../types/database.types';

export class CountryService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchCountries(onSuccess: (countries: DbCountry[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('country').select('*');
    return error ? onError(error) : onSuccess(data)
  }
}
