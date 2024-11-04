import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <footer>

      <div className="flex flex-wrap lg:flex-row justify-between items-center border-t py-8">
        {/* Left side: Text */}
        <div className="lg:mb-0 lg:w-1/2 text-center lg:text-left px-5">
          <h3 className="lg:text-xl md:text-xl text-lg mb-2 font-semibold">Trusted by companies big and small.</h3>
        </div>
        
        {/* Right side: Logos */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 lg:space-x-5 md:space-x-5 ">
          <img src="/images/brand1.webp" alt="Crisis" className="lg:w-auto md:w-auto w-1/5 h-auto object-contain" />
          <img src="/images/brand2.webp" alt="Giorgio Armani" className=" lg:w-auto md:w-auto w-1/4 h-auto object-contain " />
          <img src="/images/brand4.webp" alt="Balfour Beatty" className="lg:w-auto md:w-auto  w-1/4 h-auto object-contain" />
          <img src="/images/brand3.webp" alt="Marks & Spencer" className="lg:w-auto md:w-auto w-1/4 h-auto object-contain" />
        </div>
      </div>

      {/* <div className="container mx-auto px-5 lg:px-20"> */}
        {/* Top section with logos */}

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100">
          <div className='p-6'>
            <h4 className="font-semibold text-xl mb-4">Find a Course</h4>
            <ul className="space-y-2 mb-4">
              <li>All Courses</li>
              <li>Classroom Courses</li>
              <li>On Demand Courses</li>
              <li>Live Online Courses</li>
              <li>Advertise on hurak</li>
            </ul>
            <h4 className="font-semibold text-xl mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className='p-6'>
            <h4 className="font-semibold text-xl mb-4">Popular Categories</h4>
            <ul className="space-y-2 mb-4">
              <li>CITB Site Safety Plus</li>
              <li>Personal Licence</li>
              <li>First Aid</li>
              <li>Health & Safety</li>
              <li>Security</li>
            </ul>
            <h4 className="font-semibold text-xl mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="test-prep">Test Prep</Link></li>
              <li><Link href="#">Hurak Business</Link></li>
            </ul>
          </div>

          <div className='p-6'>
            <h4 className="font-semibold text-xl mb-4">Popular Courses</h4>
            <ul className="space-y-2 mb-4">
              <li>CSCS Green Card Training</li>
              <li>Personal Licence</li>
              <li>Traffic Marshal</li>
              <li>Emergency First Aid at Work</li>
              <li>First Aid at Work Training</li>
              <li>Door Supervisor Training</li>
            </ul>
            <h4 className="font-semibold text-xl mb-3">More</h4>
            <ul className="space-y-2">
              <li><Link href="#">List Your Course</Link></li>
              <li><Link href="#">Skill Saver Program</Link></li>
              <li><Link href="#">Provider Skill Saver Program</Link></li>
              <li><Link href="#">Verify Certificate</Link></li>
              <li><Link href="#">Listed Training Providers</Link></li>
            </ul>
          </div>

          <div className='bg-[#ededed] p-6'>
            <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
            <p className="mb-4 text-lg">0333 344 1293</p>
            <h5 className="font-semibold text-2xl mb-3">Head Office Address</h5>
            <p className="text-lg">
              10 Tiller Rd, <br />
              London, <br />
              E14 8PX
            </p>
            <div className="flex flex-wrap space-x-6 mb-8 border-t border-gray-300 pt-4 mt-4">
              <a href="#" className="text-primary">
                <FaFacebookF size={25} className='text-[#1877F2]' />
              </a>
              <a href="#" className="text-[#1DA1F2]">
                <FaTwitter size={25}/>
              </a>
              <a href="#" className="text-[#0077B5]">
                <FaLinkedinIn size={25} />
              </a>
              <a href="#" className="text-[#FF0000]">
                <AiOutlineYoutube size={25} />
              </a>
              <Link href="#" className="text-[#FCAF45]">
                  <FaInstagram size={25} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 py-3 bg-[#CFD2D3] px-6">
          <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
              <Link href="/">
              <img
                src="/images/hurak-logo.webp"
                alt="Logo"
                className="cursor-pointer w-28"
              />
            </Link>
            </div>
            <div className='space-x-6 text-right text-lg'>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>
          </div>
          
        </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
