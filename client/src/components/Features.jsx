import React, { useState } from "react";
import Typed from "react-typed";
import Laptop from "../assets/laptop.jpg";
import Student from "../assets/student.mp4";
import PC from "../assets/pc.png";

const Features = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" /> */}
        <img className="w-[500px] mx-auto my-4" src={PC} alt="/" />
        {/* <video
          className="w-[500px] mx-auto my-4"
          src={Student}
          muted
          autoPlay
          loop
        /> */}
        <div className="flex flex-col justify-center">
          <p className="text-[#83bdfd] font-bold">Features Dashboard </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Features Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            lectus quam id leo. Turpis in eu mi bibendum neque.
          </p>
          <button className="bg-[#83bdfd] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
