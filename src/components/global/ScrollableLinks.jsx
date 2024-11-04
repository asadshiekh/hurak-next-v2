import Link from 'next/link'
import React from 'react'

function ScrollableLinks() {
  return (
    <div className="w-full overflow-x-auto shadow-md custom-scrollbar">
      <ul className="list-none flex space-x-5 whitespace-nowrap py-3">
        <li className="whitespace-nowrap text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/cscs-card-application" className="text-black">
            Example 1
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/aplh-personal-licence-application" className="text-black">
            Example 2
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/security-guard-licence" className="text-black">
            Example 3
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/door-supervisor-licence" className="text-black">
            Example 4
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/close-protection-licence" className="text-black">
            Example 5
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/cctv-licence" className="text-black">
           Example 6
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/premises-licence" className="text-black">
          Example 7
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex  text-main-color">
          <Link href="https://hurak.com/licences/occasional-licence" className="text-black">
          Example 8
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 9
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 9
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 10
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 11
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 12
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 13
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 14
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 14
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 15
          </Link>
        </li>
        <li className="whitespace-nowrap mr-[25px] text-[16px] flex text-main-color">
          <Link href="https://hurak.com/licences/forklift-licence" className="text-black">
          Example 16
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ScrollableLinks
