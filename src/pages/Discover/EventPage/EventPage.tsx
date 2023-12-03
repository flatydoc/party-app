import { Layout } from "@/components/Layout/Layout";
import { Event } from "@/modules/Events/Event";
import { IEventProps } from "@/modules/Profile/core/types";
import { NextPage } from "next";

const EventPage: NextPage<IEventProps> = ({ event }) => {
  return <Event event={event} />;
};

export default EventPage;
