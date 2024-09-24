"use client";

import { useState, useEffect } from 'react';

// Image Slider Component
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url: '/imageslider/1.png',
      alt: 'Car Image 1'
    },
    {
      url: '/imageslider/2.png',
      alt: 'Car Image 2'
    },
    // Add more images as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const setCurrentSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[40vh] lg:h-[30vh] bg-gray-200">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
      />

      {/* Navigation Arrows */}
      {/* Uncomment if you want to add arrows back */}
      {/* 
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
      >
        &#10095;
      </button>
      */}

      {/* Toggle Buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} `}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}








// 'use client'; // Client component

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image'; // Import from 'next/image'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Hero.css'; // Import the custom CSS

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const images = [
//     '/imageslider/1.png', // Local images in the 'public/images' folder
//     '/imageslider/2.png',
//     '/imageslider/1.png',
//   ];

//   // Slider settings for automatic transition and dots navigation
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 10000, // 10 seconds for automatic slide change
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//     customPaging: function (i) {
//       return <div className="custom-dot"></div>; // Custom dot element
//     },
//     dotsClass: 'slick-dots custom-dots', // Apply custom class for the dots
//   };

//   return (
//     <div className="w-full h-[200px] relative bg-gray-200">
//       <Slider {...settings}>
//         {images.map((src, index) => (
//           <div key={index} className="w-full h-full">
//             <div className="w-full h-[200px] relative">
//               <Image
//                 src={src}
//                 alt={`Slide ${index + 1}`}
//                 fill // Use 'fill' instead of 'layout="fill"'
//                 style={{ objectFit: 'cover' }} // Use inline style for objectFit
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
