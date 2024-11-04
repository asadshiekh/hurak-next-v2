import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import ScrollableLinks from "@/components/global/ScrollableLinks";
import Navbar from "@/components/global/Navbar";
import Footer from '@/components/global/Footer';

import Link from 'next/link';
function page() {
  return (
    <>
            <Navbar/>
            <ScrollableLinks/>
       <div className="flex items-center justify-center py-5">
      <div className="container mx-auto max-w-md p-6 ">
        <h1 className="text-xl font-bold mb-5 text-center">Log In to Your Hurak Account!</h1>
        <hr className="border-t-2 border-light-300 my-2" />
        

        <div className="space-y-2">
          <button className="w-full flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            <FaFacebookF className="mr-2" /> Sign up with Facebook
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 text-black border border-gray bg-white rounded hover:bg-red-700 hover:text-white">
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
        </div>

    
        <div className="mt-5">
        
          <div className="mb-2">
          
            <div className="flex items-center border border-gray-300 rounded">
              <MdEmail className="ml-2 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 pl-8 border border-gray focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="mb-2">

            <div className="flex items-center border border-gray-300 rounded">
              <MdLock className="ml-2 text-gray-500" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 pl-8 border border-gray focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

 
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-4" />
          <span className="text-sm text-gray-600">
            Yes! I want to get the most out of Hurak by receiving emails with exclusive deals, recommendations and learning tips!
          </span>
        </div>


        <button className="w-full bg-secondary text-white px-4 py-2 rounded-md  border   hover:bg-transparent hover:border-1 hover:border-secondary hover:text-black transition duration-300 ease-in-out text-base">
          Sign Up
        </button>

        <div className="general-content mt-5 text-center w-full mx-auto lg:w-80">
          <p className="text-sm">
            
            <Link href="/" className="text-blue-600 hover:underline"> Sign Up </Link> or 
            <Link href="/" className="text-blue-600 hover:underline"> Forgot Password</Link>.
          </p>

         
          <hr className="border-t-2 border-light-300 my-2" />

          <p className="mt-5 text-sm">
           If you are a course provider please visit our <Link href="/" className="text-blue-600 hover:underline"> Course provider page</Link> to register with us and advertise your courses for free in no time.
          </p>


          <p className="mt-5 text-sm">
          If you are a business please visit our <Link href="/" className="text-blue-600 hover:underline"> Hurak Business page</Link> to register with us and receive exclusive deals and access to your own dashboard to manage your learners.
          </p>
        

        </div>

      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default page