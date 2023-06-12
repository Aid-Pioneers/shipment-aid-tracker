export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pallet: {
        Row: {
          created_at: string
          id: string
          shipment_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          shipment_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          shipment_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      pallet_scan: {
        Row: {
          created_at: string
          id: string
          location: unknown
          pallet_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          location: unknown
          pallet_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          location?: unknown
          pallet_id?: string
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
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      shipment: {
        Row: {
          created_at: string
          id: string
          project_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          project_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipment_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "project"
            referencedColumns: ["id"]
          }
        ]
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
