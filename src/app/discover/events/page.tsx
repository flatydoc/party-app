import EventsPage from "@/pages/Discover/EventsPage/EventsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Events | PartyApp",
};

export default function AllEvents() {
  return <EventsPage />;
}
