import Marquee from "react-fast-marquee";

function OnlinePresence() {
  return (
    <div className="py-20 ">
      <div
        id="work"
        className="max-width py-20 flex-col flex gap-8 rounded-xl bg-[#161616]"
      >
        <Marquee pauseOnHover={false} speed={20}>
          <Img src="/hero/img1.png" />
          <Img src="/hero/img2.png" />
          <Img src="/hero/img3.png" />
          <Img src="/hero/img4.png" />
        </Marquee>
        <Marquee direction="right" pauseOnHover={false} speed={20}>
          <Img src="/hero/img1.png" />
          <Img src="/hero/img2.png" />
          <Img src="/hero/img3.png" />
          <Img src="/hero/img4.png" />
        </Marquee>
      </div>

      <div className="max-width py-10 flex flex-col gap-4 items-center justify-center">
        <h1 className="title flex items-center gap-2 text-[40px] font-semibold">
          <span className="tracking-[-2.5px]">We don't just create websites, we create experiences</span>
          <span>
            <img src="/icons/triangle.svg" alt="" />
          </span>
        </h1>
        <p className="text-lg w-[80%] text-center text-desc font-medium">
          We believe that a website should be more than just a digital presence.
          It should be an engaging, immersive journey that captivates and
          inspires users.
        </p>
        <button className="btn">View all projects</button>
      </div>
    </div>
  );
}

export default OnlinePresence;

const Img = ({ src }) => {
  return (
    <div className="px-5">
      <img
        src={src}
        alt=""
        className="h-[280px] w-full aspect-video object-cover rounded-lg"
      />
    </div>
  );
};
