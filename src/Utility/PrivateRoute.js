import { getCookie } from "./Utility";

export const AuthPrivateRoute = () => {
  const { userlog } = JSON.parse(getCookie("userlog"));

  //   if (userlog) {
  //     if (userlog?.user_type === 2) return <Navigate to="/home" />;
  //     else return <Navigate to="/admin/" />;
  //   }

  return children;
};
