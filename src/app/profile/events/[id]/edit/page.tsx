import EditEventPage from "@/pages/Profile/EditEventPage/EditEventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit your event | PartyApp",
};

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

export default async function EditEvent({ params: { id } }: Props) {
  const event = await getEvent(id);

  return <EditEventPage event={event} />;
}
