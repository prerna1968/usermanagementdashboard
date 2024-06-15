import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import { AppRoutes } from './constants/enum';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
        <Route path={AppRoutes.SIGNUP} element={<SignUp />} />
        <Route path={AppRoutes.HOME} element={<SignIn />} />
        <Route
          path={AppRoutes.DASHBOARD}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
