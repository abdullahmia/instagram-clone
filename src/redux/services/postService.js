import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define service using a base url and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_LINK,
    prepareHeaders: (header) => {
      let token = JSON.parse(localStorage.getItem("user"))?.token;
      header.set("Authorization", token);
      return header;
    },
  }),

  endpoints: (builder) => ({
    // new post
    addPost: builder.mutation({
      query: (body) => {
        return {
          url: "/post",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useAddPostMutation } = postApi;
