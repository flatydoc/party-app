"use client";
import { FC } from "react";
import { IEvent } from "@/core/types";
import { EventListItem } from "./components/EventListItem/EventListItem";
import useSWR from "swr";
import { getAllEvents } from "./core/services/events.service";
import { Skeleton } from "primereact/skeleton";

export const EventsList: FC = () => {
  const { data: events, isLoading } = useSWR("events", getAllEvents);

  if (isLoading) {
    return (
      <div>
        <p>Loading</p>
        <Skeleton width="10rem" className="mb-2"></Skeleton>
      </div>
    );
  }

  if (!events || events.length === 0) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <p>We can\'t find projects that match your search</p>;
  }

  return (
    <>
      {events.map((event: IEvent) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};
