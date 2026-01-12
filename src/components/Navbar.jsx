import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  return (
    <nav className="absolute  top-10 px-12  left-0 w-full z-10 bg-opacity-90">
      <div className="max-w-8xl border border-gray-300/30 shadow-lg mx-auto bg-transparent backdrop-blur-sm rounded-lg px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white text-2xl font-bold flex items-center"
            >
              <img src={logo} alt="Logo" className="h-14" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex text-xl items-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
            >
              <span className="text-green-400 mr-1">•</span>Home
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/pages"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
            >
              <span className="text-green-400 mr-1">•</span>Pages
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
            >
              <span className="text-green-400 mr-1">•</span>Blog
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
            >
              <span className="text-green-400 mr-1">•</span>Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <button className="bg-white bg-opacity-20 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-30 transition-all">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Grid Icon */}
            <button className="bg-white bg-opacity-20 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-30 transition-all">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
