'use client';
import { useRouter } from 'next/navigation';
import Line from './line';

function begin() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/form');
  };
  return (
    <div>
    <Line/>
    <div className="flex md:flex-row flex-col justify-between items-center my-16">
      <div className="md:w-2/3">
        <img
          src="/code.png"
          alt="React Code snippet"
          className="w-full h-full opacity-80"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center md:mx-16 mx-0 md:my-0 my-16">
        <h3>Join the Community</h3>
        <button onClick={handleClick}>Let's Go</button>
      </div>
      </div>      
    </div>
  );
}

export default begin;
