import AddEventPage from "@/pages/Profile/AddEventPage/AddEventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New event | PartyApp",
};

export default function AddEvent() {
  return <AddEventPage />;
}
