import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { token: true };
  return user && user.token;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;