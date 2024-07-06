import { FiArrowRight } from "react-icons/fi";

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-fit w-full">
      <div className="w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold p-16 border-b-[1px] border-neutral-200">
          Welcome to Ultra
        </h2>
        <div className="flex justify-between border-b-[1px] border-neutral-200 items-center flex-col md:flex-row w-ful text-lg text-white font-thin">
          <div className="bg-[#10439F] about">
            <div>
              <div className="flex justify-between w-full">
                <h3 className="text-3xl font-semibold mb-6 uppercase">
                  Mentoring
                </h3>
                <FiArrowRight size={24} />
              </div>
              <p className="w-[28ch]">
                Empowering students by providing resources, mentorship, and a
                platform to unleash their full potential.
              </p>
            </div>
          </div>
          <div className="bg-[#874CCC] border-x-[1px] border-[#874CCC] about">
            <div>
              <div className="flex justify-between w-full">
                <h3 className="text-3xl font-semibold mb-6 uppercase">
                  Diverse Domains
                </h3>
                <FiArrowRight size={24} />
              </div>

              <p className="w-[28ch]">
                Foster development skills across diverse tech domains - from
                frontend magic to backend wizardry, and beyond!
              </p>
            </div>
          </div>
          <div className="bg-[#C65BCF] about">
            <div>
              <div className="flex justify-between w-full h-max">
                <h3 className="text-3xl font-semibold mb-6 uppercase">
                  Build Apps
                </h3>
                <FiArrowRight size={24} />
              </div>

              <p className="w-[28ch]">
                Dive into real-world projects, gain experience, and transform
                theoretical knowledge into practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
