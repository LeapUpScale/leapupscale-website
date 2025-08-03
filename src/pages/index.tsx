import BentoGrid from "./bento-grid";
import Hero from "./hero";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <BentoGrid />
    </div>
  );
}
