import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const userToken = JSON.parse(localStorage.getItem("user"));
  if (userToken) {
    const user = { token: true };
    return user && user.token;
  } else {
    const user = { token: false };
    return user && user.token;
  }
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
