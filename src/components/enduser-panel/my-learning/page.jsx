
'use client';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegStar , FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import { IoIosClose , IoMdStar } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";


const MyLearning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);


  const students = [
    { id: 1, course: 'Traffic Banksman (Traffic Marshal) Training Course', demand: 'On demand', provided_by: 'Hurak Learning' , booking: 'Booking reference 000016444 placed on Fri Sep 20 2024'},
    { id: 2, course: 'Security Courses', demand: 'bob@example.com', provided_by: 'Hurak Learning' , booking: 'Booking reference 000016444 placed on Fri Sep 20 2024' },
  ];



  return (
    <div>
      {/* Heading Section */}
      <div className='text-white py-12 mb-10' style={{ backgroundColor: "#505763" }}>
        <div className=' lg:m-auto lg:p-0 pl-6 w-3/5'>
          <p className='text-3xl'>My learning</p>
        </div>
      </div>

      {/* Banner Section Start */}
      {students.map((student) => (
        <div key={student.id} className='ml-16 lg:ml-auto md:ml-auto m-auto lg:w-3/6 md:w-3/4 w-3/4 border my-5 rounded-tl-lg shadow-xl mb-10'>
          <div className='border-b relative'>
            <div className='w-full md:flex flex-row md:flex-nowrap flex-wrap'>
              <div>
              <div className='absolute ' style={{left:"-40px",top: '50%',transform: 'translate(-50%, -50%)'}}>
              <p className='text-red-600'>Sep</p>
              <p className='font-bold ml-2 text-xl text-gray-500'>5</p>
            </div>
            <Image 
                src="/images/aa.webp" 
                alt="" 
                // layout="responsive" 
                width={200}  // Sets the width of the image on larger screens
                height={130} // Adjust this to match your desired aspect ratio
                className="w-full md:h-full md:w-[220px] rounded-tl-lg" 
                loading="lazy"/>
              </div>
              <div className='pl-3 pt-3 border w-full'>
                <div className='flex justify-between items-start'>
                  <h1 className='text-xl'>{student.course}</h1>
                  <div className='relative'>
                    <button id="dropdownDefaultButton" onClick={() => setIsOpen(!isOpen)}
                      className="text-black focus:outline-none font-medium rounded-lg pr-3 text-xl text-center inline-flex items-center"
                      type="button">
                      <BsThreeDotsVertical />
                    </button>
                    <div id="dropdown"
                      className={`${isOpen ? 'block' : 'hidden'} border absolute right-10 top-0 z-10 bg-white divide-y rounded-md shadow w-48`}>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li><a href="#" className="block  py-2 px-3 text-black hover:bg-gray-100 dark:hover:bg-gray-200 flex text-lg font-light"><IoDocumentOutline  className='mt-1 mr-2'/> <span> Course Timeline </span> </a></li>
                        <li><a href="#" className="block  py-2 px-3 text-black hover:bg-gray-100 dark:hover:bg-gray-200 flex text-lg font-light"><IoDocumentOutline  className='mt-1 mr-2'/> <span> View Policies </span> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className='text-md'>{student.demand}</p>
                <p className='text-xs'>provided by <span className='font-bold'>{student.provided_by}</span></p>
                <p className='text-xs text-slate-500'>{student.booking}</p>
                <button className='text-primary lg:text-sm  md:text-sm text-md font-medium flex'>Enter my course&nbsp; <FaArrowRightLong className='lg:mt-1 md:mt-1 mt-2'/></button>
              </div>
            </div>
           <div className='py-4 px-4 flex items-center cursor-pointer hover:text-primary' onClick={openModal}>
         <FaRegStar className="text-slate-600 text-md inline-block mr-2 text-xl hover:text-primary" /><span className='mt-1'> Rate and review your course</span>
      </div>
          </div>
        </div>
      ))}

      {/* Review Modal Start */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
         
          <div className="bg-white p-6 rounded-lg shadow-lg  max-w-3xl border-3" style={{width:"100%"}}>
          <div className='flex items-center justify-between pb-3 mb-3 border-b-2'>
            <div><h1 className='text-xl'>Course Review</h1></div>
            <div>
              <button onClick={closeModal}>
              <IoIosClose className='text-2xl text-gray-500 font-bold'/>
            </button>
            </div>
          </div>

          {/* start content */}
          <div className='flex'>
            
            <div className="">
            <Image 
            className='w-16 h-16  rounded-full object-cover border'
              src="/images/upskill-image.webp" 
              alt="Upskill your team with Hurak Business" 
              layout="" 
              width={90} 
              height={50} 
              loading="lazy" />
          </div>
            
            <div className='ml-3 mt-2'>
              <h2 className='font-bold'>User Review</h2>
              <p className='flex'>Posting Publicity <CiCircleInfo className='ml-1 mt-1'/></p>
            </div>

          </div>


          <div className='flex justify-center items-center text-yellow-500 text-5xl w-full '>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          </div>

          <div>
            <textarea  placeholder='Share details of your own experience of this course.' className='w-full border px-2 py-2 my-4 ' rows="4" cols="5" >
              
            </textarea>
          </div>
          <div className='flex justify-end items-end w-full '>
            <button className='bg-primary rounded-sm py-2 px-5 text-white font-medium'>POST</button>
            </div>

           {/* End content */}
           
            
          </div>
        </div>
      )}
 {/* Review Modal Start */}

    </div>

  );
}

export default MyLearning;
