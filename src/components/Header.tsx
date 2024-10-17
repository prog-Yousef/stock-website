import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { logout } from '../store/slices/userSlice';
import { TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <TrendingUp className="mr-2" />
          StockTracker
        </Link>
        <nav>
          {isAuthenticated ? (
            <div className="flex items-center">
              <span className="mr-4">Welcome, {username}</span>
              <button
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;