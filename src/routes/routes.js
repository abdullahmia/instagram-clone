// Auth routes
import Login from "../views/pages/auth/Login";
import PasswordReset from "../views/pages/auth/PasswordReset";
import Signup from "../views/pages/auth/Signup";

// authenticated routes
import Feed from "../views/pages/feed/Feed";
import Profile from "../views/pages/Profile";

export const routes = [
  {
    path: "/",
    element: Feed,
    role: ["user"],
  },
  {
    path: "/:username",
    element: Profile,
    role: ["user"],
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
];
