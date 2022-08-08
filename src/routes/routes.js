// Auth routes
import Login from "../views/pages/auth/Login";
import PasswordReset from "../views/pages/auth/PasswordReset";
import Signup from "../views/pages/auth/Signup";

export const routes = [
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
