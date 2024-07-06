import Image from "next/image";
interface SkillCategory {
  category: string;
  image: string;
  skills: string;
  link: string;
}

const skillsData: SkillCategory[] = [
  {
    category: "Front End",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    skills: "React",
    link: "https://react.dev/",
  },
  {
    category: "Back End",
    image: "/back-end.png",
    skills: "Spring",
    link: "https://spring.io/",
  },
  // {
  //   category: "Full Stack",
  //   image: "/next.png",
  //   skills: "NextJs",
  //   link: "https://nextjs.org/",
  // },
  {
    category: "ML DL",
    image: "/ml.png",
    skills: "TensorFlow",
    link: "https://www.tensorflow.org/",
  },
  {
    category: "App Dev",
    image: "/flutter.png",
    skills: "Flutter",
    link: "https://flutter.dev/",
  },
  {
    category: "DevOps",
    image: "/devops.png",
    skills: "Github",
    link: "https://github.com",
  },
  {
    category: "Cloud",
    image: "/cloud.webp",
    skills: "GCP",
    link: "https://cloud.google.com/",
  },
  // {
  //   category: "BlockChain",
  //   image: "/eth.svg",
  //   skills: "Ethereum",
  //   link: "https://ethereum.org/en/",
  // },
];

function renderSkillCategory(category: SkillCategory) {
  return (
    <div
      key={category.category}
      className="flex flex-col justify-between items-center  
      rounded-xl text-white bg-[#2B3499] hover:bg-white hover:text-black p-4 aspect-square transition-all duration-300 border-black hover:border group"
    >
      <p className="text-md md:xl mb-4 text-center">{category.category}</p>

      <div className="flex flex-col items-center justify-center w-full mb-4">
        <Image
          src={category.image}
          alt={category.category}
          width={50}
          height={50}
          className="fill-white stroke-white"
        />
      </div>

      <div className="text-center my-2">
        <a
          href={category.link}
          target="_blank"
          rel="noreferrer"
          className="py-2 px-6 text-xs md:text-md border bg-white group-hover:bg-[#FF6C22]
           rounded-lg text-center text-black group-hover:text-white
          "
          key={category.skills}
        >
          Join Group
        </a>
      </div>
    </div>
  );
}

function Ocean() {
  return (
    <div className="w-full lg:w-1/2 pb-6">
      <div className="flex flex-col justify-center items-center">
        <div className="w-max mr-auto px-12">
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">Ocean of</h3>
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">
            Opportunities
          </h3>
          <p className="mb-12  mt-8 w-[36ch]">
            Embark on an extraordinary coding journey with us.
            <br />
            We are not just a community, we are an ecosystem of
            <br />
            <br />
            <span className="font-medium text-lg">
              Dreamers | Learners | Developers
            </span>
          </p>
        </div>
        <div>
          <div className="text-2xl w-max uppercase font-medium tracking-widest opacity-20 space-y-8">
            <p className="">
              react • next.js • express • flutter • tailwind css • javascript
            </p>
            <p className="">
              compose • mongodb • ethereum • devops • terraform
            </p>
            <p className="">
              github • cloud • tensorflow • linux • vm • docker • AWS
            </p>
          </div>
        </div>
        {/* <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((category) => renderSkillCategory(category))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Ocean;
