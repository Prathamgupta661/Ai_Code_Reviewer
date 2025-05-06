import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication state
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('loggeduser');
    localStorage.removeItem('userimg')
    // Redirect to login page
    navigate('/login');
  }, [setLoggedIn, navigate]);

  return null;
};

export default Logout;