import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEvent } from "@/core/types";
import { config } from "@/core/configs/config";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.baseURL }),
  endpoints: (builder) => ({
    addEvent: builder.mutation<IEvent, Partial<IEvent>>({
      query: (data) => ({
        url: "/events/add",
        method: "POST",
        body: data,
      }),
    }),
    editEvent: builder.mutation<IEvent, Partial<IEvent>>({
      query: (data) => ({
        url: "/events/edit",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useAddEventMutation, useEditEventMutation } = eventsApi;
