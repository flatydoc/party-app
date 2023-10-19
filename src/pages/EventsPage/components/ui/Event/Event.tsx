import { IEvent } from "@/core/types";
import Link from "next/link";
import { FC } from "react";
import classes from "./Event.module.scss";

interface EventProps {
  event: IEvent;
}

export const Event: FC<EventProps> = ({ event }) => {
  return (
    <Link className={classes.event} href={`events/${event.id.toString()}`}>
      <h4>{event.title}</h4>
      <p>{event.text}</p>
      <p>{event.price}</p>
    </Link>
  );
};
