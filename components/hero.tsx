function Hero() {
  return (
    <section>
      <div className="h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="bg-white w-full sm:w-1/2  h-screen flex flex-col justify-center items-center ">
          <p className="text-3xl md:text-6xl text-black font-montserrat mb-1">
            Perform duties, <br /> detach from results{' '}
          </p>
        </div>

        <div className="w-full sm:w-1/2  h-screen flex flex-col justify-center items-center">
          <p
            className="text-3xl md:text-6xl text-transparent 
        bg-clip-text bg-gradient-to-b from-white to-gray-600 font-montserrat italic p-2"
          >
            Bhagavad Gita{' '}
          </p>
          <p className="text-3xl md:text-5xl text-gray-300 font-montserrat italic mt-2">
            2.47
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
