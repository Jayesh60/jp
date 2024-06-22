const Specialities = () => {
  return (
    <section id="specialities" className="py-20 px-16 bg-white">
      <div className="max-width flex justify-between items-start">
        <div>
          <h4 className="text-desc text-4xl">Our</h4>
          <h1 className="title-gradient tracking-tight">Specialities</h1>
        </div>
        <div className="flex flex-col">
          {SpecialitiesData.map((item, index) => (
            <Section {...item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;

const Section = ({ title, desc, index }) => {
  return (
    <div
      className={`w-[430px] py-5 ${
        index !== SpecialitiesData.length - 1 && "border-b border-[#00000040]"
      } `}
    >
      <h1 className="flex gap-4">
        <span>
          <img src="/icons/spinner.svg" alt="" className="animate-spin" />
        </span>
        <span className="text-3xl tracking-tight font-semibold">{title}</span>
      </h1>
      <div>
        <p className="text-desc text-lg w-[97%]">{desc}</p>
      </div>
    </div>
  );
};

const SpecialitiesData = [
  {
    title: "Website Design",
    desc: "Crafting visually stunning and user-friendly designs that captivate and engage your audience.",
  },
  {
    title: "Website Development",
    desc: "Building robust, scalable, and high-performing websites tailored to your specific needs.",
  },
  {
    title: "Branding",
    desc: "Creating a strong, memorable brand identity that resonates with your target market and sets you apart.",
  },
  {
    title: "Consultations",
    desc: "Providing expert advice and strategic insights to help you achieve your business goals and drive growth.",
  },
];
