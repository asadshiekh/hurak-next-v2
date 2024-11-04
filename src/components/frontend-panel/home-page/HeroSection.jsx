import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
function HeroSection() {
  return (
    <section className="banner-sec">
      {/* Banner Section for small screens */}
      <div className="block md:hidden h-[200px] sm:h-[300px] text-center bg-homebanner bg-no-repeat bg-right bg-cover"></div>

      {/* Banner Section for medium and large screens */}
      <div className="container relative hidden md:block mx-auto h-[200px] sm:h-[300px] md:h-[400px] xl:h-[400px] text-center bg-homebanner bg-no-repeat bg-right bg-cover">
        {/* Find Your Course Section */}
        <div className="bg-white p-8 mx-auto mt-3 sm:relative sm:w-[90%] md:w-[400px] lg:w-[430px] xl:w-[430px] lg:mt-0 lg:ml-[70px] lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 text-left">
          <h3 className="text-4xl font-bold">Find your course</h3>
          <p className="mt-2 text-xl text-gray-500">Choose from our virtual, classroom or online courses.</p>
          <a href="https://hurak.com/courses" className="flex justify-start items-center text-primary mt-3">
            <span className="text-md">Search for Courses <FaArrowRight className='inline-block' /></span>
            <i className="las la-arrow-right ml-2"></i>
          </a>

          <div className="trust-box mt-3">
            <a href="https://uk.trustpilot.com/review/hurak.com" className="block">
              <img className="w-32" src="https://hurak.com/public/front_panel_assets/images/trust-pilot.svg" loading="lazy" alt="Trustpilot" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
