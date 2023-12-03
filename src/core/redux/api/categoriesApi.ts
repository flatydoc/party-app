import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "@/core/configs/config";
import { ICategory } from "@/core/types";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.baseURL }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => "/categories/getAll",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
