import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
      <div>
        <h1 id="logo" className="w-full text-3xl font-medium text-white">
          LASER
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
          lectus quam id leo. Turpis in eu mi bibendum neque.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>

        <p className="justify-center ">
          Copyright © 2023 Senior Team. All Rights Reserved.
        </p>
      </div>
      {/* <div className="lg:col-span-3 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2">Analytics</li>
            <li className="py-2">Marketing</li>
            <li className="py-2">Commerce</li>
            <li className="py-2">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2">Pricing</li>
            <li className="py-2">Documentation</li>
            <li className="py-2">Guides</li>
            <li className="py-2">API Status</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
