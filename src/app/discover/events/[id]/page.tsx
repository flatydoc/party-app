import EventPage from "@/pages/Discover/EventPage/EventPage";
import { Metadata } from "next";

interface Props {
  params: {
    id: number;
  };
}

async function getEvent(id: number) {
  const res = await fetch(`http://localhost:5000/events/${id}`, {
    method: "GET",
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to load event");
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const event = await getEvent(id);
  return {
    title: `${event.title} | PartyApp`,
  };
}

export default async function Event({ params: { id } }: Props) {
  const event = await getEvent(id);

  return <EventPage event={event} />;
}
