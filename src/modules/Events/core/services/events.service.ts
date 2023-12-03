import { api } from "@/core/services";
// import { IEvent } from "@/core/types";

// export const addEvent = async (data: IEvent) => {
//   try {
//     const response = await api.post("/events/add", data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getAllEvents = async () => {
  try {
    const response = await api.get("/events/getAll");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEventsBySearch = async (search: string) => {
  try {
    const response = await api.get(`/events/getBySearch?q=${search}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
