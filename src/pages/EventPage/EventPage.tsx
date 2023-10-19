import { Layout } from "@/components/Layout/Layout";
import { IEvent } from "@/core/types";

import { FC } from "react";

interface EventPageProps {
  event: IEvent;
}

const EventPage: FC<EventPageProps> = ({ event }) => {
  return (
    <Layout>
      <div>{event.title}</div>
    </Layout>
  );
};

export default EventPage;
