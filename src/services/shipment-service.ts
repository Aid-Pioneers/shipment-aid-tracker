import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../database.types';
import { DbProject } from '../types/aliases';

export class ShipmentService {
    supabase: SupabaseClient<Database>;

    constructor(supabase: SupabaseClient<Database>) {
        this.supabase = supabase;
    }

    async fetchShipments(onSuccess: (projects: DbProject[]) => void, onError: (error: PostgrestError) => void) {
        const { data, error } = await this.supabase.from('project').select('*');
        return error ? onError(error) : onSuccess(data)
    }
}
