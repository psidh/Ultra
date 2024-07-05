// Import necessary modules and components
"use client";
import { useRouter } from "next/navigation";

// Define the Begin component
function Begin() {
  const router = useRouter();

  // Function to handle button click and navigate to the /form page
  const handleClick = () => {
    router.push("/form");
  };

  // JSX structure for the Begin component
  return (
    <>
      <h2 className="text-5xl lg:text-8xl font-semibold pt-12 pb-6 px-16">
        Be a part
      </h2>
      <h2 className="text-5xl lg:text-8xl font-semibold pb-12 px-16 border-b-[1px] border-black">
        of ULTRA
      </h2>
      <div className="p-6 pb-16 px-16 flex md:flex-row flex-col-reverse justify-center md:justify-between w-full md:space-x-16 items-center font-thin border-b-[1px] border-black">
        <div className="w-full md:w-2/3 flex flex-col mt-4 items-start justify-center text-justify md:text-left">
          <h3 className="mx-8 my-4 md:mx-0 text-justify font-medium w-[26ch]">
            Ready to turn your code into a symphony of innovation?
            <br />
            <br />
            Join our community of aspiring developers and mentors on an exciting
            tech journey!
          </h3>
          <h4 className="mx-8 my-4 md:mx-0 text-justify">
            Whether you're a seasoned developer or just starting, there's a
            place for you here. Let's learn, collaborate, and innovate together.
          </h4>
          <button
            onClick={handleClick}
            className="font-semibold uppercase tracking-wider px-12 py-4 hover:bg-green-500 rounded-full"
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
