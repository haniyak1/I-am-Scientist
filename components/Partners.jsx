import React from "react";

const Partners = () => {
  const partnerLogos = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png",
    "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png",
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-wide">Our Country Partners</h2>
        <div className="w-16 h-1 bg-pink-400 mx-auto mt-3"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-3 transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={`/${logo}`}
              alt={`Logo ${index + 1}`}
              className="w-24 h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
