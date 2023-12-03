import MyEventsPage from "@/pages/Profile/MyEventsPage/MyEventsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Events | PartyApp",
};

async function getEvents() {
  const res = await fetch(`http://localhost:5000/events/getAll`, {
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

export default async function AllEvents() {
  const events = await getEvents();
  return <MyEventsPage events={events} />;
}
