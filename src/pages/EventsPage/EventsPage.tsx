import { Layout } from "@/components/Layout/Layout";
import { IEvent } from "@/core/types";
import { Events } from "@/modules/Events/Events";
import Link from "next/link";
import { FC } from "react";
import Event from "./components/ui/Event/Event";

interface EventsPageProps {
  events: IEvent[];
}

const EventsPage: FC<EventsPageProps> = ({ events }) => {
  return (
    <Layout>
      {events.map((event: IEvent) => (
        <Event key={event.id} event={event} />
      ))}
    </Layout>
  );
};
export default EventsPage;
