import { Layout } from "@/components/Layout/Layout";
import { IEvent } from "@/core/types";
import { getAll } from "@/modules/Events/core/services/events.service";
import EventsPage from "@/pages/EventsPage/EventsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | PartyApp",
};
async function getEvents() {
  const res = await fetch("http://localhost:5000/events/getAll", {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to load events");
  }

  const data = await res.json();
  return data;
}

export default async function Events() {
  const events = await getEvents();
  return <EventsPage events={events} />;
}
