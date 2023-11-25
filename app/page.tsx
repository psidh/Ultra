import About from '@/components/about';
import Hero from '@/components/hero';
import Begin from '@/components/begin';
import Meet from '@/components/meet';
import Line from '@/components/line';
import Faq from '@/components/faq';


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Line />
      <Begin />
      <Line />
      <Faq />
      <Meet />
    </div>
  );
}
