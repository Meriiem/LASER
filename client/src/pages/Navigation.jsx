import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navigation">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <NavLink className="navbar-brand" to="/">
          <h1 id="logo" className="w-full text-3xl font-medium text-white">
            LASER
          </h1>
        </NavLink>

        <ul className="hidden md:flex">
          <NavLink className="nav-link" to="/">
            <li className="p-4">Home</li>
            <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-link" to="/upload">
            <li className="p-4">Upload</li>
          </NavLink>

          <NavLink className="nav-link" to="/about">
            <li className="p-4">About</li>
          </NavLink>

          <NavLink className="nav-link" to="/account">
            <li className="p-4">Account</li>
          </NavLink>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <NavLink className="navbar-brand" to="/">
            <h1 id="logo" className="w-full text-3xl text-[#83bdfd]">
              LASER
            </h1>
          </NavLink>

          <ul className="uppercase p-4">
            <NavLink className="nav-link" to="/">
              <li className="p-4 border-b border-gray-600">Home</li>
              <span className="sr-only">(current)</span>
            </NavLink>

            <NavLink className="nav-link" to="/upload">
              <li className="p-4 border-b border-gray-600">Upload</li>
            </NavLink>

            <NavLink className="nav-link" to="/about">
              <li className="p-4 border-b border-gray-600">About</li>
            </NavLink>

            <NavLink className="nav-link" to="/blog">
              <li className="p-4 border-b border-gray-600">Account</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
