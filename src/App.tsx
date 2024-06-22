import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { AppRoutes } from "./constants/enum";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {

  
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path={AppRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
