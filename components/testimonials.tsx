import { FiArrowLeft, FiArrowRight, FiArrowRightCircle } from "react-icons/fi";

// Define the Begin component
function Testimonals() {
  // JSX structure for the Begin component
  return (
    <>
      <h2 className="text-5xl lg:text-7xl font-semibold pt-14 pb-4 px-16">
        Hear what our
      </h2>
      <h2 className="text-5xl lg:text-7xl font-semibold pb-12 px-16 border-b-[1px] border-black">
        community is saying
      </h2>
      <div className="p-4 pb-16 px-16 flex md:flex-row flex-col-reverse justify-center md:justify-between w-full md:space-x-16 font-thin border-b-[1px] border-black">
        <div className="w-full md:w-2/3 flex flex-col mt-4 items-start text-justify md:text-left">
          <p className="text-xl mx-8 my-4 md:mx-0 text-justify w-[42ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl
            mi, ultricies nec mi sit amet, fermentum ullamcorper sapien. Nulla
            convallis posuere tellus non dictum. Phasellus vulputate mollis
            imperdiet. Suspendisse imperdiet erat a auctor pretium. Nulla
            facilisis volutpat nulla sed molestie. In at facilisis massa, ac
            luctus augue. Etiam vestibulum fringilla ex, a pretium augue
            lobortis ac. Ut auctor elit in metus tincidunt, non luctus mi
            dignissim.
          </p>
          <h4 className="text-2xl mx-8 mt-4 md:mx-0 text-justify font-medium w-[28ch]">
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
        <div className="md:w-2/3 mb-4">
          <img
            src="/team/kimish.jpeg"
            alt="React Code snippet"
            className="w-64 h-64 rounded-full -translate-y-24 ml-auto"
          />
        </div>
      </div>
      <div className="border-b-[1px] border-black pt-12 pb-12 px-16 bg-[rgb(10,20,57)] flex justify-end">
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
