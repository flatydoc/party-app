"use client";
import { IEvent } from "@/core/types";
import Link from "next/link";
import { FC } from "react";
import classes from "./EventListItem.module.scss";
import { routes } from "@/core/configs/variables";

interface IEventProps {
  event: IEvent;
}

export const EventListItem: FC<IEventProps> = ({ event }) => {
  return (
    <Link className={classes.event} href={`${routes.EVENTS}/${event.id}`}>
      <h4>{event.title}</h4>
      <p>{event.description}</p>
    </Link>
  );
};
