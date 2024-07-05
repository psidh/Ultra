function About() {
  // const cardClass = `p-4 md:w-1/2 lg:w-2/3 bg-[#1b1b1b] rounded-xl text-[#dcdcdc] border border-gray-700 m-2 md:m-0`;

  return (
    <div className="flex flex-col items-center justify-center h-fit w-full">
      <div className="w-full">
        <h2 className="text-5xl lg:text-7xl font-semibold p-16 border-b-[1px] border-black">
          Welcome to Ultra
        </h2>
        <div className="flex justify-center border-b-[1px] border-black items-center flex-col md:flex-row w-ful text-lg text-white font-thin">
          <div className="py-16 pb-24 bg-[#10439F] hover:bg-white hover:text-black transition-all duration-300 grow flex flex-col items-center justify-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 uppercase">
                Mentoring
              </h3>
              <p className="w-[28ch]">
                Empowering students by providing resources, mentorship, and a
                platform to unleash their full potential.
              </p>
            </div>
          </div>

          <div className="py-16 pb-24 bg-[#874CCC] border-x-[1px] border-black hover:bg-white hover:text-black transition-all duration-300 grow flex flex-col items-center justify-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 uppercase">
                Diverse Domains
              </h3>
              <p className="w-[28ch]">
                Foster development skills across diverse tech domains - from
                frontend magic to backend wizardry, and beyond!
              </p>
            </div>
          </div>
          <div className="py-16 pb-24 bg-[#C65BCF] hover:bg-white hover:text-black transition-all duration-300 grow flex flex-col items-center justify-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 uppercase">
                Build Apps
              </h3>
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
