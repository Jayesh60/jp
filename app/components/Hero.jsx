import { NavigationBar } from "./NavigationBar";

export const Hero = () => {
  return (
    <div className="w-full bg-whitesmoke">
      <NavigationBar />

      <div className="h-[70vh] border-b w-full flex items-center justify-center">
        <div className="max-w-[740px] mx-auto text-center flex gap-2 justify-center items-center flex-col">
          <span className="py-2 px-4 text-desc bg-shinywhite border-gradient">
            <span className="font-semibold">10+</span> Calls received this month
          </span>

          <h1 className="text-[80px] leading-[80px] text-balance font-semibold py-2">
            For website that generate revenue
          </h1>
          <p className="text-balance text-desc">
            We'll transform your website into a powerful conversion engine that
            turns visitors into customers, boosting your revenue effortlessly.
          </p>
          <button className="btn">
            Book a free call
          </button>
        </div>
      </div>
    </div>
  );
};
