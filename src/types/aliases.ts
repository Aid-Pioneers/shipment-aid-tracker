import { Database } from "./database.types";
// TODO reformat these aliases to supabases' table type shorthand
export type DbCountry = Database["public"]["Tables"]["country"]["Row"];

export type DbProject = Database["public"]["Tables"]["project"]["Row"];

export type DbShipment = Database["public"]["Tables"]["shipment"]["Row"];

export type DbShipmentType =
  Database["public"]["Tables"]["shipment_type"]["Row"];

export type DbShipmentStatus =
  Database["public"]["Tables"]["shipment_status"]["Row"];

export type DbConsignee =
  Database["public"]["Tables"]["consignee_partner"]["Row"];

export type DbDonor = Database["public"]["Tables"]["donor"]["Row"];

export type DbProfile = Database["public"]["Tables"]["profile"]["Row"];
