"use client";
import { useRouter } from "next/navigation";

function begin() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/people");
  };
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center my-32 mx-16">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <img
            src="/people/me.jpeg"
            alt="React Code snippet"
            className="w-48 h-48 rounded-full opacity-80"
          />
          <p className="text-center mt-8 font-medium text-xl">
            Philkhana Sidharth
          </p>
          <p className="text-center mb-2 ">Founder</p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <img
            src="/people/manas.png"
            alt="React Code snippet"
            className="w-48 h-48 rounded-full opacity-80"
          />
          <p className="text-center mt-8 font-medium text-xl">Manas Malla</p>
          <p className="text-center mb-2 ">Chief Technical Officer</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center  lg:m-8 text-center">
          <h3 className="mx-16 my-4 md:mx-0 font-bold">Meet the Team</h3>
          <h4 className="mx-16 mb-4 md:mx-0 text-center w-full ">
            Get to know people working
            <br />
            and building things!
          </h4>
          <button
            onClick={handleClick}
            className="mx-16 md:mx-0 py-4 px-12 rounded-full hover:bg-[#FF6C22]"
          >
            Team
          </button>
        </div>
      </div>
    </>
  );
}

export default begin;
