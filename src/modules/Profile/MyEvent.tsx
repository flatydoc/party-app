import { FC } from "react";
import { IEventProps } from "./core/types";
import Link from "next/link";
import { routes } from "@/core/configs/variables";

export const MyEvent: FC<IEventProps> = ({ event }) => {
  return (
    <>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <p>{event.category.name}</p>
      <Link href={`${routes.MY_EVENTS}/${event.id}/edit`}>edit</Link>
    </>
  );
};
