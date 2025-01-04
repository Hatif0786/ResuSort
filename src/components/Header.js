import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated, clearAuthCookies } from '../utils/cookieUtils';
import './Header.css';
import '../styles/Skeleton.css';
import PropTypes from 'prop-types';

export default function Header({ isLoading }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(isAuthenticated());
    };

    const intervalId = setInterval(checkLoginStatus, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    clearAuthCookies();
    setIsLoggedIn(false);
    navigate('/login');
  };

  if (isLoading) {
    return (
      <header className="header">
        <div className="header-content">
          <div className="skeleton skeleton-text" style={{ width: '120px' }}></div>
          <nav>
            <div className="skeleton skeleton-button"></div>
          </nav>
        </div>
      </header>
    );
  }

  // Don't show header on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/resu_sort_logo.png" alt="ResuSort Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {isLoggedIn ? (
              <>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li>
                  <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoading: PropTypes.bool
};

Header.defaultProps = {
  isLoading: false
};

