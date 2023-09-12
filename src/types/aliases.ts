import { Database } from "../database.types";

export type DbProject = Database['public']['Tables']['project']['Row']

export type DbShipment = Database['public']['Tables']['shipment']['Row']