"use client";
import { useState } from "react";
import { NavigationBar } from "./NavigationBar";
import { FaPhoneAlt } from "react-icons/fa";

export const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-full ${
        hover
          ? "bg-blue border-blue cursor-auto border-dark-blue select-none border"
          : "bg-whitesmoke border border-blue"
      } transform transition-all relative`}
      style={{ cursor: "url(/hero/mario.png)" }}
    >
      <NavigationBar />
      <div className="relative  h-full max-width">
        <div className="h-[80vh] w-full flex items-center justify-center">
          <div className="max-w-[740px] mx-auto text-center flex gap-2 justify-center items-center flex-col">
            <span className="py-2 px-4 text-desc bg-shinywhite border-collapse border-gradient rounded-3xl">
              <span className="font-semibold">10+</span> Calls received this
              month
            </span>

            <h1 className="text-[80px] leading-[80px] tracking-[-4px] text-balance font-semibold py-2">
              For website that generate revenue
            </h1>
            <p className="text-balance text-desc">
              We'll transform your website into a powerful conversion engine
              that turns visitors into customers, boosting your revenue
              effortlessly.
            </p>
            <button className="btn flex items-center gap-2">
              <FaPhoneAlt size={"1em"} />
              <span>Book a free call</span>
            </button>
          </div>
        </div>

        <img
          src="/hero/img4.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:left-0 xl:left-10 top-5 left-8"
              : "2xl:left-0 xl:left-2 top-5 left-8"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
        <img
          src="/hero/img3.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:-left-20 xl:-left-14 top-[35%] -left-4"
              : "2xl:left-20 xl:-left-20 top-[35%] -left-20"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
        <img
          src="/hero/img4.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:left-0 xl:left-10 bottom-5 left-8"
              : "2xl:left-0 xl:left-2 bottom-5 left-8"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
        <img
          src="/hero/img1.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:right-0 xl:right-10 top-5 right-8"
              : "2xl:right-0 xl:right-2 top-5 right-8"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
        <img
          src="/hero/img3.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:-right-20 xl:-right-14 top-[35%] -right-4"
              : "2xl:right-20 xl:-right-20 top-[35%] -right-20"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
        <img
          src="/hero/img2.webp"
          alt=""
          className={`h-[28%] ${
            hover
              ? "2xl:right-0 xl:right-10 bottom-5 right-8"
              : "2xl:right-0 xl:right-2 bottom-5 right-8"
          } transform duration-[800ms] object-cover aspect-video absolute z-0  rounded-lg`}
        />
      </div>

      {/* <div className="bg-dark-blue h-2 w-2 absolute -bottom-1 -right-1"/> */}
    </div>
  );
};
