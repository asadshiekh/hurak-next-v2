'use client';
import VerticleCourseCards from '@/components/global/VerticleCourseCards';
import React, { useState } from 'react';

function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Health and Safety',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/617fed01d093c_ezgif.com-gif-maker%20%282%29.webp',
      products: [
        {
          title: 'Basic Health & Safety Course',
          provider: 'Hurak Learning',
          price: '$199',
          image: '/images/dummy.jpg',
        },
        {
          title: 'Advanced Safety Techniques',
          provider: 'Global Training',
          price: '$299',
          image: '/images/dummy.jpg',
        },
        {
          title: 'Fire Safety Awareness',
          provider: 'Safety First Academy',
          price: '$159',
          image: '/images/dummy.jpg',
        },
      ],
    },
    {
      label: 'First Aid',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/61cad91080e43_ezgif.com-gif-maker%20%283%29.webp',
      products: [
        {
          title: 'Basic First Aid',
          provider: 'Life Savers Training',
          price: '$150',
          image: '/images/dummy.jpg',
        },
        {
          title: 'CPR and AED Certification',
          provider: 'Health Academy',
          price: '$180',
          image: '/images/dummy.jpg',
        },
        {
          title: 'First Aid for Workplace',
          provider: 'Corporate Health Solutions',
          price: '$200',
          image: '/images/dummy.jpg',
        },
        {
          title: 'First Aid for Workplace',
          provider: 'Corporate Health Solutions',
          price: '$200',
          image: '/images/dummy.jpg',
        },
      ],
    },
    {
      label: 'Security',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6407736100369_ezgif.com-gif-maker%20%281%29.webp',
      products: [
        {
          title: 'Basic Security Training',
          provider: 'Secure Pro',
          price: '$250',
          image: '/images/dummy.jpg',
        },
      ],
    },
    {
      label: 'Hospitality',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6407743a828ad_ezgif.com-gif-maker%20%282%29.webp',
      products: [
        {
          title: 'Customer Service Excellence',
          provider: 'Hospitality Academy',
          price: '$120',
          image: '/images/dummy.jpg',
        },
        {
          title: 'Bartender Training',
          provider: 'Bar School',
          price: '$180',
          image: '/images/dummy.jpg',
        },
      ],
    },
    {
      label: 'Teaching & Academics',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6421c2b43c25a_Teacher-01.webp',
      products: [
        {
          title: 'Teaching for Beginners',
          provider: 'Teaching Academy',
          price: '$300',
          image: '/images/dummy.jpg',
        },
      ],
    },
    {
      label: 'Construction',
      image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/64ca1dd9dc4dc_aszaxza.webp',
      products: [
        {
          title: 'Basic Construction Safety',
          provider: 'BuildSafe',
          price: '$220',
          image: '/images/dummy.jpg',
        },
        {
          title: 'Heavy Equipment Operator Training',
          provider: 'Construction Masters',
          price: '$400',
          image: '/images/dummy.jpg',
        },
      ],
    },
  ];

  return (
    <div>
      <section className="container mx-auto px-4 mt-[50px] mb-[20px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Hurak - Training Courses & Qualifications
            </h1>
          </div>
          <div className="col-span-12">
            <p className="text-lg lg:text-xl">
              With over 100,000 customers, from individuals to some of the most respected global brands.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto mb-[60px]">
        <div className="flex overflow-x-auto border-b border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 whitespace-nowrap ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-6">
        <div className='relative'>
        <img src={tabs[activeTab].image} alt={tabs[activeTab].label} className="w-full bg-contain h-44 lg:h-auto rounded-lg"/>
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col text-white">
                <h2 className="text-3xl text-black font-bold">{tabs[activeTab].label}</h2>
                <p className='text-black'>#1 Most popular topic on Hurak</p>
                <button className="mt-4 px-4 py-2 border border-black text-white bg-black hover:bg-transparent hover:border-1 hover:text-black transition">
                Explore {tabs[activeTab].label} Courses
                </button>
            </div>
            </div>

 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            
            {tabs[activeTab].products.map((product, idx) => (
              <VerticleCourseCards idx={idx} image={product.image} title={product.title} provider={product.provider} price={product.price}/>
              // <div
              //   key={idx}
              //   className="bg-white p-4 rounded-lg shadow-md flex flex-col"
              // >
              //   <img
              //     src={product.image}
              //     alt={product.title}
              //     className="w-full h-48 object-cover rounded-md mb-4"
              //   />
              //   <h3 className="text-lg font-semibold">{product.title}</h3>
              //   <p className="text-gray-500 mt-2">{product.provider}</p>
              //   <p className="text-gray-500 mt-2 font-light text-sm">From <strong className='font-bold text-lg'>{product.price}</strong></p>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSection;
