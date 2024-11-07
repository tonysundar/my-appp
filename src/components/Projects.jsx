import React from 'react';

const Projects = () => {
  return (
    <div className="py-12 mt-14">
      {/* Courses Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-sky-500 mb-6">Our Courses</h3>

        {/* Centered Courses */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* C & C++ Programming Course */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer max-w-xs">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">C & C++ Programming</h4>
            <p className="text-gray-600 mb-4">
              Gain expertise in C and C++, two of the most powerful and widely used programming languages.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
              Learn More
            </button>
          </div>

          {/* MERN Stack Course */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer max-w-xs">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">MERN Stack</h4>
            <p className="text-gray-600 mb-4">
              Become proficient in modern web development with MongoDB, Express, React, and Node.js.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Other Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Java Full Stack Course */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Java Full Stack</h4>
            <p className="text-gray-600 mb-4">
              Master the skills of Java for both frontend and backend development with hands-on experience.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Python Full Stack Course */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Python Full Stack</h4>
            <p className="text-gray-600 mb-4">
              Learn Python for both web development and data science, covering all necessary technologies.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
              Learn More
            </button>
          </div>

          {/* DSA Course */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Data Structures & Algorithms (DSA)</h4>
            <p className="text-gray-600 mb-4">
              Learn core data structures and algorithms to build problem-solving skills and ace technical interviews.
            </p>
            <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Expertise</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Skill Buttons */}
          <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300 cursor-pointer mb-4">
            C Language
          </button>
          <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300 cursor-pointer mb-4">
            C++
          </button>
          <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300 cursor-pointer mb-4">
            DSA
          </button>
          <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300 cursor-pointer mb-4">
            Java Full Stack
          </button>
          <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300 cursor-pointer mb-4">
            Python Full Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
