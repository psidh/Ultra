import Image from 'next/image';
export default function Faq() {
  const faqClass = `text-center w-full mx-16 md:mx-0 border-teal-400 hover:bg-teal-300 hover:text-black mt-4 p-2  rounded-md transition duration-300 border`;
  return (
    <div className='flex min-h-fit items-center justify-center'>
      <div className="w-4/5 flex flex-col md:flex-row justify-between mx-10 items-center">
        <Image src="/faq.svg" width={500} height={500} alt="StorySet FAQ" />
        <div className="my-4 flex flex-col items-center justify-center">
          <h3>
            Have Doubts? 
          </h3>
          <h4>Don't worry, hop into FAQs section</h4>
          <a href="/faqs" className={faqClass}>FAQs</a>
        </div>
      </div>
    </div>
  );
}
