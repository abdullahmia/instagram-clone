import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (header) => {
      let token = JSON.parse(localStorage.getItem("user"))?.token;
      header.set("Authorization", token);
      return header;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userData: builder.query({
      query: (username) => `/user/${username}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useUserDataQuery } = userApi;
