import { Layout } from "@/components/Layout/Layout";
import { EditEvent } from "@/modules/Profile/EditEvent";

import { IEventProps } from "@/modules/Profile/core/types";

import { NextPage } from "next";

const EditEventPage: NextPage<IEventProps> = ({ event }) => {
  return <EditEvent event={event} />;
};

export default EditEventPage;
