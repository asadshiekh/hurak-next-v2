import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { BsCartDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/hurak-logo.webp"
              alt="Logo"
              width={100}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-10 ml-8 mr-3 text-medium">
          <Dropdown
          label="Courses"
          links={[
            {
              label: 'Business Management',
              href: '/course',
              subLinks: [
                { label: 'Leadership', href: '/course' },
                { label: 'Marketing', href: '/course' },
                { label: 'Project Management', href: '/course' },
                { label: 'Human Resources', href: '/course' },
              ],
            },
            {
              label: 'IT & Software',
              href: '/course',
              subLinks: [
                { label: 'Web Development', href: '/course' },
                { label: 'Data Science', href: '/course' },
                { label: 'Cybersecurity', href: '/course' },
                { label: 'Mobile App Development', href: '/course' },
              ],
            },
            {
              label: 'Health & Safety',
              href: '/course',
              subLinks: [
                { label: 'Workplace Safety', href: '/course' },
                { label: 'First Aid Certification', href: '/course' },
                { label: 'Food Safety', href: '/course' },
              ],
            },
            {
              label: 'Design & Creativity',
              href: '/course',
              subLinks: [
                { label: 'Graphic Design', href: '/course' },
                { label: 'Web Design', href: '/course' },
                { label: 'Photography', href: '/course' },
              ],
            },
            {
              label: 'Finance & Accounting',
              href: '/course',
              subLinks: [
                { label: 'Financial Analysis', href: '/course' },
                { label: 'Taxation', href: '/course' },
                { label: 'Investment Management', href: '/course' },
              ],
            },
            {
              label: 'Marketing',
              href: '/course',
              subLinks: [
                { label: 'Digital Marketing', href: '/course' },
                { label: 'Content Marketing', href: '/course' },
                { label: 'SEO Optimization', href: '/course' },
              ],
            },
            {
              label: 'Language Learning',
              href: '/course',
              subLinks: [
                { label: 'Spanish', href: '/course' },
                { label: 'French', href: '/course' },
                { label: 'Mandarin', href: '/course' },
              ],
            },
            {
              label: 'Personal Development',
              href: '/course',
              subLinks: [
                { label: 'Time Management', href: '/course' },
                { label: 'Public Speaking', href: '/course' },
                { label: 'Stress Management', href: '/course' },
              ],
            },
            {
              label: 'Data Analysis',
              href: '/course',
              subLinks: [
                { label: 'Excel for Data Analysis', href: '/course' },
                { label: 'SQL for Data Science', href: '/course' },
                { label: 'Python for Data Analysis', href: '/course' },
              ],
            },
            {
              label: 'Environmental Science',
              href: '/course',
              subLinks: [
                { label: 'Sustainable Practices', href: '/course' },
                { label: 'Climate Change', href: '/course' },
                { label: 'Conservation Biology', href: '/course' },
              ],
            },
          ]}
          />

          <Link href="/licences" className="text-black hover:text-primary">
            Licences
          </Link>
          <Link href="/locations" className="text-black hover:text-primary">
            Locations
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 mx-6 relative">
          <Link href="#" className='absolute left-3 top-[14px] text-gray-500'>
          <IoSearchOutline fontSize={18}/>
          </Link>
          <input
            type="text"
            placeholder="Search for categories, courses or training providers"
            className="w-full p-3 pl-12 h-[3rem] focus:ring-gray-200 text-medium rounded-full border border-[#929292] bg-[#fbfbf8] text-[#3c3b37] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 mr-6">
          <Link href="/blog" className="text-gray-800 hover:text-primary">
            Blog
          </Link>
          <Link href="/test-prep" className="text-gray-800 hover:text-primary">
            Test Prep
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative mr-8">
          <Link href="/cart">
            <BsCartDash className="h-5 w-5 text-gray-800 hover:text-primary" />
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-2">
          <Link href="/sign-up" className="bg-primary text-white text-lg font-bold px-5 py-2 rounded-md border hover:bg-transparent hover:border-1 hover:border-primary hover:text-black transition duration-300 ease-in-out text-base">
            Sign Up
          </Link>
          <Link href="/log-in" className="bg-secondary text-white text-lg font-bold px-5 py-2 rounded-md border hover:bg-transparent hover:border-1 hover:border-secondary hover:text-black transition duration-300 ease-in-out text-base">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
