import React from 'react';
import image1 from "../Components/Assets/section3-image/section3-image.png";
const HomePage = () => {
  return (
    <div>
      <span className="relative p-4 md:p-24 text-3xl">We Hemp Business</span> <br />
      <span className="relative p-4 md:p-24 text-3xl text-orange-500">Grow and innovate</span>

      <div className="relative text-base p-4 md:p-24 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam, laudantium similique pariatur fugiat
        dignissimos veritatis doloribus inventore ullam, doloremque iure hic vero. Architecto animi reprehenderit
        dolores enim. Dolor, cumque?
      </div>

      <div className="relative  left-0 w-full md:top-1440 md:w-screen md:h-screen bg-gray-100 
      flex justify-center md:justify-center">

       <div className='relative z-10'>
          <img src={image1} alt="" className='relative max-w-full max-h-full ' />
          <div className=" bottom-0 absolute right-0 w-471 h-304 bg-orange-500 z-10 opacity-100" style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '471px',
            height: '304px',
            background: '#E0752F',
            
          }}></div>
        </div> 
        <div className="absolute top-0 right-0 w-1/3 md:w-308 h-full bg-gray-300"></div>
      </div>

      <div className='relative bg-white-100'>
          <div className=' bg-gray-300'>
          <img src={image1} alt="" className='relative max-w-full max-h-full ' />
          </div>
      </div>
    </div>
  );
};

export default HomePage;


// <div className="relative top-1440 left-0 w-screen h-screen bg-gray-100 opacity-100">
// bjbikjn

// <div className="absolute top-0 right-0 w-398 h-full bg-gray-300">321321</div>