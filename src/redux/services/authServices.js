import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: content,
        };
      },
    }),

    // create a user by admin
    registerUser: builder.mutation({
      query: (content) => {
        return {
          url: `/auth/register`,
          method: "POST",
          body: content,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
