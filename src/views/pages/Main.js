import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes("*"));
  console.log(publicRoutes);
  return (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
