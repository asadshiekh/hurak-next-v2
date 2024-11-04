import React from 'react'
import Breadcrumbs from '@/components/frontend-panel/course-page/Breadcrumbs';
import CourseSlider from './CourseSlider';
import Link from 'next/link';

const CourseBanner = () => {
  const categories = [
    { name: 'Security', link: '#' },
    { name: 'Top up for Door Supervisors', link: '#' },
    { name: 'SIA Top-Up Training For Door Supervisors', link: '#' },
  ];

  return (
    <div>
         <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        {/* Image Section */}
       
        <CourseSlider />
      
        {/* Text Section */}
        <div className="w-full md:w-[60%] md:order-1">
        <Breadcrumbs categories={categories} />
          <h1 className="text-3xl font-medium mb-4 mt-4">SIA Top-Up Training For Door Supervisors</h1>
          <p className="text-[20px] mb-4 w-full md:w-[90%]">
            The SIA Top-Up Training for Door Supervisors Upskilling Course is aimed at individuals already working in the industry as Door Supervisors who need to renew their license after 1st October 2022.
          </p>
          <p className="text-[12px] text-black mb-5 font-medium">16 Course Provider</p>
          <p className="text-xl font-medium mb-2">From £99.99 <span className="text-sm text-gray font-light">All inc</span></p>
          <p className="text-sm mb-4"><span className="line-through">£139.99</span> 29% Off</p>
          <Link href="pricing-plans" className="text-xl font-medium bg-secondary text-white px-6 py-3 rounded-md hover:bg-blue-600">Book Now</Link>
          
          <div className="mt-4">
            <p className="text-sm">
              4.8 
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="underline">(1136 ratings)</span>
              <span className="text-gray font-light ml-2">2,782 students enrolled</span> 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseBanner