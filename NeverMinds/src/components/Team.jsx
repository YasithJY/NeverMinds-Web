import React, { useEffect, useState, useRef } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility to true when the section is in the viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`py-16 px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      ref={sectionRef}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Heading and Description */}
        <div
          className={`lg:w-1/2 text-left transition-transform duration-700 ${
            isVisible ? "scale-100" : "scale-90"
          }`}
        >
          <h2
            className="text-4xl sm:text-6xl font-extrabold text-gray-800 leading-tight mb-6"
            style={{ fontFamily: "'Kulim Park', sans-serif" }}
          >
            Ever Wonder Who's
            <br />
            Creating All This
            <br />
            <span className="text-yellow-400">Fun</span> Learning?
          </h2>
          <p
            className="mt-6 text-lg sm:text-2xl text-gray-700 max-w-lg text-center"
            style={{ fontFamily: "'Parkin Sans', sans-serif" }}
          >
            We are a team of young minds, aiming to revolutionize education and
            make learning a fun adventure for you!
          </p>
          <p
            className="mt-6 text-lg sm:text-2xl text-gray-700 max-w-lg text-center"
            style={{ fontFamily: "'Parkin Sans', sans-serif" }}
          >
            With innovation and empathy at our core, we strive to make learning
            fun, engaging, and accessible for every student.
          </p>
        </div>

        {/* Right Section: Team Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:mt-0">
          {[
            { name: "Anna Dean", role: "React Engineer", image: img1 },
            { name: "Chris Mezy", role: "Data Engineer", image: img2 },
            { name: "Leslie Showder", role: "Backend Developer", image: img3 },
            { name: "Jim Brixton", role: "AI Specialist", image: img4 },
          ].map((member, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-xl shadow-xl transition-transform duration-500 ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`, // Stagger animation
              }}
            >
              {/* Background Highlight */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-yellow-400 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Image Section */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Text Section */}
              <div className="mt-4">
                <h3
                  className="text-xl font-bold text-gray-800"
                  style={{ fontFamily: "'Kulim Park', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="mt-2 text-gray-800"
                  style={{ fontFamily: "'Parkin Sans', sans-serif" }}
                >
                  {member.role}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="text-center text-white px-6"
                  style={{ fontFamily: "'Parkin Sans', sans-serif" }}
                >
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2">{member.role}</p>
                  <p className="mt-4 text-sm text-gray-300">
                    Passionate about building solutions that make learning accessible and engaging.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
