import { Layout } from "@/components/Layout/Layout";

import { EventsList } from "@/modules/Events/EventsList";
import { NextPage } from "next";

const CurrentEventsPage: NextPage = () => {
  return <EventsList />;
};

export default CurrentEventsPage;
