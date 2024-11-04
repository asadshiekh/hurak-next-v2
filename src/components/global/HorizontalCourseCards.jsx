import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { GoOrganization } from "react-icons/go";
import { VscSymbolMethod } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

const HorizontalCourseCards = () => {
  return (
    <div className='border-b py-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='md:col-span-1'>
            <Image src='/images/sia-card.webp'
               alt="CSCS Green Card Certiciate" 
               layout="intrinsic" 
               width={250} 
               height={50} 
               loading="lazy" 
               className='rounded-md'
               />
            </div>
            <div className='md:col-span-3'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                    <div className='col-span-3'>
                        <h4 className='text-xl font-semibold mb-1'>SIA Door Supervisor Training Course</h4>
                        <p className='mb-2 text-lg'>The Door Supervisor Training Course unlocks UK job opportunities for you as a legal Door Supervisor ...</p>
                        <ul className='flex space-x-5'>
                            <li><GoOrganization className='inline-block'/> 14 Course providers</li>
                            <li><VscSymbolMethod className='inline-block'/> Classroom</li>
                        </ul>
                    </div>
                    <div className='col-span-1 md:text-right'>
                        <p className='text-xl mb-3'>From <strong>£199.99</strong></p>
                        <p className='text-sm'><del>£249.99</del> 20% Off</p>
                    </div>
                </div>
                <div className='md:text-right mt-3'>
                    <Link href="#" className='text-primary px-5 py-3 rounded-md border border-primary transition duration-300 ease-in-out text-base mr-2'>
                        <RiExternalLinkLine className='inline-block mt-[-4px] mr-1' />More details
                    </Link>
                    <Link href="/" className="bg-secondary text-white text-md font-bold px-5 py-3 rounded-md border hover:bg-transparent hover:border-1 hover:border-secondary hover:text-black transition duration-300 ease-in-out text-base">
                        <BsCart2 className='inline-block mt-[-5px] mr-1' /> Add to basket
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HorizontalCourseCards