"use client";

import React from "react";

const Kids = () => {
  const images = [
    "/Container.png", 
    "/Container (2).png",
    "/Container (3).png",
    "/Container(4).png",
    "/Container (1).png",
  ];

  return (
    <section className="bg-purple-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kids;
