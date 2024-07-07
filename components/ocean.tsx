import { Plus_Jakarta_Sans } from "next/font/google";
const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

function Ocean() {
  return (
    <div className="w-full lg:w-1/2 pb-6 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-xl px-4">
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">Ocean of</h3>
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">
            Opportunities
          </h3>
          <p className="mt-8 w-[40ch] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl
            mi, ultricies nec mi sit amet, fermentum ullamcorper sapien. Nulla
            convallis posuere tellus non dictum.
            <br />
          </p>
        </div>
        <div
          className={`${"mt-12 skills-container w-full text-2xl uppercase font-medium opacity-20"} ${
            inter.className
          }`}
        >
          <div className="skills-scroll-left whitespace-nowrap">
            <p className="skill-item inline-block">
              react • next.js • express • flutter • javascript • angular •
              &nbsp;
            </p>
            <p className="skill-item inline-block">
              react • next.js • express • flutter • javascript • angular •
              &nbsp;
            </p>
          </div>
          <div className="skills-scroll-right whitespace-nowrap mt-8">
            <p className="skill-item inline-block">
              mongodb • ethereum • devops • terraform • compose • swift • &nbsp;
            </p>
            <p className="skill-item inline-block">
              mongodb • ethereum • devops • terraform • compose • swift • &nbsp;
            </p>
          </div>
          <div className="skills-scroll-left whitespace-nowrap mt-8">
            <p className="skill-item inline-block">
              cloud • tensorflow • linux • docker • AWS • github • &nbsp;
            </p>
            <p className="skill-item inline-block">
              cloud • tensorflow • linux • docker • AWS • github • &nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ocean;
