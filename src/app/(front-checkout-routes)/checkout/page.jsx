"use client";
import PaymentOptions from "@/components/frontend-panel/check-out/paymentoptions";
import CartSection from "@/components/global/CartSection";
import PricingHeader from "@/components/global/PricingHeader";
import ProgressSteps from "@/components/global/ProgressSteps";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaEnvelope, FaPoundSign, FaBook } from "react-icons/fa";

function page() {
  const [isBusiness, setIsBusiness] = useState(false);

  const [showDetails, setShowDetails] = useState(true);

  // Toggle function for the checkbox
  const handleCheckboxChange = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-white  mt-[50px] mb-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-8">
          {/* Left Section: Billing Details */}
          <div>
            <h2 className="text-2xl font-medium mb-6 text-[#39364f]">
              Billing details
            </h2>
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <label className="flex items-center text-black text-[20px]">
                  <input
                    type="radio"
                    name="customerType"
                    className="mr-3 transform scale-125"
                    onChange={() => setIsBusiness(false)}
                    checked={!isBusiness}
                  />
                  I'm an individual
                </label>

                <label className="flex items-center text-black text-[20px]">
                  <input
                    type="radio"
                    name="customerType"
                    className="mr-3 transform scale-125"
                    onChange={() => setIsBusiness(true)}
                    checked={isBusiness}
                  />
                  I'm a business customer
                </label>
              </div>
            </div>

            <p className="text-[16px] text-black font-normal w-full md:w-[85%] mb-5">
              Choose this option if you are an individual purchasing a course
              for yourself or on behalf of someone else.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                />
              </div>
            </div>

            {isBusiness && (
              <div className="mt-6">
                <h3 className="text-2xl font-medium mb-6 text-[#39364f]">
                  About your Company
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Company Name"
                      className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="companyRole"
                      placeholder="Your Role"
                      className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <select
                    id="companySize"
                    className="w-full border text-black border-gray-300 px-4 py-2 rounded-md placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                  >
                    <option value="small font-normal text-[13px]">
                      Company Size
                    </option>
                    <option value="small font-normal text-[13px]">
                      {" "}
                      Small (1-10 employees)
                    </option>
                    <option value="medium font-normal text-[13px]">
                      Medium (11-50 employees)
                    </option>
                    <option value="large font-normal text-[13px]">
                      Large (50+ employees)
                    </option>
                  </select>
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-2xl font-medium mb-6 text-[#39364f]">
                Billing address
              </h3>

              <div className="mb-3">
                <input
                  type="text"
                  id="streetaddress"
                  placeholder="Street Address"
                  className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Town/City"
                    className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="companyRole"
                    placeholder="Postcode"
                    className="w-full border text-black border-gray-300 px-4 py-2 rounded-md  placeholder:text-[14px] placeholder:font-normal focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-medium mb-3 text-[#39364f]">
                Payment methods
              </h3>
              <p className="text-[14px] text-black font-thin w-full">
                How would you like to pay?
              </p>
              <p className="text-[14px] text-black font-thin w-full mb-5">
                We accept payments by all major credit & debit cards.
              </p>

              <PaymentOptions></PaymentOptions>

              <div className="max-w-4xl mx-auto  bg-white border mt-10">
                <h2 className="text-2xl font-semibold text-black my-4 px-6 ">
                  Delegate 1 · Level 3 Award in First Aid at Work (RQF)
                  <span className="ml-2 bg-black text-white text-sm  px-4 py-1 rounded">
                    Course
                  </span>
                </h2>
                <p className="text-sm text-gray-600 px-6 block">
                  <strong>Course Provider:</strong> 4JH |{" "}
                  <strong>Course Date:</strong> 7th Jan 2025 |{" "}
                  <strong>Venue:</strong> Bristol
                </p>

                {/* Checkbox to hide/show learner details */}
                <div className="mt-4 border py-5 px-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-gray-700 ">
                      Add learner details later
                    </span>
                  </label>
                </div>

                {/* Learner details form, hidden if checkbox is checked */}
                {showDetails && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                    <div>
                      <label className="block text-gray-700">
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Last name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="">
                <p className="my-5 text-xl "> By clicking "Register," I accept the <Link href="#" className="text-[#04a1ee]">Hurak.com terms</Link>, <Link href="#" className="text-[#04a1ee]">4JH terms</Link></p>
                <Link href="/order-confirmation" className=" text-center font-medium bg-primary text-white px-8 py-2  rounded-md  border  hover:bg-transparent hover:border-1 hover:border-primary hover:text-black transition duration-300 ease-in-out text-base inline">Register </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-white border-[1px]  p-6 rounded-md shadow-md self-start sticky top-10">
            <h2 className="text-2xl font-medium mb-6">Order summary</h2>
            <ul className="mb-6">
              <li className="flex justify-between items-center mb-3">
                <span className="font-normal text-[15px]">
                  Level 3 NVQ Certificate in Occupational Health and Safety
                </span>
                <span className="font-normal text-[14px]">£1320</span>
              </li>
              <li className="flex justify-between items-center mb-3">
                <span className="font-normal text-[15px]">
                  First Aid At Work Refresher (FAW Annual Refresher)
                </span>
                <span className="font-normal text-[14px]">£29.99</span>
              </li>
            </ul>
            <hr></hr>
            <div className="flex justify-between items-center text-xl my-5">
              <span>Order total</span>
              <span>£1,349.99</span>
            </div>
            <p className="text-black text-sm leading-6 mb-4">
              By clicking "Register," I accept the{" "}
              <a href="#" className="text-blue-500 underline">
                Hurak.com terms
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 underline">
                Sbc Solutions Ltd terms
              </a>
              , and{" "}
              <a href="#" className="text-blue-500 underline">
                Hurak Learning terms
              </a>
              .
            </p>
            <Link
              href="/order-confirmation"
              className="text-center font-medium bg-primary text-white px-4 py-2  rounded-md  border  hover:bg-transparent hover:border-1 hover:border-primary hover:text-black transition duration-300 ease-in-out text-base block"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <CartSection></CartSection>
      </div>
    </>
  );
}

export default page;
