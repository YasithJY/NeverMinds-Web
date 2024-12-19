import React from "react";
import background from "../assets/bk1.jpg"; // Ensure the correct file extension

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-12 px-8 text-center"
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh", // Full viewport height
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Play & Learn
        </h1>
        <a
          href="/quizzes"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg transition"
          aria-label="Explore our quizzes"
        >
          Explore Our Quizzes
        </a>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Access quizzes anytime, anywhere, and start learning in a fun and interactive way!
        </p>
      </div>
    </section>
  );
};

export default Hero;
