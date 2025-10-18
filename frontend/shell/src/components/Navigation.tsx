import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center space-x-4">
      <Link to="/" className="hover:text-blue-500">
        Marketplace
      </Link>
      {user && (
        <>
          <Link to="/my-requests" className="hover:text-blue-500">
            My Requests
          </Link>
          <Link to="/sourcing/new" className="hover:text-blue-500">
            New Request
          </Link>
          <Link to="/subscription" className="hover:text-blue-500">
            Subscription
          </Link>
          <Link to="/profile" className="hover:text-blue-500">
            Profile
          </Link>
          <button onClick={logout} className="hover:text-blue-500">
            Logout
          </button>
        </>
      )}
      {!user && (
        <>
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;