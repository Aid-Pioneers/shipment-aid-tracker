import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { DbShipment, DbShipmentStatus, DbShipmentType } from "../types/aliases";
import { Database, Tables } from "../types/database.types";

export class ShipmentService {
  supabase: SupabaseClient<Database>;

  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase;
  }

  async fetchShipments(
    onSuccess: (projects: DbShipment[]) => void,
    onError: (error: PostgrestError) => void,
  ) {
    const { data, error } = await this.supabase.from("shipment").select("*");
    return error ? onError(error) : onSuccess(data);
  }

  async fetchShipmentTypes(
    onSuccess: (projects: DbShipmentType[]) => void,
    onError: (error: PostgrestError) => void,
  ) {
    const { data, error } = await this.supabase.from("shipment_type").select(
      "*",
    );
    return error ? onError(error) : onSuccess(data);
  }

  async fetchShipmentStatuses(
    onSuccess: (projects: DbShipmentStatus[]) => void,
    onError: (error: PostgrestError) => void,
  ) {
    const { data, error } = await this.supabase.from("shipment_status").select(
      "*",
    );
    return error ? onError(error) : onSuccess(data);
  }

  async create(
    shipment: Database["public"]["Tables"]["shipment"]["Insert"],
    shipmentManager: Tables<"shipment_manager">["profile_id"],
  ) {
    const insertShipment = await this.supabase.from("shipment").insert(shipment)
      .select();

    const maybeShipment = insertShipment.data?.[0];

    if (maybeShipment !== undefined) {
      const insertShipmentManager = await this.supabase.from("shipment_manager")
        .insert(
          {
            profile_id: shipmentManager,
            shipment_id: maybeShipment.id,
          },
        );

      if (insertShipmentManager.error !== null) {
        console.error(
          `Failed to create shipment manager relationship with shipment ${maybeShipment.id}`,
          insertShipmentManager.error,
        );
      }
    } else {
      console.error(
        `Failed to create shipment.`,
        insertShipment.error,
      );
    }
  }
}
