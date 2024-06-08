import { Hero } from "./components/Hero";
import Offer from "./components/Offer";
import OnlinePresence from "./components/OnlinePresence";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OnlinePresence />
      <Offer />
    </div>
  );
}
