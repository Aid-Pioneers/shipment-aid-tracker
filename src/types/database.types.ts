export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      consignee_partner: {
        Row: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      country: {
        Row: {
          code: string
          id: number
          name: string
        }
        Insert: {
          code: string
          id?: number
          name: string
        }
        Update: {
          code?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      donor: {
        Row: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      pallet: {
        Row: {
          created_at: string
          id: number
          shipment_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          shipment_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          shipment_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pallet_shipment_id_fkey"
            columns: ["shipment_id"]
            referencedRelation: "shipment"
            referencedColumns: ["id"]
          }
        ]
      }
      pallet_scan: {
        Row: {
          created_at: string
          id: number
          location: unknown
          pallet_id: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          location: unknown
          pallet_id?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          location?: unknown
          pallet_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pallet_scan_pallet_id_fkey"
            columns: ["pallet_id"]
            referencedRelation: "pallet"
            referencedColumns: ["id"]
          }
        ]
      }
      project: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      shipment: {
        Row: {
          bookkeeping_flexport: boolean | null
          bookkeeping_gik: boolean | null
          commercial_invoice_link: string | null
          consignee_id: number | null
          created_at: string
          destination_id: number
          donor_id: number | null
          drive_link: string | null
          estimated_delivery_date: string | null
          flexport_tracking_id: string | null
          freight_tracking_id: string | null
          gik_value_amount_usd: number | null
          id: number
          impact_reporting: boolean | null
          logistics_expense_donation_usd: number | null
          main_shipment_type_id: number | null
          patients_treated: number | null
          project_id: number | null
          status_id: number
          updated_at: string
          weight_kg: number | null
        }
        Insert: {
          bookkeeping_flexport?: boolean | null
          bookkeeping_gik?: boolean | null
          commercial_invoice_link?: string | null
          consignee_id?: number | null
          created_at?: string
          destination_id: number
          donor_id?: number | null
          drive_link?: string | null
          estimated_delivery_date?: string | null
          flexport_tracking_id?: string | null
          freight_tracking_id?: string | null
          gik_value_amount_usd?: number | null
          id?: number
          impact_reporting?: boolean | null
          logistics_expense_donation_usd?: number | null
          main_shipment_type_id?: number | null
          patients_treated?: number | null
          project_id?: number | null
          status_id: number
          updated_at?: string
          weight_kg?: number | null
        }
        Update: {
          bookkeeping_flexport?: boolean | null
          bookkeeping_gik?: boolean | null
          commercial_invoice_link?: string | null
          consignee_id?: number | null
          created_at?: string
          destination_id?: number
          donor_id?: number | null
          drive_link?: string | null
          estimated_delivery_date?: string | null
          flexport_tracking_id?: string | null
          freight_tracking_id?: string | null
          gik_value_amount_usd?: number | null
          id?: number
          impact_reporting?: boolean | null
          logistics_expense_donation_usd?: number | null
          main_shipment_type_id?: number | null
          patients_treated?: number | null
          project_id?: number | null
          status_id?: number
          updated_at?: string
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_consignee_id_fkey"
            columns: ["consignee_id"]
            referencedRelation: "consignee_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_destination_id_fkey"
            columns: ["destination_id"]
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_donor_id_fkey"
            columns: ["donor_id"]
            referencedRelation: "donor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_main_shipment_type_id_fkey"
            columns: ["main_shipment_type_id"]
            referencedRelation: "shipment_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "shipment_status"
            referencedColumns: ["id"]
          }
        ]
      }
      shipment_status: {
        Row: {
          id: number
          status: string
        }
        Insert: {
          id?: number
          status: string
        }
        Update: {
          id?: number
          status?: string
        }
        Relationships: []
      }
      shipment_type: {
        Row: {
          id: number
          shipment_type: string
        }
        Insert: {
          id?: number
          shipment_type: string
        }
        Update: {
          id?: number
          shipment_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

