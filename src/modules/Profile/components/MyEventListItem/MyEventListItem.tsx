"use client";
import { IEvent } from "@/core/types";
import Link from "next/link";
import { FC } from "react";
import classes from "./MyEventListItem.module.scss";
import { routes } from "@/core/configs/variables";

interface IEventProps {
  event: IEvent;
}

export const MyEventListItem: FC<IEventProps> = ({ event }) => {
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(`event ${event.id} deleted`);
  };

  return (
    <Link className={classes.event} href={`${routes.MY_EVENTS}/${event.id}`}>
      <h4>{event.title}</h4>
      <p>{event.description}</p>
      <button onClick={handleClick}>delete</button>
    </Link>
  );
};
