import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const auth = { token: false };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};
