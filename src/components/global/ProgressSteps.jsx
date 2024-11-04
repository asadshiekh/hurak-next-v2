import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const ProgressSteps = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <div className="flex items-center justify-center hidden md:block realtive">
        {/* Left Arrow */}

        <Link href="/course" className="text-lg absolute left-[200px]">
          <FaArrowLeft className="text-primary" size={15} />
        </Link>        
        {/* Steps */}
        <div className="flex items-center justify-center space-x-4 ">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">1</div>
            <p className="text-xs md:text-sm font-semibold">SELECT BUNDLE</p>
          </div>
          {/* Line */}
          <div className="w-12 md:w-16 h-1 bg-primary" />

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">2</div>
            <p className="text-xs md:text-sm font-semibold">REVIEW BASKET</p>
          </div>
          {/* Line */}
          <div className="w-12 md:w-16 h-1 bg-primary" />

          {/* Step 3 */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">3</div>
            <p className="text-xs md:text-sm font-semibold">PAY SECURELY</p>
          </div>
        </div>
      </div>

      <div className='relative flex justify-between block md:hidden text-black'>
        <Link href="/course" className="absolute left-0 text-lg">
          <FaArrowLeft className="text-primary" size={15} />
        </Link> 
        <h1 className="text-sm font-medium text-center md:text-left ml-4">
          Level 1 Award In Health and Safety in a Construction Environment Course
        </h1>
      </div>
    </div>
  );
};

export default ProgressSteps;
