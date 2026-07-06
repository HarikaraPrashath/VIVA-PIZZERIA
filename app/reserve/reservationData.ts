import type {
  BookReservationInput,
  Chair,
  FloorPlan,
  ReservationExperience,
  ReservationTable,
} from "./types";

const chair = (x: number, y: number, w = 16, h = 10, rx = 2): Chair => ({ x, y, w, h, rx });
const verticalChair = (x: number, y: number, w = 12, h = 20, rx = 2): Chair => ({ x, y, w, h, rx });

const floorPlan: FloorPlan = {
  tables: [
    { id: "W1", seats: 2, zone: "Window Bar", shape: "rect", x: 100, y: 62, w: 50, h: 38, chairs: [chair(115, 50, 18, 10), chair(115, 102, 18, 10)] },
    { id: "W2", seats: 2, zone: "Window Bar", shape: "rect", x: 210, y: 62, w: 50, h: 38, chairs: [chair(228, 50, 18, 10), chair(228, 102, 18, 10)] },
    { id: "T1", seats: 4, zone: "Main Dining", shape: "rect", x: 60, y: 160, w: 70, h: 58, chairs: [chair(75, 148), chair(100, 148), chair(75, 220), chair(100, 220)] },
    { id: "T2", seats: 4, zone: "Main Dining", shape: "rect", x: 160, y: 160, w: 70, h: 58, chairs: [chair(175, 148), chair(200, 148), chair(175, 220), chair(200, 220)] },
    { id: "T3", seats: 4, zone: "Main Dining", shape: "rect", x: 60, y: 260, w: 70, h: 58, chairs: [chair(75, 248), chair(100, 248), chair(75, 320), chair(100, 320)] },
    { id: "T4", seats: 4, zone: "Main Dining", shape: "rect", x: 160, y: 260, w: 70, h: 58, chairs: [chair(175, 248), chair(200, 248), chair(175, 320), chair(200, 320)] },
    { id: "T5", seats: 8, zone: "Center", shape: "circle", cx: 133, cy: 399, r: 55, chairs: [] },
    { id: "T6", seats: 6, zone: "Center", shape: "rect", x: 304, y: 330, w: 54, h: 110, chairs: [verticalChair(285, 338), verticalChair(285, 364), verticalChair(285, 390), verticalChair(324, 305), verticalChair(324, 445), verticalChair(285, 417)] },
    { id: "T10", seats: 2, zone: "Center", shape: "rect", x: 400, y: 350, w: 68, h: 68, chairs: [chair(425, 335), chair(425, 423)] },
    { id: "T7", seats: 2, zone: "Side Left", shape: "rect", x: 54, y: 470, w: 64, h: 44, chairs: [verticalChair(40, 480), verticalChair(120, 480)] },
    { id: "T8", seats: 2, zone: "Side Left", shape: "rect", x: 54, y: 536, w: 64, h: 44, chairs: [verticalChair(40, 545), verticalChair(120, 545)] },
    { id: "T9", seats: 2, zone: "Side Left", shape: "rect", x: 54, y: 594, w: 64, h: 44, chairs: [verticalChair(40, 605), verticalChair(120, 605)] },
    { id: "T11", seats: 4, zone: "Right Wing", shape: "rect", x: 485, y: 340, w: 55, h: 46, chairs: [chair(472, 348, 10), chair(472, 368, 10), chair(500, 388, 10), chair(515, 388, 10)] },
    { id: "T12", seats: 4, zone: "Right Wing", shape: "rect", x: 485, y: 400, w: 55, h: 46, chairs: [chair(472, 404, 10), chair(472, 424, 10), chair(500, 325, 10), chair(515, 325, 10)] },
    { id: "T14", seats: 2, zone: "Right Wing", shape: "rect", x: 475, y: 472, w: 60, h: 46, chairs: [chair(495, 457), chair(495, 521)] },
    { id: "T16", seats: 4, zone: "Right Wing", shape: "rect", x: 468, y: 546, w: 71, h: 56, chairs: [chair(482, 534), chair(510, 534), chair(482, 604), chair(510, 604)] },
    { id: "T18", seats: 4, zone: "Right Wing", shape: "rect", x: 468, y: 632, w: 80, h: 56, chairs: [chair(482, 620), chair(510, 620), chair(482, 690), chair(510, 690)] },
    { id: "T20", seats: 4, zone: "Right Wing", shape: "rect", x: 468, y: 714, w: 80, h: 30, chairs: [chair(503, 702, 14), chair(525, 702, 14), chair(482, 702, 14), verticalChair(455, 724, 10, 16)] },
    { id: "T15", seats: 6, zone: "Back Center", shape: "rect", x: 284, y: 482, w: 90, h: 52, chairs: [chair(296, 470), chair(318, 470), chair(342, 470), chair(296, 536), chair(318, 536), chair(340, 536)] },
    { id: "T17", seats: 6, zone: "Back Center", shape: "rect", x: 284, y: 560, w: 90, h: 52, chairs: [chair(296, 548), chair(318, 548), chair(340, 548), chair(296, 614), chair(318, 614), chair(340, 614)] },
    { id: "T19", seats: 6, zone: "Back Center", shape: "rect", x: 284, y: 638, w: 100, h: 48, chairs: [chair(296, 626), chair(318, 626), chair(340, 626), chair(362, 627), chair(388, 668), chair(388, 648)] },
  ],
};

const initialTables: ReservationTable[] = floorPlan.tables.map((table) => ({
  id: table.id,
  name: "",
  status: "vacant",
  seats: table.seats,
  shape: table.shape,
}));

const timeSlots = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

let reservationTables = initialTables.map((table) => ({ ...table }));

function buildReservationExperience(): ReservationExperience {
  return {
    tables: reservationTables.map((table) => ({ ...table })),
    floorPlan,
    timeSlots,
  };
}

export async function getReservationExperience() {
  return buildReservationExperience();
}

export async function bookReservation(input: BookReservationInput) {
  const tableIndex = reservationTables.findIndex((table) => table.id === input.tableId);

  if (tableIndex === -1) {
    throw new Error("Table not found");
  }

  if (reservationTables[tableIndex].status !== "vacant") {
    throw new Error("Table is not available");
  }

  reservationTables = reservationTables.map((table, index) =>
    index === tableIndex
      ? {
          ...table,
          status: "reserved",
          name: input.name.trim(),
          phone: input.phone.trim(),
          time: input.time,
        }
      : table
  );

  return buildReservationExperience();
}
