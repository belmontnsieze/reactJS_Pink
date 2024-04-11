// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css'

import image1 from "../Assets/section4-image.png";
import image2 from "../Assets/2.jpeg";
import image3 from "../Assets/3.webp";

const Carousel = () => {
  const images = [image1, image2, image3];
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className="carousel__slide">
        <>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
        <div className='carousel__top'></div>
        </>
        <div className="carousel__content">
          <h2>Sed ut perspiciatis unde amnis iste natus</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Iure, unde! Suscipit quaerat cumque porro iste aliquam perspiciatis <br />
            alias impedit nostrum cum iusto? Nesciunt tempore vel, ipsa commodi iure cupiditate similique.</p>
          <button className="slide__btn">Learn More</button>
        </div>
      </div>
      
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
