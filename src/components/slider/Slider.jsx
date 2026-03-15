import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';

const allImages = Array.from({ length: 24 }, (_, i) => require(`../../img/${i + 1}.jpg`));

const Slider = () => {
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
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
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

export default Slider;
