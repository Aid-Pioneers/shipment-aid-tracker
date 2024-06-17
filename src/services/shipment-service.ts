import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

export class ShipmentService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  // country:origin_id ( code, name ),
  // country:destination_id ( code, name ),
  async fetchShipments() {
    return this.supabase.from("shipment").select(`*,
      consignee_partner ( name ),
      donor ( id, name ),
      shipment_type ( id, shipment_type ),
      shipment_status ( status ),
      profile ( first_name, last_name, email ),
      country1:origin_id ( code, name ),
      country2:destination_id ( code, name )
      `);
  }

  async fetchShipment(
    shipmentId: Database["public"]["Tables"]["shipment"]["Row"]["id"],
  ) {
    return this.supabase.from("shipment").select(`
      *,
      consignee_partner ( name ),
      donor ( id, name ),
      shipment_type ( id, shipment_type ),
      shipment_status ( status ),
      profile ( first_name, last_name, email ),
      country1:origin_id ( code, name ),
      country2:destination_id ( code, name )
      `).eq(
      "id",
      shipmentId,
    ).single();
  }

  async fetchShipmentTypes() {
    return this.supabase.from("shipment_type").select("*");
  }

  async fetchShipmentStatuses() {
    return this.supabase.from("shipment_status").select("*");
  }

  async update(
    shipment: Database["public"]["Tables"]["shipment"]["Update"],
  ) {
    this.supabase.from("shipment").update(shipment);
  }

  async create(
    shipment: Database["public"]["Tables"]["shipment"]["Insert"],
  ) {
    return this.supabase.from("shipment").insert(
      shipment,
    ).select("id").single();
  }
}
