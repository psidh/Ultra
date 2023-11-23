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

function Ocean() {
  return (
    <div className=" flex flex-col sm:flex-col justify-center items-center px-6 min-h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <h3 className="my-12">Ocean of Opportunities</h3>
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-start gap-4">
            {skillsData.map((category) => renderSkillCategory(category))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ocean;
