import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes("*"));
  const authRoutes = routes.filter((route) => route.role.includes("user"));
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={<route.element />} />
        ))}
        {authRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
