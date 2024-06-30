'use client'
import React, { useState } from 'react';
import './Carousel.css'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: '../carousel/carousel1.jpg', alt: 'Image of Match 1' },
    { src: '../carousel/carousel2.jpg', alt: 'Image of Match 2' },
    { src: '../carousel/carousel1.jpg', alt: 'Image of Match 3' },
    // Add more image objects here
  ];

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </div>

      <button className="carousel-prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="carousel-next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;