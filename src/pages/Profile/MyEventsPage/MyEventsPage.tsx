import { Layout } from "@/components/Layout/Layout";
import { NextPage } from "next";
import { IEventsProps } from "@/modules/Profile/core/types";
import { MyEventsList } from "@/modules/Profile/MyEventsList";

const MyEventsPage: NextPage<IEventsProps> = ({ events }) => {
  return <MyEventsList events={events} />;
};

export default MyEventsPage;
