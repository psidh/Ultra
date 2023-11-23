import Image from 'next/image';
interface SkillCategory {
  category: string;
  image: string;
  skills: string;
  link: string;
}

const skillsData: SkillCategory[] = [
  {
    category: 'Front End',
    image: '/front-end.png',
    skills: 'React',
    link: 'https://react.dev/',
  },
  {
    category: 'Back End',
    image: '/back-end.png',
    skills: 'Spring',
    link: 'https://spring.io/',
  },
  {
    category: 'Full Stack',
    image: '/next.png',
    skills: 'NextJs',
    link: 'https://nextjs.org/',
  },
  {
    category: 'ML DL',
    image: '/ml.png',
    skills: 'TensorFlow',
    link: 'https://www.tensorflow.org/',
  },
  {
    category: 'App Dev',
    image: '/flutter.png',
    skills: 'Flutter',
    link: 'https://flutter.dev/',
  },
  {
    category: 'DevOps',
    image: '/devops.png',
    skills: 'Github',
    link: 'https://github.com',
  },
  {
    category: 'Cloud',
    image: '/cloud.webp',
    skills: 'GCP',
    link: 'https://cloud.google.com/',
  },
];

function renderSkillCategory(category: SkillCategory) {
  return (
    <div
      key={category.category}
      className="flex flex-col justify-between items-center border 
      rounded-xl border-gray-600 bg-[#1d1d1d] p-4 
      transition duration-300 "
    >
      <p className="text-md md:text-xl lg:text-2xl mb-4 text-center">
        {category.category}
      </p>

      <div className="flex flex-col items-center justify-center w-full my-4">
        <Image
          src={category.image}
          alt={category.category}
          width={50}
          height={50}
          className=""
        />
      </div>

      <div className="text-center mt-4">
        <a
          href={category.link}
          target="_blank"
          rel="noreferrer"
          className="py-1 px-4 text-xs md:text-lg border 
          border-gray-600 rounded-lg text-center 
          hover:bg-white hover:text-black transition duration-300
          "
          key={category.skills}
        >
          {category.skills}
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="h-fit mb-8 lg:mb-32">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-32">
        <div className="bg-white text-black w-full lg:w-1/2 h-screen flex flex-col justify-center items-center px-8 lg:px-24">
          <h1 className="text-4xl md:text-6xl  text-center">
            Perform duties, <br /> detach from results{' '}
          </h1>
          <h2 className="pb-2 text-3xl mt-4 lg:mt-8">Bhagavad Gita</h2>
          <h2 className="text-2xl lg:text-4xl">2.47</h2>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col justify-center items-center">
            <h3 className="my-24 text-3xl lg:text-5xl font-semibold">
              Ocean of Opportunities
            </h3>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skillsData.map((category) => renderSkillCategory(category))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
