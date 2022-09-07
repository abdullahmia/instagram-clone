// Auth routes
import Login from "../views/pages/auth/Login";
import PasswordReset from "../views/pages/auth/PasswordReset";
import ResetPasswordSet from "../views/pages/auth/ResetPasswordSet";
import Signup from "../views/pages/auth/Signup";

// authenticated routes
import Feed from "../views/pages/feed/Feed";
import Post from "../views/pages/feed/Post";
import Profile from "../views/pages/profile/Profile";

// Acounts routes
import Edit from "../views/pages/accounts/Edit";
import PasswordChange from "../views/pages/auth/PasswordChange";

export const routes = [
  {
    path: "/",
    element: Feed,
    role: ["user"],
  },
  {
    path: "/p/:id",
    element: Post,
    role: ["user"],
  },
  {
    path: "/:username",
    element: Profile,
    role: ["user"],
  },
  {
    path: "/account",
    role: ["user"],
    children: [
      {
        path: "edit",
        element: Edit,
      },
      {
        path: "password",
        element: PasswordChange,
      },
    ],
  },
  {
    path: "/login",
    element: Login,
    role: ["*"],
  },
  {
    path: "/signup",
    element: Signup,
    role: ["*"],
  },
  {
    path: "/password-reset",
    element: PasswordReset,
    role: ["*"],
  },
  {
    path: "/reset-password/:user/:token",
    element: ResetPasswordSet,
    role: ["*"],
  },
];
