import { FC } from "react";
import { IEvent } from "@/core/types";
import { IEventsProps } from "./core/types";
import { MyEventListItem } from "./components/MyEventListItem/MyEventListItem";

export const MyEventsList: FC<IEventsProps> = ({ events }) => {
  return (
    <>
      <p> my events</p>
      {events.map((event: IEvent) => (
        <MyEventListItem key={event.id} event={event} />
      ))}
    </>
  );
};
