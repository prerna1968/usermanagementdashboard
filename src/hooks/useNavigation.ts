// src/hooks/useNavigation.ts
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = () => {
      navigate(window.location.pathname);
      window.history.pushState(null, '', window.location.href);
    };
    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [navigate]);

  return navigate;
};

export default useNavigation;
