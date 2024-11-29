import React from "react";

const Competition = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-purple-900 to-purple-700">
      
      <div className="flex-1 flex flex-col justify-center items-start p-8 bg-gradient-to-r from-purple-900 to-blue-800">
        <div className="mb-8 text-left">
          <h4 className="text-sm md:text-base text-white font-medium uppercase tracking-wide">
            Discover Our Latest News
          </h4>
          <h2 className="text-xl md:text-3xl text-white font-bold mt-4">
            Find Out the Latest Competition News
          </h2>
          <div className="w-10 h-1 bg-pink-500 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-purple-800 border border-white border-opacity-10 rounded-lg overflow-hidden">
            <img
              src="/C1.png"
              alt="Competition 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-blue-300 text-sm mb-2">June 6, 2025 · Cyber Security</p>
              <h4 className="text-lg text-white font-semibold mb-4">
                Professor Albert’s research on mobile money in Tanzania
              </h4>
              <a
                href="#"
                className="text-pink-400 text-sm font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>

          
          <div className="bg-purple-800 border border-white border-opacity-10 rounded-lg overflow-hidden">
            <img
              src="/C2.png"
              alt="Competition 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-blue-300 text-sm mb-2">June 6, 2016 · Machine Learning</p>
              <h4 className="text-lg text-white font-semibold mb-4">
                A Global MBA for the next generation of leaders
              </h4>
              <a
                href="#"
                className="text-pink-400 text-sm font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full md:w-1/3 bg-purple-800 p-8 flex flex-col">
        <h3 className="text-white text-xl md:text-3xl font-bold mb-6">
          Upcoming Competitions
        </h3>
        <ul className="space-y-6">
         
          <li className="flex items-start gap-4">
            <div className="text-center">
              <p className="text-white text-4xl font-bold">07</p>
              <p className="text-white text-lg font-medium">JAN</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                AI And Machine Learning
              </h4>
              <p className="text-white text-sm">
                7:00 am - 7:00 am · Remote
              </p>
            </div>
          </li>

          
          <li className="flex items-start gap-4">
            <div className="text-center">
              <p className="text-white text-4xl font-bold">01</p>
              <p className="text-white text-lg font-medium">JAN</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Advanced Deep Learning
              </h4>
              <p className="text-white text-sm">
                10:00 am - 10:00 am · Remote
              </p>
            </div>
          </li>

          
          <li className="flex items-start gap-4">
            <div className="text-center">
              <p className="text-white text-4xl font-bold">17</p>
              <p className="text-white text-lg font-medium">DEC</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Generative Artificial Intelligence
              </h4>
              <p className="text-white text-sm">
                1:00 pm - 1:00 pm · Remote
              </p>
            </div>
          </li>
        </ul>
        <a
          href="#"
          className="text-pink-400 text-sm font-medium mt-6 hover:underline"
        >
          View All Competitions →
        </a>
      </div>
    </section>
  );
};

export default Competition;
