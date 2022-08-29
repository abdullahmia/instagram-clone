import "react-responsive-modal/styles.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
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

        {authRoutes.map((route, key) =>
          route.children ? (
            <Route key={key} path={route.path}>
              {route.children &&
                route.children.map((subRoute, index) => (
                  <Route
                    key={index}
                    index={true}
                    path={subRoute.path}
                    element={
                      <PrivateRoute>
                        <subRoute.element />
                      </PrivateRoute>
                    }
                  />
                ))}
            </Route>
          ) : (
            <Route
              key={key}
              path={route.path}
              element={
                <PrivateRoute>
                  <route.element />
                </PrivateRoute>
              }
            />
          )
        )}
      </Routes>
    </div>
  );
};

export default Main;
