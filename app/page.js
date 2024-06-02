import { Hero } from "./components/Hero";
import OnlinePresence from "./components/OnlinePresence";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OnlinePresence />
    </div>
  );
}
