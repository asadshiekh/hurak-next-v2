import React from 'react'
import Image from 'next/image';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';

export default function PricingHeaderSmallScreen() {
  return (
    <>
      
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Menu Icon */}
      <div className="text-2xl">
        <FiMenu />
      </div>

      {/* Hurak Logo */}
      <div className="flex text-center justify-center items-center">
        <Image
          src="/images/hurak-logo.webp" // replace with your actual image path
          alt="Hurak Logo"
          width={100}
          height={40}
        />
      </div>

      {/* Search and Cart Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <FiSearch className="text-2xl" />

        {/* Cart Icon with Notification Badge */}
        <div className="relative">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute top-[-12px] right-[-5px] inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
            1
          </span>
        </div>
      </div>
    </header>

    </>
  )
}
