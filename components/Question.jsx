"use client";

import React, { useState } from "react";
import { El_Messiri } from "next/font/google";


const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#2E1D57] to-[#0032AB] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-5xl font-bold ${elMessiri.className}`}>
            Frequently Asked Questions
          </h2>
          <div className="w-28 h-1 bg-white mt-4 mx-auto rounded-lg"></div>
        </div>

        <div className="space-y-6 max-w-[800px] mx-auto">
          {[
            {
              question: "Who can enter the Immerse Essay Competition?",
              answer:
                "The Immerse Education Essay Competition is open to entries from young people aged 13-18 interested in all subjects, from Architecture to Medicine, Creative Writing to Film Studies. However, students aged 18 should only submit an essay if they will still be 18 when the programmes the scholarships are valid for begin.",
            },
            {
              question: "Why should I enter the Immerse Education Essay Competition?",
              answer:
                "By entering the Immerse Essay Competition, you'll have the chance to win full scholarships for a wide range of academic programs and competitions. It's a great opportunity to showcase your skills and get recognized for your academic potential.",
            },
            {
              question: "How are essays graded and scholarships awarded?",
              answer:
                "Essays are graded based on creativity, originality, and depth of analysis. Scholarship winners are selected based on their submissions, and winners can use their awards to attend a variety of programs offered by Immerse Education.",
            },
            {
              question: "If I win a scholarship, which location can I use it for?",
              answer:
                "Winners can apply their scholarships to any of the locations available for their chosen program. Available locations are specified for each program, and you can choose based on your preferences.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#3A2E5A] to-[#0032AB] rounded-lg shadow-lg border border-white/10"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-5 text-lg md:text-xl font-semibold text-left focus:outline-none transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`${elMessiri.className}`}>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 448 512"
                  className={`w-5 h-5 transform ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  } transition-transform`}
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 text-sm md:text-base text-white bg-gradient-to-r from-[#3A2E5A] to-[#0032AB] rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
