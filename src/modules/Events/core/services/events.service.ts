import { api } from "@/core/services/api.service";
import { authApi } from "@/core/services/auth.service";
import { IEvent } from "@/core/types";

export const getAll = async () => {
  const { data } = await api.get<IEvent[]>(`/events/getAll`);
  return data;
};

export const getById = async (id: number) => {
  const { data } = await api.get<IEvent>(`/events/${id}`);
  return data;
};

export const getEventsByUserId = async () => {
  const { data } = await authApi.get<IEvent[]>(`getEventsByUserId`);
  return data;
};

// export const addEvent = (data: IEvent) => {
//   return authApi.post("/events/add", data);
// };

// export const editEvent = (data: IEvent) => {
//   return authApi.put(`/events/edit`, data);
// };

// export const removeEvent = (id: number) => {
//   return authApi.delete(`/events/${id}`);
// };

// export const subscribe = (id: number) => {
//   return authApi.put(`/events/subscribe`, id);
// };
