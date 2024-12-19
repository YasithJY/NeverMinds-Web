import React from "react";

const Hero = () => {
  return (
    <section className="bg-yellow-50 py-12 px-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800">Play & Learn</h1>
      <p className="mt-4 text-lg text-gray-600">
        Access quizzes anytime, anywhere, and start learning in a fun and interactive way!
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg transition">
        Explore Our Quizzes
      </button>
    </section>
  );
};

export default Hero;
