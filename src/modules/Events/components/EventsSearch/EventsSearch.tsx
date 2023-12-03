"use client";
import { FC, FormEventHandler, useState } from "react";
import { mutate } from "swr";
import { getEventsBySearch } from "../../core/services/events.service";
import { InputText } from "primereact/inputtext";

export const EventsSearch: FC = () => {
  const [search, setSearch] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const events = await getEventsBySearch(search);
    mutate("events", events, false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </span>
      </form>
    </>
  );
};
