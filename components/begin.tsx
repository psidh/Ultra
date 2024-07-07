import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Define the Begin component
function Begin() {
  // Function to handle button click and navigate to the /form page

  // JSX structure for the Begin component
  return (
    <div className="bg-[#970CDA] text-white">
      <h2 className="text-5xl lg:text-8xl font-semibold pt-12 pb-6 px-12 md:px-16">
        Be a part
      </h2>
      <h2 className="text-5xl lg:text-8xl font-semibold pb-16 px-12 md:px-16 border-b-[1px] border-black">
        of ULTRA
      </h2>
      <div className=" p-4 pb-16 px-10 md:px-16 flex md:flex-row flex-col-reverse justify-center md:justify-between w-full md:space-x-16 font-thin border-b-[1px] border-black">
        <div className="w-full md:w-2/3 flex flex-col mt-4 items-start text-justify md:text-left">
          <h3 className="text-2xl my-4 md:mx-0 text-justify font-medium md:w-[28ch]">
            Ready to turn your code into a symphony of innovation?
            <br />
          </h3>
          <h4 className="text-xl my-4 md:mx-0 text-justify md:w-[28ch]">
            Whether you're a seasoned developer or just starting, there's a
            place for you here. Let's learn, collaborate, and innovate together.
          </h4>
          <Link href={"/join"}>
            <button className="font-medium text-xl flex gap-4 items-center px-12 py-5 border-none hover:bg-green-500 bg-[rgb(10,20,57)] rounded-full">
              Let's Go <FiArrowRight size={20} />
            </button>
          </Link>
        </div>
        <div className="md:w-2/3 mb-4">
          <img
            src="/code.svg"
            alt="React Code snippet"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}

// Export the Begin component
export default Begin;
