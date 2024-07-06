function Ocean() {
  return (
    <div className="w-full lg:w-1/2 pb-6 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-xl px-4 lg:px-12">
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">Ocean of</h3>
          <h3 className="mt-4 text-3xl lg:text-6xl font-semibold">
            Opportunities
          </h3>
          <p className="mb-12 mt-8">
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
        <div className="skills-container w-full text-2xl uppercase font-medium opacity-20">
          <div className="skills-scroll-left whitespace-nowrap">
            <p className="skill-item inline-block">
              react • next.js • express • flutter • javascript •&nbsp;
            </p>
            <p className="skill-item inline-block">
              react • next.js • express • flutter • javascript •&nbsp;
            </p>
          </div>
          <div className="skills-scroll-right whitespace-nowrap mt-8">
            <p className="skill-item inline-block">
              mongodb • ethereum • devops • terraform •&nbsp;
            </p>
            <p className="skill-item inline-block">
              mongodb • ethereum • devops • terraform •&nbsp;
            </p>
          </div>
          <div className="skills-scroll-left whitespace-nowrap mt-8">
            <p className="skill-item inline-block">
              cloud • tensorflow • linux • docker • AWS •&nbsp;
            </p>
            <p className="skill-item inline-block">
              cloud • tensorflow • linux • docker • AWS •&nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ocean;