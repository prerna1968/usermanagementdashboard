import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { AppRoutes } from "../constants/enum";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.SIGNIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
