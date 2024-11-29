import React from "react";

const Prize = () => {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-10 md:py-14">
      <div className="text-center mb-10">
        <p className="text-base md:text-lg uppercase font-semibold tracking-wide">
          Explore Rewards
        </p>
        <h1 className="text-2xl md:text-4xl font-semibold mt-3">
          Latest Competition Prizes
        </h1>
        <div className="mt-2 w-16 h-1 mx-auto bg-pink-500 rounded"></div>
      </div>

      <div className="px-4 md:px-10 lg:px-20 mx-auto w-full md:w-[80%] xl:w-[70%]">
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/SVG.png"
                alt="Runners-Up"
                className="w-10 h-10"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold">Runners-Up</h3>
            </div>
            <div className="bg-pink-500 text-white p-5 rounded-lg shadow-md text-center">
              <p className="text-sm md:text-base font-medium">
                40 participants will receive 75% scholarships for their chosen programs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/SVG.png"
                alt="First-Place"
                className="w-10 h-10"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold">First-Place</h3>
            </div>
            <div className="border border-white/70 text-white p-5 rounded-lg shadow-md text-center">
              <p className="text-sm md:text-base font-medium">
                10 winners will earn full 100% scholarships for exceptional performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/SVG.png"
                alt="Special Recognition"
                className="w-10 h-10"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold">Special Recognition</h3>
            </div>
            <div className="bg-pink-500 text-white p-5 rounded-lg shadow-md text-center">
              <p className="text-sm md:text-base font-medium">
                The final group of 150 entrants will receive scholarships worth 50%.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Merit Awards</h2>
          <p className="text-sm md:text-base font-medium mt-3">
            Participants submitting full essays but not winning scholarships can still qualify for 
            £1000 residential awards or £500 online program awards.
          </p>
        </div>

        <div className="text-center mt-8">
          <button className="bg-pink-600 text-white text-sm md:text-lg font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prize;
