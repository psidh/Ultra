"use client";
import { useRouter } from "next/navigation";

function begin() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/team");
  };
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center my-12 md:my-32 mx-10 md:mx-16">
        <div className="flex shrink-0 gap-24">
          <div className="shrink-0 flex flex-col justify-center items-center">
            <img
              src="/team/me.jpeg"
              alt="React Code snippet"
              className="w-48 h-48 rounded-full opacity-90"
            />
            <p className="text-center mt-8 font-medium text-xl">
              Philkhana Sidharth
            </p>
            <p className="text-center mb-2 ">Founder</p>
          </div>
          <div className="shrink-0 flex flex-col justify-center items-center">
            <img
              src="/team/manas.jpeg"
              alt="React Code snippet"
              className="w-48 h-48 rounded-full opacity-90"
            />
            <p className="text-center mt-8 font-medium text-xl">Manas Malla</p>
            <p className="text-center mb-2 ">Chief Technical Officer</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-end lg:m-8 text-end">
          <h3 className="my-4 md:mx-0 font-bold text-4xl">Meet the Brains</h3>
          <p className="mb-4 md:mx-0 w-full text-end text-xl">
            Get to know about the team working
            <br />
            and building things!
          </p>
          <button
            onClick={handleClick}
            className="md:mx-0 py-4 px-12 rounded-full hover:bg-[#FF6C22]"
          >
            View all
          </button>
        </div>
      </div>
    </>
  );
}

export default begin;
