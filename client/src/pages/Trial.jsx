import React, { useState } from "react";
import { motion } from "framer-motion";
import "/Trial.css";
import DESK from "../assets/desk.png";
import CHAIR from "../assets/chair.png";
import BOOKS from "../assets/books.png";

const Trial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      title: "Feature#1",
      image: BOOKS,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Feature#2",
      image: CHAIR,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      title: "Feature#3",
      image: DESK,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add more features as needed
  ];

  return (
    <div className="trial">
      <div className="bg-white py-16 px-4">
        <div className="max-w-[600px] mx-auto flex items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout
              onClick={() => setIsOpen(!isOpen)}
              className="card"
              style={{
                flex: "1", // Equal distribution
                margin: "1rem", // Add spacing between cards
                borderRadius: "1rem",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <motion.h2 layout="position">{feature.title}</motion.h2>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="expand"
                >
                  <img
                    className="w-[300px] mx-auto my-4"
                    src={feature.image}
                    alt="/"
                  />
                  <p>{feature.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trial;
