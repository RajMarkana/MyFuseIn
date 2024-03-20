import React, { useState, useEffect } from 'react';

const logos = [
  './company (1).png',
  './company (2).png',
  './company (3).png',
  './company (4).png',
  './company (5).png',
  './company (6).png',
  './company (7).png',
 

];

const Companies = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const visibleLogos = [
    logos[startIndex % logos.length],
    logos[(startIndex + 1) % logos.length],
    logos[(startIndex + 2) % logos.length],
    logos[(startIndex + 3) % logos.length],
  ];

  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="h-full  overflow-hidden">
      <div className="flex sm:justify-around justify-center items-center transition-transform  ease-in-out transform">
        {visibleLogos.map((logo, index) => (
          <div className='sm:mx-10 mx-0'>
          <img
            key={index}
            src={logo}
            alt="Company Logo"
            className="max-w-xs sm:w-40 w-[150px] object-fill  filter grayscale max-h-20 m-10"
          />
          </div>
        ))}
      </div>
      <br/><br/>
    </div>
  );
};

export default Companies;
