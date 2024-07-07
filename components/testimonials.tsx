import { FiArrowLeft, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";

// Define the Begin component
function Testimonals() {
  // JSX structure for the Begin component
  return (
    <>
      <h2 className="text-4xl lg:text-7xl font-semibold pt-14 md:pb-4 px-10 md:px-16">
        Hear what our
      </h2>
      <h2 className="text-4xl lg:text-7xl font-semibold pb-12 px-10 md:px-16 border-b-[1px] border-black">
        community is saying
      </h2>
      <div className="p-4 pb-16 md:px-16 flex md:flex-row flex-col-reverse justify-center md:justify-between w-full md:space-x-16 font-thin border-b-[1px] border-black">
        <div className="w-full md:w-2/3 flex flex-col mt-4 items-start text-justify md:text-left">
          <p className="md:text-xl my-4 md:mx-0 text-justify md:w-[42ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl
            mi, ultricies nec mi sit amet, fermentum ullamcorper sapien. Nulla
            convallis posuere tellus non dictum. Phasellus vulputate mollis
            imperdiet. Suspendisse imperdiet erat a auctor pretium. Nulla
            facilisis volutpat nulla sed molestie. In at facilisis massa, ac
            luctus augue. Etiam vestibulum fringilla ex, a pretium augue
            lobortis ac. Ut auctor elit in metus tincidunt, non luctus mi
            dignissim.
          </p>
          <h4 className="text-2xl mt-4 md:mx-0 text-justify font-medium w-[28ch]">
            Kimish Choudhary
            <br />
          </h4>
          <p className="mb-4">Student, CSE</p>
          {/* <div className="flex items-center gap-8">
            <FiArrowLeft />
            <div className="w-3 h-3 rounded-full border-black border" />
            <div className="w-3 h-3 rounded-full border-black border" />
            <div className="w-3 h-3 rounded-full border-black border" />
            <div className="w-3 h-3 rounded-full border-black border" />
            <FiArrowRightCircle />
          </div> */}
        </div>
        <div className="md:w-2/3 mb-4 h-16 md:h-[unset]">
          <img
            src="/team/kimish.jpeg"
            alt="React Code snippet"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full -translate-y-16 md:-translate-y-24 ml-auto"
          />
        </div>
      </div>
      <div className="border-b-[1px] border-black pt-12 pb-12 px-12 md:px-16 bg-[rgb(10,20,57)] flex justify-end">
        <button className="text-xl font-medium px-12 py-4 bg-green-500 hover:bg-white text-[rgb(10,20,57)] rounded-full border-none flex gap-4 items-center">
          Read all
          <FiArrowRight size={20} />
        </button>
      </div>
    </>
  );
}

// Export the Begin component
export default Testimonals;
