import React from "react";

const Team = () => {
  return (
    <section className="bg-white py-12 px-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left Section: Heading and Description */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Ever Wonder Who's Creating All This Fun Learning?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of young minds, aiming to revolutionize education and
            make learning a fun adventure for you!
          </p>
        </div>

        {/* Right Section: Team Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: "Anna Dean", role: "React Engineer", color: "bg-pink-100" },
            { name: "Chris Mezy", role: "Data Engineer", color: "bg-yellow-100" },
            { name: "Leslie Showder", role: "Backend Developer", color: "bg-blue-100" },
            { name: "Jim Brixton", role: "AI Specialist", color: "bg-green-100" },
          ].map((member, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${member.color} text-gray-800`}
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
