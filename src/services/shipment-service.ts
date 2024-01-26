import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { DbShipment, DbShipmentStatus, DbShipmentType } from '../types/aliases';
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

  async fetchShipmentTypes(onSuccess: (projects: DbShipmentType[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('shipment_type').select('*');
    return error ? onError(error) : onSuccess(data)
  }

  async fetchShipmentStatuses(onSuccess: (projects: DbShipmentStatus[]) => void, onError: (error: PostgrestError) => void) {
    const { data, error } = await this.supabase.from('shipment_status').select('*');
    return error ? onError(error) : onSuccess(data)
  }

  async create(shipment: DbShipment, onError: (error: PostgrestError) => void) {
    const { error } = await this.supabase.from('shipment').insert(shipment);
    if (error)
      return onError(error)
  }
}
