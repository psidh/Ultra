import Line from './line';
import Image from 'next/image';

function Ultra() {
  return (
    <section>
      <div
        className="h-screen flex flex-col justify-center 
      md:flex-row md:justify-between items-center md:mx-16"
      >
        <h1 className='mb-16 md:m-0'>
          Be Unique <br /> Be Ultra
        </h1>

        <Image
          src={'/mac.png'}
          width={400}
          height={400}
          alt="mac"
          className="sm:mb-6" // Adjust margin for small screens
        />
      </div>

      <div>
        <Line />
      </div>
    </section>
  );
}

export default Ultra;
