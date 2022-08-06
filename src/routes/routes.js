// Auth routes
import Login from "../views/pages/auth/Login";
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
];
