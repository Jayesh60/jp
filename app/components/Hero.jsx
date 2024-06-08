import { NavigationBar } from "./NavigationBar";
import { FaPhoneAlt } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="w-full bg-whitesmoke ">
      <NavigationBar />
      <div className="relative h-full max-width">
        <div className="h-[80vh] border-b w-full flex items-center justify-center">
          <div className="max-w-[740px] mx-auto text-center flex gap-2 justify-center items-center flex-col">
            <span className="py-2 px-4 text-desc bg-shinywhite border-gradient">
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
          src="/hero/img1.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:left-0 xl:left-4 top-5 left-8 rounded-lg"
        />
        <img
          src="/hero/img3.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:-left-20 xl:-left-14 top-[35%] -left-4 rounded-lg"
        />
        <img
          src="/hero/img1.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:left-0 xl:left-4 bottom-5 left-8 rounded-lg"
        />

        <img
          src="/hero/img1.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:right-0 xl:right-4 top-5 right-8 rounded-lg"
        />
        <img
          src="/hero/img3.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:-right-20 xl:-right-14 top-[35%] -right-4 rounded-lg"
        />
        <img
          src="/hero/img1.png"
          alt=""
          className="h-[28%] object-cover aspect-video absolute z-0 2xl:right-0 xl:right-4 bottom-5 right-8 rounded-lg"
        />
      </div>
    </div>
  );
};
