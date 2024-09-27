import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import css from './PhotoSwiper.module.css';

export default function PhotoSwiper({ gallery }) {
  return (
    <Swiper
      modules={[Pagination]}
      navigation={false}
      pagination={{ clickable: true }}
      className={css.photoSwiper}
    >
      {gallery.map((item, index) => (
        <SwiperSlide key={index} className={css.slide}>
          <img
            src={item.thumb}
            alt={`Slide ${index + 1}`}
            className={css.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
