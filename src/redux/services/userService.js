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
  tagTypes: ["User", "suggestionUsers"],
  endpoints: (builder) => ({
    userData: builder.query({
      query: (username) => `/user/user/${username}`,
      providesTags: ["User"],
    }),

    // update profile
    updateProfile: builder.mutation({
      query: (body) => {
        return {
          url: `/user/update-profile`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["User"],
    }),

    // update profile picture
    updateProfilePicture: builder.mutation({
      query: (body) => {
        return {
          url: `/user/upload-profile-picture`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["User"],
    }),

    // suggestion users
    suggestionUsers: builder.query({
      query: () => `/user/suggested`,
      providesTags: ["suggestionUsers"],
    }),

    // Follow a user by id
    follow: builder.mutation({
      query: (id) => {
        return {
          url: `/user/follow/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["User", "suggestionUsers"],
    }),
    // Follow a user by id
    unfollow: builder.mutation({
      query: (id) => {
        return {
          url: `/user/unfollow/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["User", "suggestionUsers"],
    }),
  }),
});

export const {
  useUserDataQuery,
  useUpdateProfileMutation,
  useUpdateProfilePictureMutation,
  useSuggestionUsersQuery,
  useFollowMutation,
  useUnfollowMutation,
} = userApi;
