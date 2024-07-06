import Ocean from "./ocean";
function Hero() {
  return (
    <section className="h-[87vh] border-b-[1.5px] border-black">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full w-full">
        <div className="w-full lg:w-1/2 border-r-[1px] border-black relative overflow-clip h-full">
          <img
            title="homepage_background"
            src="/space/homepage_background.svg"
            className="h-full w-full object-cover"
          />
          <img
            title="stars tiny"
            src="/space/stars-tiny.svg"
            className="h-full w-full object-fill absolute z-10 top-0 left-0 scale-150 opacity-70"
          />
          <img
            title="earth"
            src="/space/earth.svg"
            className="h-full w-full object-fill absolute z-20 -bottom-1/2 -right-1/2"
          />
          <div className="py-32 px-8 lg:px-24 z-30 text-white flex flex-col justify-center items-center absolute top-0 h-full w-full left-0">
            <h1 className="text-5xl md:text-5xl font-bold text-center">
              Perform duties, <br /> detach from results.
            </h1>
            <h2 className="pb-2 text-3xl mt-4 lg:mt-8 opacity-70">
              Bhagavad Gita
            </h2>
            <h2 className="text-lg lg:text-2xl font-mono opacity-50 mb-8">
              2.47
            </h2>
          </div>
        </div>
        <Ocean />
      </div>
    </section>
  );
}

export default Hero;
