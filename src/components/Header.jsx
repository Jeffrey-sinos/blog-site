import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Title */}
      <div className="text-center py-4 bg-white">
        <h1 className="font-poppins font-bold text-4xl text-black">
          Magazine Blog
        </h1>
      </div>

      {/* Header Navigation */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-center gap-4">
          <Link to="/" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Home
          </Link>
          <Link to="/latest-stories" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Latest Stories
          </Link>
          <Link to="/staff-picks" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            Staff Picks
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;