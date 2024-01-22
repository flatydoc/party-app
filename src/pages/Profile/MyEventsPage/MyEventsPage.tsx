import { NextPage } from "next";
import { IEventsProps } from "@/modules/Profile/core/types";
import { MyEventsList } from "@/modules/Profile/MyEventsList";
import Link from "next/link";
import { routes } from "@/core/configs/variables";

const MyEventsPage: NextPage<IEventsProps> = ({ events }) => {
  return (
    <>
      <Link href={routes.ADD_EVENT}>Add new</Link>
      <MyEventsList events={events} />
    </>
  );
};

export default MyEventsPage;
