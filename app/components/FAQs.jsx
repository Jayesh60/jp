"use client";
import React, { useState } from "react";

const FAQs = () => {
  return (
    <section id="faq" className="py-20 px-16 bg-whitesmoke">
      <div className="max-width flex flex-col items-center justify-center gap-20">
        <span className="text-[50px] leading-[50px] tracking-tight text-black font-semibold">
          Frequently Asked Questions
        </span>

        <div className="w-[800px] flex flex-col gap-4">
          {FAQData.map((item, index) => (
            <FAQDiv item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

const FAQDiv = ({ item, index }) => {
  const [toggle, setToggle] = useState(index === 0 ? true : false);

  const handleClick = () => {
    setToggle((p) => !p);
  };
  return (
    <div
      onClick={handleClick}
      className="py-3 cursor-pointer px-16 flex flex-col gap-4 bg-white rounded-3xl"
    >
      <h1 className="question flex gap-8 items-center text-2xl font-semibold">
        <span>
          <img
            src="/icons/plus.svg"
            alt=""
            className={` ${
              toggle ? "-rotate-45" : "rotate-180"
            } transition-all duration-500 ease-in`}
          />
        </span>
        <span>{item.que}</span>
      </h1>
      <div
        className={`${
          toggle ? "h-full" : "h-0"
        } transition-all duration-500 ease-in`}
      >
        {toggle && <h3 className="text-desc">{item.ans}</h3>}
      </div>
    </div>
  );
};

const FAQData = [
  {
    que: "Question",
    ans: "Answer",
  },
  {
    que: "Question",
    ans: "Answer",
  },
  {
    que: "Question",
    ans: "Answer",
  },
];
