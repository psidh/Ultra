import About from "@/components/about";
import Hero from "@/components/hero";
import Begin from "@/components/begin";
import Meet from "@/components/meet";
import Line from "@/components/line";
import Faq from "@/components/faq";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Begin />
      <Meet />
    </div>
  );
}
