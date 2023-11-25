'use client';
import { useRouter } from 'next/navigation';

function begin() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/form');
  };
  return (
    <>
      <div className=" flex md:flex-row flex-col justify-between items-center m-16 text-[#dcdcdc]">
        <div className="md:w-1/3">
          <img
            src="/code.svg"
            alt="React Code snippet"
            className="w-full h-full opacity-80"
          />
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center  m-8 text-center">
          <h3 className="mx-8 my-4 md:mx-0">
            Ready to turn your code into a symphony of innovation?
          </h3>
          <h4 className="mx-8 my-4 md:mx-0">Join us on this adventure!</h4>
          <button
            onClick={handleClick}
            className="font-mono mx-8 md:mx-0 w-2/3 md:w-full border-gray-500"
          >
            Let's Go
          </button>
        </div>
      </div>
    </>
  );
}

export default begin;
