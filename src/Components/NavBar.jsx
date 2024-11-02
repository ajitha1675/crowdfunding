import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a className="text-white text-xl font-bold" href="#">Navbar</a>
        <button
          className="text-white block lg:hidden"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="text-xl">&#9776;</span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4" id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            <li className="nav-item">
              <Link className="text-white hover:text-gray-400" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="text-white hover:text-gray-400" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="text-white hover:text-gray-400" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
