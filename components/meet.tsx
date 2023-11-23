'use client';
import { useRouter } from 'next/navigation';
import Line from './line';

function begin() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/people');
  };
  return (
    <>
      <div className="font-mono flex md:flex-row flex-col-reverse justify-between items-center m-16  text-[#dcdcdc]">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <img
            src="/people/me.jpeg"
            alt="React Code snippet"
            className="w-[200px] h-[200px] rounded-full opacity-80"
          />
          <p className='text-center mt-2 font-mono'>P Sidharth</p>
          <p className='text-center mb-2 font-mono'>Developer | Sophomore</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center  m-8 text-center">
          <h3 className="mx-16 my-4 md:mx-0">
            Meet the Team
          </h3>
          <h4 className="mx-16 my-4 md:mx-0">Get to know people working and building things!</h4>
          <button
            onClick={handleClick}
            className="mx-16 md:mx-0 w-2/3 md:w-full border-teal-400 hover:bg-teal-300 hover:text-black"
          >
            Meet the Team
          </button>
        </div>
      </div>
    </>
  );
}

export default begin;
