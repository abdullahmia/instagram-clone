import Login from "../views/pages/auth/Login";

export const routes = [
  {
    path: "/login",
    element: Login,
    role: ["*"],
  },
];
