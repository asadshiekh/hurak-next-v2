"use client"
import { useState } from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi2";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-md">
      <button
        onClick={toggleFAQ}
        className="w-full flex justify-between items-center py-4 focus:outline-none px-3 bg-[#F8F9FA]"
      >
        <span className="text-left text-lg font-medium">{question}</span>
        <span className="text-xl">
          {isOpen ? <HiMinus /> : <HiOutlinePlus />}
        </span>
      </button>
      {isOpen && <p className=" mt-2 px-2 pb-4">{answer}</p>}
    </div>
  );
};

export default FAQItem;
