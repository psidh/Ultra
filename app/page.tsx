import About from '@/components/about';
import Hero from '@/components/hero';
import Begin from '@/components/begin';
import Meet from '@/components/people';
import Line from '@/components/line';


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Line />
      <Begin />
      <Line />
      <Meet />
    </div>
  );
}
