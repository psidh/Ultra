import About from '@/components/about';
import Hero from '@/components/hero';
import Begin from '@/components/begin';
import Meet from '@/components/meet';
import Line from '@/components/line';


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Line />
      <Meet />
      <Line />
      <Begin />
    </div>
  );
}
