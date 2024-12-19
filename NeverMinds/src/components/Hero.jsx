import React, { useState } from "react";
import background from "../assets/bk1.jpg"; // Replace with your image path

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage: `url(${background})`, // Background image
      }}
    >
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-8 bg-black bg-opacity-20 text-center">
        <a
          href="/quizzes"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg transition"
          aria-label="Explore our quizzes"
        >
          Explore Our Quizzes
        </a>
        <p className="mt-4 text-lg sm:text-xl">
          Access quizzes anytime, anywhere, and start learning in a fun and interactive way!
        </p>
      </div>
    </section>
  );
};

export default Hero;
