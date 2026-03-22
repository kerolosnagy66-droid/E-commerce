import React, { useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './HeroSlider.css';

const imageContext = require.context('../../assets/images', false, /\.(jpg|jpeg|png|webp)$/);
const allImages = imageContext.keys()
  .filter(path => !path.includes('logo'))
  .map(imageContext);


const HeroSlider = () => {
  const shuffledImages = useMemo(() => {
    return [...allImages].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    shuffledImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [shuffledImages]);

  return (
    <section className="hero_slider">
        <div className="container">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="heroSwiper"
            >
                {shuffledImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                          src={image} 
                          alt={`Slide ${index + 1}`} 
                          fetchpriority={index === 0 ? "high" : "auto"}
                          loading="eager"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default HeroSlider;
