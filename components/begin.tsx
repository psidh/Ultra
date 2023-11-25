// Import necessary modules and components
'use client';
import { useRouter } from 'next/navigation';

// Define the Begin component
function Begin() {
  const router = useRouter();

  // Function to handle button click and navigate to the /form page
  const handleClick = () => {
    router.push('/form');
  };

  // JSX structure for the Begin component
  return (
    <>
      <div className="p-6 md:m-32 flex md:flex-row flex-col-reverse justify-center md:justify-between w-full md:w-4/5 md:space-x-16 items-center text-[#dcdcdc]">
        <div className="w-full md:w-2/3 flex flex-col mt-4 items-center justify-center text-justify md:text-left">
          <h3 className="mx-8 my-4 md:mx-0 text-justify">
            Ready to turn your code into a symphony of innovation? Join our community of aspiring developers and mentors on an exciting tech journey!
          </h3>
          <h4 className="mx-8 my-4 md:mx-0 text-justify">
            Whether you're a seasoned developer or just starting, there's a place for you here. Let's learn, collaborate, and innovate together.
          </h4>
          <button
            onClick={handleClick}
            className="font-mono mx-8 md:mx-0 w-2/3 md:w-full border-gray-500"
          >
            Let's Go
          </button>
        </div>
        <div className="md:w-2/3 mb-4">
          <img
            src="/code.svg"
            alt="React Code snippet"
            className="w-full h-full opacity-80"
          />
        </div>
      </div>
    </>
  );
}

// Export the Begin component
export default Begin;
