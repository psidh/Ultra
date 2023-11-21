function Hero() {
  return (
    <section>
      <div className="h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="bg-white w-full sm:w-1/2  h-screen flex flex-col justify-center items-center ">
          <h1 className='text-black lg:text-6xl'>
            Perform duties, <br /> detach from results{' '}
          </h1>
        </div>

        <div className="w-full sm:w-1/2  h-screen flex flex-col justify-center items-center">
          <h2 className='italic pb-2'>
            Bhagavad Gita{' '}
          </h2>
          <h2>
            2.47
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
