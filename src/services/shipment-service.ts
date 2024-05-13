import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

export class ShipmentService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchShipments() {
    return this.supabase.from('shipment').select('*');
  }

  async fetchShipmentTypes() {
    return this.supabase.from('shipment_type').select('*');
  }

  async fetchShipmentStatuses() {
    return this.supabase.from('shipment_status').select('*');
  }

  async fetchShipmentStatuses(onSuccess: (projects: DbShipmentStatus[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('shipment_status').select('*');
    return error ? onError(error) : onSuccess(data);
  }

  async create(shipment: Database['public']['Tables']['shipment']['Insert']) {
    return this.supabase.from('shipment').insert(shipment).select('id').single();
  }
}
