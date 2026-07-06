export type TableStatus = "vacant" | "occupied" | "reserved";

export interface ReservationTable {
  id: string;
  name: string;
  status: TableStatus;
  seats: number;
  shape: string;
  time?: string;
  phone?: string;
}

export interface Chair {
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
}

export interface FloorTableDefinition {
  id: string;
  seats: number;
  zone: string;
  shape: "rect" | "circle";
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  cx?: number;
  cy?: number;
  r?: number;
  chairs: Chair[];
}

export interface FloorPlan {
  tables: FloorTableDefinition[];
}

export interface ReservationExperience {
  tables: ReservationTable[];
  floorPlan: FloorPlan;
  timeSlots: string[];
}

export interface BookReservationInput {
  tableId: string;
  name: string;
  phone: string;
  time: string;
}
