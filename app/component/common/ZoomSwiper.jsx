'use client'
import Image from "next/image"
import useResize from '@/app/hook/useResize'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ZoomSwiper = ({ slides, pattern }) => {
  const isDesktop = useResize();
  const options = {
    breakpoints: {
      320: {
        slidesPerView: 1.35,
        spaceBetween: 10,
      },
      512: {
        slidesPerView: 2.35,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3.35,
        spaceBetween: 20,
      },
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation]
  }

  return (
    <>
    <Swiper {...options} className={pattern}>
      {slides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="box-banner">
            <Image src={slide.imageUrl} width={isDesktop ? 1300 : 375} height={isDesktop ? 500 : 450} style={{ width: '100%', height: 'auto' }} priority alt={isDesktop ? 'pc배너' : 'mo배너'}  />
            <div>{slide.title}</div>
            <div>{slide.description}</div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="swiper-slide">
        더보기
      </SwiperSlide>
    </Swiper>
    </>
  )
}

export default ZoomSwiper;