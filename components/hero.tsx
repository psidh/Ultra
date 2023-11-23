import Ocean from './ocean';
function Hero() {
  return (
    <section className="h-fit mb-8 ">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 ">
        <div className="bg-white text-black w-full lg:w-1/2 h-screen flex flex-col justify-center items-center px-8 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-mono text-center">
            Perform duties, <br /> detach from results{' '}
          </h1>
          <h2 className="pb-2 text-3xl mt-4 lg:mt-8">Bhagavad Gita</h2>
          <h2 className="text-2xl lg:text-4xl">2.47</h2>
        </div>
        <Ocean />
      </div>
    </section>
  );
}

export default Hero;
