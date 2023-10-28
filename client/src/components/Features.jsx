import React, { useState } from "react";
import Typed from "react-typed";
// import Laptop from "../assets/laptop.jpg";
// import Student from "../assets/student.mp4";
// import PC from "../assets/pc.png";
import DESK from "../assets/desk.png";
import CHAIR from "../assets/chair.png";
import BOOKS from "../assets/books.png";

const Features = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        {/* PICTURE#1 */}

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={BOOKS} alt="/" />

          <div className="flex flex-col justify-center">
            <p className="text-[#83bdfd] font-bold">
              Automatic Lecture Transcription
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Effortless Transcription
            </h1>
            <p>
              Easily convert spoken words into written text with our automatic
              lecture transcription feature. Simply upload your lecture audio or
              video files, and our advanced speech recognition technology will
              transcribe the entire lecture for you. Say goodbye to manual
              note-taking and hello to accurate, time-saving transcriptions.
            </p>
            <button className="bg-[#83bdfd] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
              Get started
            </button>
          </div>
        </div>

        {/* PICTURE#2 */}

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={DESK} alt="/" />

          <div className="flex flex-col justify-center">
            <p className="text-[#83bdfd] font-bold">Feature #2</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Effortless Transcription
            </h1>
            <p>
              Easily convert spoken words into written text with our automatic
              lecture transcription feature. Simply upload your lecture audio or
              video files, and our advanced speech recognition technology will
              transcribe the entire lecture for you. Say goodbye to manual
              note-taking and hello to accurate, time-saving transcriptions.
            </p>
            <button className="bg-[#83bdfd] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
              Get started
            </button>
          </div>
        </div>

        {/* PICTURE#3 */}

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={CHAIR} alt="/" />

          <div className="flex flex-col justify-center">
            <p className="text-[#83bdfd] font-bold">Feature #3</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Effortless Transcription
            </h1>
            <p>
              Easily convert spoken words into written text with our automatic
              lecture transcription feature. Simply upload your lecture audio or
              video files, and our advanced speech recognition technology will
              transcribe the entire lecture for you. Say goodbye to manual
              note-taking and hello to accurate, time-saving transcriptions.
            </p>
            <button className="bg-[#83bdfd] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
