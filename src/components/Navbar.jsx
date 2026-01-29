import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo1.png';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/price' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <nav className="absolute top-10 px-4 sm:px-12 left-0 w-full z-50 bg-opacity-90">
        <div className="max-w-8xl border border-gray-300/30 shadow-lg mx-auto bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-white text-2xl font-bold flex items-center"
              >
                <img src={logo} alt="Logo" className="h-14" />
              </Link>
            </div>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex text-xl items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium flex items-center group"
                >
                  <span className={`${location.pathname === link.path ? 'text-green-400' : 'text-transparent'} mr-1`}>•</span>
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              {/* Hamburger Menu - Mobile only */}
              <button
                onClick={toggleSidebar}
                className="md:hidden bg-white bg-opacity-20 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-30 transition-all"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-transparent backdrop-blur-2xl bg-black/50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">Menu</h2>
          <button
            onClick={closeSidebar}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeSidebar}
              className="text-white hover:text-gray-300 px-4 py-3 rounded-lg text-lg font-medium flex items-center justify-between hover:bg-white hover:bg-opacity-10 transition-all"
            >
              <div className="flex items-center">
                <span className={`${location.pathname === link.path ? 'w-5 h-5 bg-green-400 rounded-full' : 'w-5 h-5'} mr-3`}></span>
                {link.name}
              </div>
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4" />
              )}
            </Link>
          ))}
        </div>

        {/* Sidebar Footer removed - no icons needed */}
      </div>
    </>
  );
}