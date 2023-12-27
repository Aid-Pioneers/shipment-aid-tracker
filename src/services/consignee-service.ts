import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbConsignee } from '../types/aliases';
import { Database } from '../types/database.types';

export class ConsigneeService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchConsignees(onSuccess: (projects: DbConsignee[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('consignee_partner').select('*');
    return error ? onError(error) : onSuccess(data);
  }
}
