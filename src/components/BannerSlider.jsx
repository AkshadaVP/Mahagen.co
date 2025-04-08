import React, { useState, useEffect } from 'react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images for the banner - use image paths directly in the array
  const images = [
    s1, s2, s3, s4, s5,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full mt-25 pl-65 pr-65">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Banner ${index}`}
                className="w-full rounded-2xl" // Apply rounded-2xl here
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Navigation dots or arrows */}
      <div className="absolute left-0 right-0 flex justify-between top-1/2">
        <button
          className="p-2 text-white bg-blue-500"
          onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        >
          Prev
        </button>
        <button
          className="p-2 text-white bg-blue-500"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
