import { NextResponse } from "next/server";
import { bookReservation, getReservationExperience } from "@/app/reserve/reservationData";
import type { BookReservationInput } from "@/app/reserve/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const reservationExperience = await getReservationExperience();

  return NextResponse.json(reservationExperience);
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null) as Partial<BookReservationInput> | null;

  if (!payload?.tableId || !payload.name?.trim() || !payload.phone?.trim() || !payload.time) {
    return NextResponse.json({ message: "Missing reservation details" }, { status: 400 });
  }

  try {
    const reservationExperience = await bookReservation({
      tableId: payload.tableId,
      name: payload.name,
      phone: payload.phone,
      time: payload.time,
    });

    return NextResponse.json(reservationExperience);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to book reservation";
    const status = message === "Table is not available" ? 409 : 400;

    return NextResponse.json({ message }, { status });
  }
}
