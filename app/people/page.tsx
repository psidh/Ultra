import peopleData from '../../utils/people.js';

interface Person {
  name: string;
  image: string;
  role: string;
}

const people: Person[] = peopleData;

const People: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold my-16 text-center ">Our Team</h1>
      <div className='my-16 flex flex-col items-center justify-between'>
        <img
          src="/people/me.jpeg"
          alt="P Sidharth image"
          className="w-32 h-32 object-cover rounded-full mb-4 text-center"
        />
        <h2 className="text-xl font-semibold text-center">P Sidharth</h2>
        <p className="text-gray-500 text-center">
          Founder | Full Stack Developer
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {people.map((person) => (
          <div key={person.name} className="p-4 rounded-md shadow-md">
            <img
              src={person.image}
              alt={person.name}
              className=" object-cover rounded-full mb-4 text-center"
            />
            <h2 className="text-xl font-semibold text-center">{person.name}</h2>
            <p className="text-gray-500 text-center">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
