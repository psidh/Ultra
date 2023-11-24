import SwordAnimation from './sword';

function About() {
  const cardClass = `p-4 md:w-1/2 lg:w-2/3 bg-[#1b1b1b] rounded-xl text-[#dcdcdc] border border-gray-700 m-2 md:m-0`;

  return (
    <div className=" flex flex-col items-center justify-center h-fit my-32">
      <div className="text-center text-white  w-3/4">
        <h2 className="text-5xl lg:text-6xl font-semibold my-16 font-mono">Welcome to Ultra</h2>
        <p className="text-lg md:text-2xl my-16 text-center text-gray-500">
          Embark on an extraordinary coding journey with us. 🚀
          <br />
          We are not just a community, we are an ecosystem of Dreamers |
          Learners | Developers
        </p>
        <div className="my-16 flex justify-center items-center flex-col md:flex-row  lg:space-x-8">
          <div className={cardClass}>
            <h3 className="text-3xl font-semibold mb-4">Mentoring</h3>
            <p>
              Empowering students by providing resources, mentorship, and a
              platform to unleash their full potential.
            </p>
          </div>

          <div className={cardClass}>
            <h3 className="text-3xl font-semibold mb-4">Diverse Domains</h3>
            <p>
              Foster development skills across diverse tech domains - from
              frontend magic to backend wizardry, and beyond!
            </p>
          </div>
          <div className={cardClass}>
            <h3 className="text-3xl font-semibold mb-4">Real-World Apps</h3>
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
