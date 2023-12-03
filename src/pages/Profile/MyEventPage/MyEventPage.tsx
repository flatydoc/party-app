import { Layout } from "@/components/Layout/Layout";
import { MyEvent } from "@/modules/Profile/MyEvent";
import { IEventProps } from "@/modules/Profile/core/types";
import { NextPage } from "next";

const MyEventPage: NextPage<IEventProps> = ({ event }) => {
  return <MyEvent event={event} />;
};

export default MyEventPage;
