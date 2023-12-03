import { Layout } from "@/components/Layout/Layout";

import { EventsList } from "@/modules/Events/EventsList";
import { EventsSearch } from "@/modules/Events/components/EventsSearch/EventsSearch";
import { NextPage } from "next";

const EventsPage: NextPage = () => {
  return (
    <>
      <EventsSearch />
      <EventsList />
    </>
  );
};

export default EventsPage;
