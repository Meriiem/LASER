import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 id="logo" className="w-full text-3xl text-[#00df9a]">
        LASER
      </h1>

      <ul className="flex justify-between text-white">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
