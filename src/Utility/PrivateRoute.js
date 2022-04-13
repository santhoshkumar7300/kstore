import { Navigate } from "react-router-dom";
import { getCookie } from "./Utility";

export const AuthPrivateRoute = ({ children }) => {
  const { userlog } = JSON.parse(getCookie("userlog"));

  //   if (userlog) {
  //     if (userlog?.user_type === 2) return <Navigate to="/home" />;
  //     else return <Navigate to="/admin/" />;
  //   }

  if (userlog === null) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export const StorePrivateRoute = ({ children }) => {
  const { userlog } = JSON.parse(getCookie("userlog"));

  if (userlog !== null) {
    return <Navigate to="/store" />;
  }

  return children;
};
