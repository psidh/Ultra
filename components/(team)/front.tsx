import { FiArrowUpRight } from "react-icons/fi";
import {
  executive,
  frontendTeam,
  machineLearningTeam,
} from "../../utils/front.js";
import Line from "../line";
import Link from "next/link.js";

interface Person {
  name: string;
  image: string;
  role: string;
  url: string;
}

const Front: React.FC = () => {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold my-8 text-center">Our Team</h1>
      <div className="flex items-center justify-center md:space-x-16 h-fit">
        <div className="my-8 md:my-16 flex flex-col items-center justify-between">
          <img
            src="/team/me.jpeg"
            alt="P Sidharth image"
            className="w-32 h-32 md:h-44 md:w-44  object-cover rounded-full mb-4 text-center"
          />
          <h2 className="text-xl font-semibold text-center">
            Philkhana Sidharth
          </h2>
          <p className="text-neutral-500 text-center mt-2">
            Founder
            <br />
            Full Stack Developer
          </p>
        </div>
        <div className="my-16 flex flex-col items-center justify-between">
          <img
            src="/team/manas.png"
            alt="Manas Malla image"
            className="w-32 h-32 md:h-44 md:w-44 object-cover rounded-full mb-4 text-center"
          />
          <h2 className="text-xl font-semibold text-center">Manas Malla</h2>
          <p className="text-neutral-500 text-center mt-2">
            Chief Technical Officer <br /> Google Product Expert - Android
          </p>
        </div>
      </div> */}
      <h2 className="text-2xl md:text-4xl font-bold py-12 px-16 border-y-[1px] border-black">
        Executive Team
      </h2>
      {/* <Line /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
        {executive.map((person) => (
          <div
            key={person.name}
            className="shrink-0 grow even:border-x-[1px] border-black flex flex-col justify-center w-full"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-44 md:h-72 object-cover mb-4"
            />
            <div className="p-4 flex">
              <div>
                <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                  {person.name}
                </h2>
                <p className="opacity-70 font-light whitespace-pre-wrap">
                  {person.role}
                </p>
              </div>
              <Link className="ml-auto" href={person.url}>
                <FiArrowUpRight size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl md:text-4xl font-bold py-12 px-16 border-t-[1px] border-black">
        Front-End Development
      </h2>
      {/* <Line /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
        {frontendTeam.map((person) => (
          <div
            key={person.name}
            className="shrink-0 grow border-y even:border border-black flex flex-col justify-center w-full"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-44 md:h-72 object-cover mb-4 border-b-[1px] border-black"
            />
            <div className="p-4 flex">
              <div>
                <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                  {person.name}
                </h2>
                <p className="opacity-70 font-light">{person.role}</p>
              </div>
              <Link className="ml-auto" href={person.url}>
                <FiArrowUpRight size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl md:text-4xl font-bold py-12 px-16">
        Machine Learning
      </h2>
      {/* <Line /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full border-[1px] border-black">
        {machineLearningTeam.map((person) => (
          <div
            key={person.name}
            className="shrink-0 grow border-y border border-black flex flex-col justify-center w-full"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-44 md:h-72 object-cover mb-4"
            />
            <div className="p-4 flex">
              <div>
                <h2 className="text-lg md:text-xl font-semibold whitespace-pre-wrap mb-1">
                  {person.name}
                </h2>
                <p className="opacity-70 font-light">{person.role}</p>
              </div>
              <Link className="ml-auto" href={person.url}>
                <FiArrowUpRight size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Front;
