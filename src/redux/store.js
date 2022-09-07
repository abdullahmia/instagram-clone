import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./services/authServices";
import { postApi } from "./services/postService";
import { userApi } from "./services/userService";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(postApi.middleware),
});
