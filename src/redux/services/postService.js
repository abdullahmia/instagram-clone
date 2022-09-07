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
  tagTypes: ["posts"],
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
      invalidatesTags: ["posts"],
    }),

    // get posts
    getPosts: builder.query({
      query: () => "/post",
      providesTags: ["posts"],
    }),

    // like a post
    likePost: builder.mutation({
      query: (id) => {
        return {
          url: `/post/like/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["posts"],
    }),

    // unlike a post
    unlikePost: builder.mutation({
      query: (id) => {
        return {
          url: `/post/unlike/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useGetPostsQuery,
  useLikePostMutation,
  useUnlikePostMutation,
} = postApi;
