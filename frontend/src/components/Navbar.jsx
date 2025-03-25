import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Ref to detect clicks outside dropdown
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative bg-white shadow-md px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="w-44 cursor-pointer"
          src={assets.logo}
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <NavLink to="/" className="hover:text-purple-600">Home</NavLink>
          <NavLink to="/doctors" className="hover:text-purple-600">All Doctors</NavLink>
          <NavLink to="/about" className="hover:text-purple-600">About</NavLink>
          <NavLink to="/contact" className="hover:text-purple-600">Contact</NavLink>
        </ul>

        {/* Right Section (Profile or Signup Button) */}
        <div className="flex items-center gap-4">
          {token ? (
            <div ref={dropdownRef} className="relative">
              {/* Profile Icon (Click to Toggle Dropdown) */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img className="w-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 px-4 w-48 text-gray-700 z-40">
                  <p onClick={() => { navigate("/my-profile"); setShowDropdown(false); }} className="hover:text-orange-600 cursor-pointer">
                    My Profile
                  </p>
                  <p onClick={() => { navigate("/my-appointments"); setShowDropdown(false); }} className="hover:text-orange-600 cursor-pointer">
                    My Appointments
                  </p>
                  <p onClick={() => { setToken(false); setShowDropdown(false); }} className="hover:text-orange-600 cursor-pointer">
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-light hidden md:block"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Button */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt="Menu"
          />
        </div>
      </div>

      {/* Dark Overlay (Clicking outside closes the menu) */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={assets.logo} alt="Logo" className="w-20" />
          <img
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-4 p-6 text-lg text-gray-700">
          <NavLink to="/" className="hover:text-blue-500" onClick={() => setShowMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/doctors" className="hover:text-blue-500" onClick={() => setShowMenu(false)}>
            All Doctors
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500" onClick={() => setShowMenu(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500" onClick={() => setShowMenu(false)}>
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
