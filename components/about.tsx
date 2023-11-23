function About() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen my-32'>
      <div className="text-center text-white  w-2/3">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Welcome to Ultra
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Embark on an extraordinary coding journey with us. 🚀
          <br />
          We are not just a community, we are an ecosystem of Dreamers | Learners | Developers
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="p-4 md:w-1/2 lg:w-2/3">
            <h3 className="text-4xl font-semibold mb-4">Diverse Domains</h3>
            <p>
            Empowering students to reach new heights by providing resources,
              mentorship, and a platform to unleash their full potential.

            </p>
          </div>
          
          <div className="p-4 md:w-1/2 lg:w-2/3">
            <h3 className="text-4xl font-semibold mb-4">Diverse Domains</h3>
            <p>
              Foster development skills across diverse tech domains - from
              frontend magic to backend wizardry, and beyond!
            </p>
          </div>
          <div className="p-4 md:w-1/2 lg:w-2/3">
            <h3 className="text-4xl font-semibold mb-4">Real-world Experience</h3>
            <p>
              Dive into real-world projects, gain hands-on experience, and
              transform theoretical knowledge into practical skills.
            </p>
          </div>
        </div>
      </div>
    </div>


  );
}

export default About;
