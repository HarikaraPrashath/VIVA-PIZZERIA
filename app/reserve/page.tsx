import type { Metadata } from "next";
import ReserveClient from "./ReserveClient";

export const metadata: Metadata = {
  title: "Reserve a Table | Viva Pizzeria",
};

export default function ReservePage() {
  return <ReserveClient />;
}