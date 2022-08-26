import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
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

    // password change
    passwordChange: builder.mutation({
      query: (body) => {
        return {
          url: `/auth/change-password`,
          method: "PATCH",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  usePasswordChangeMutation,
} = authApi;
