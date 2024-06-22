import React from "react";

const Presence = () => {
  return (
    <div className="bg-white py-20 ">
      <div className="max-width relative text-center items-center flex  flex-col justify-center">
        <h1 className="text-[50px] pb-5 leading-[50px] tracking-tight text-black font-semibold">
          Ready to Transform Your Online Presence?
        </h1>

        <p className="text-desc text-balance pb-10 w-[80%]">
          Get in touch with us today and let's start turning your website into a
          powerful revenue-generating machine. Contact us now to schedule your
          free consultation!
        </p>

        <button className="btn font-bold px-6 mb-2">
          Book a free call now
        </button>
        <p className="text-xs text-black">
          Be quick slots are almost full for june
        </p>

        <div className="rotate-12 absolute -bottom-10 left-[60%]">
          <img src="/icons/arrow.svg" alt="" className="h-10"/>
          <p className="font-serif text-sm font-semibold">Do it! Come lets <br /> increase your sales</p>
        </div>
      </div>
    </div>
  );
};

export default Presence;
