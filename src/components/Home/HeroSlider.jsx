import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './HeroSlider.css';

const imageContext = require.context('../../assets/images', false, /\.(jpg|jpeg|png|webp)$/);
const allImages = imageContext.keys()
  .filter(path => !path.includes('logo')) // Exclude logo from slider
  .map(imageContext);


const HeroSlider = () => {
  const shuffledImages = useMemo(() => {
    return [...allImages].sort(() => Math.random() - 0.5);
  }, []);

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
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default HeroSlider;
