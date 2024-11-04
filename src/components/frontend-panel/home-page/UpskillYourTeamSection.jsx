import Image from 'next/image';


const UpskillYourTeamSection = () => {
  return (
    <section className="add-sec pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">

          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mb-8 lg:mb-0">
            <div className="add-details">
              <div className="flex justify-center lg:justify-start">
                <Image 
                  src="/images/hurak-business-blue.png" 
                  alt="Hurak Business Logo" 
                  width={200} 
                  height={50} 
                  loading="lazy" 
                />
              </div>
              <h4 className="heading text-2xl font-semibold mb-6">Upskill your team with Hurak Business</h4>
              <ul className="pl-4 text-left list-disc list-inside  w-full md:w-4/5">
                <li className='text-xl mb-6'>Save time and hassle by managing all your customer data in one place.</li>
                <li className='text-xl mb-6'>Spend less time worrying about managing your team and more time growing your business.</li>
                <li className='text-xl mb-6'>Its free! You can use it as much or as little as you want.</li>
              </ul>
          
              <a className="mt-4 px-4 py-3 border border-black text-white bg-black hover:bg-transparent hover:border-1 hover:text-black transition">
              Get Hurak Business
              </a>

            </div>
          </div>

          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <Image 
              src="/images/upskill-image.webp" 
              alt="Upskill your team with Hurak Business" 
              layout="responsive" 
              width={500} 
              height={300} 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpskillYourTeamSection;
