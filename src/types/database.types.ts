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
            isOneToOne: false
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
            isOneToOne: false
            referencedRelation: "pallet"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_role: {
        Row: {
          profile_id: string
          role_id: number
        }
        Insert: {
          profile_id: string
          role_id: number
        }
        Update: {
          profile_id?: string
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "profile_role_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_role_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "role"
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
      role: {
        Row: {
          created_at: string
          id: number
          role: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          role?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          role?: string | null
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
          origin_id: number
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
          origin_id: number
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
          origin_id?: number
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
            isOneToOne: false
            referencedRelation: "consignee_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_destination_id_fkey"
            columns: ["destination_id"]
            isOneToOne: false
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_donor_id_fkey"
            columns: ["donor_id"]
            isOneToOne: false
            referencedRelation: "donor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_main_shipment_type_id_fkey"
            columns: ["main_shipment_type_id"]
            isOneToOne: false
            referencedRelation: "shipment_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_origin_id_fkey"
            columns: ["origin_id"]
            isOneToOne: false
            referencedRelation: "country"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "shipment_status"
            referencedColumns: ["id"]
          }
        ]
      }
      shipment_manager: {
        Row: {
          profile_id: string
          shipment_id: number
        }
        Insert: {
          profile_id: string
          shipment_id: number
        }
        Update: {
          profile_id?: string
          shipment_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "shipment_manager_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_manager_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipment"
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

