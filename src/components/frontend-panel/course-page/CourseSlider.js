'use client'; // Make sure to add this at the top of your component file

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = [
  { src: '/images/course-image2.webp', alt: 'Course Image 1' },
  { src: '/images/course-image2.webp', alt: 'Course Image 2' },
  { src: '/images/course-image2.webp', alt: 'Course Image 3' },

];

const CourseSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '0', right: '-40%' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '20px',
          height: '8px',
          background: '#ddd',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      ></div>
    ),
  };

  return (
    <div className="relative w-full md:w-[40%] md:order-2 mb-6 md:mb-0 overflow-hidden course_image_slider rounded-lg">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full"
              priority
              width="400"
              height="300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
