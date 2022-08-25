import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("user"))?.token;
  return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
