import React from "react";
import {
  FaDribbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 id="logo" className="w-full text-3xl font-medium text-white">
          LASER
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          lectus quam id leo. Turpis in eu mi bibendum neque.
        </p>
      </div>
    </div>
  );
};

export default Footer;
