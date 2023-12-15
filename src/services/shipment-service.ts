import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbShipment } from '../types/aliases';
import { Database } from '../types/database.types';

export class ShipmentService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchShipments(onSuccess: (projects: DbShipment[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('shipment').select('*');
    return error ? onError(error) : onSuccess(data);
  }

  async create(shipment: any) {
    // TODO
    // create a new shipment row on supabase shipment table
    const { data, error } = await this.supabase.from('shipment').insert(shipment);
  }
}
