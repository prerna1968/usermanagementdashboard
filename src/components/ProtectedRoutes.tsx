import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../constants/enum';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.SIGNIN}/>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
