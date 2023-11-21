import About from '@/components/about';
import TechForm from '@/components/form';
import Hero from '@/components/hero';
import Line from '@/components/line';
import Ocean from '@/components/ocean';
import Ultra from '@/components/ultra';

export default function Home() {
  return (
    <div>
      <Hero />
      <Ultra />
      <About />
      <Line />
      <Ocean />
      {/* <TechForm /> */}
    </div>
  );
}
