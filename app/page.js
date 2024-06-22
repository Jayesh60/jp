import FAQs from "./components/FAQs";
import { Hero } from "./components/Hero";
import Offer from "./components/Offer";
import Presence from "./components/Presence";
import ProjectsParent from "./components/ProjectsParent";
import Specialities from "./components/Specialities";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProjectsParent />
      <Offer />
      <Specialities />
      <FAQs />
      <Presence />
    </div>
  );
}
