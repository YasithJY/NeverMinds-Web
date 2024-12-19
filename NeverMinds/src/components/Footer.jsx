import React from "react";
import background from "../assets/bk1.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-8 bg-black bg-opacity-20 text-center">
        <a
          href="/quizzes"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition"
          aria-label="Explore our quizzes"
          style={{ fontFamily: "'Kulim Park', sans-serif" }}
        >
          Explore Our Quizzes
        </a>
        <p
          className="mt-4 text-lg sm:text-xl"
          style={{ fontFamily: "'Parkin Sans', sans-serif" }}
        >
          Access quizzes anytime, anywhere, and start learning in a fun and interactive way!
        </p>
      </div>

      {/* Footer Section */}
      <footer
        className="absolute bottom-0 left-0 w-full py-4 text-center text-black"
        style={{
          backgroundColor: "#FFD448",
          fontFamily: "'Kulim Park', sans-serif",
        }}
      >
        © {new Date().getFullYear()} Fun Learning Platform. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Hero;
