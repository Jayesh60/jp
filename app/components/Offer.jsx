import React from "react";

const offerData = [
  {
    title: "Persuasive Writing",
    desc: "Developing text that attracts, resonates with, and motivates your audience to take action.",
  },
  {
    title: "Premium Branding",
    desc: "Create a distinctive brand identity that stands out in a competitive market.",
  },
  {
    title: "SEO Enhancement ",
    desc: "Implementing proven techniques to boost your website's search engine rankings.",
  },
  {
    title: "Conversion-Driven ",
    desc: "Crafting visually striking designs optimized for the highest conversion rates.",
  },
];

const Offer = () => {
  return (
    <div className="py-20 bg-whitesmoke">
      <div className="max-width h-[630px] relative py-14 px-16 bg-white rounded-[20px] flex">
        <div className="w-1/2 flex flex-col h-full justify-between">
          <div>
            <h1 className="flex gap-2 items-center">
              <span>
                <img src="/icons/triangle.svg" alt="" className="" />
              </span>
              <span className="text-[50px] leading-[50px] tracking-tight text-black font-semibold">
                What we offer?
              </span>
            </h1>
            <p className="pt-4 font-medium w-[80%]">
              We provide comprehensive solutions to enhance your online presence
              and maximize conversions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 grid-rows-2">
            {offerData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex pb-3 items-center gap-2">
                  <img src="/icons/curvy-tri.svg" alt="" />
                  <h2 className=" text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                </div>
                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex w-[40%] rounded-tl-[20px] rounded-br-[20px] h-[90%] items-stretch bg-black absolute bottom-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
