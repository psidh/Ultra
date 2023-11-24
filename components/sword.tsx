
const SwordAnimation = () => {
  return (
    <div className='w-full relative'>
      <figure className='w-[50px] h-[50px] animate-slide'>
        <img
          src='/sword.png'
          alt='sword-icon'
          className='w-full h-full animate-spin'
        />
      </figure>
    </div>
  );
};


export default SwordAnimation;