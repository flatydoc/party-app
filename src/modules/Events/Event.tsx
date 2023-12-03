import { FC } from "react";

import { IEventProps } from "../Profile/core/types";

export const Event: FC<IEventProps> = ({ event }) => {
  return (
    <>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <p>{event.category.name}</p>
    </>
  );
};
