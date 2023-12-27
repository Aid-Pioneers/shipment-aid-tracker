import { Database } from "./database.types";

export type DbCountry = Database['public']['Tables']['country']['Row']

export type DbProject = Database['public']['Tables']['project']['Row']

export type DbShipment = Database['public']['Tables']['shipment']['Row']

export type DbShipmentType = Database['public']['Tables']['shipment_type']['Row']

export type DbConsignee = Database['public']['Tables']['consignee_partner']['Row']