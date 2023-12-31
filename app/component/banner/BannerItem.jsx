'use client'
import Image from "next/image"
import useResize from '@/app/hook/useResize'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const BannerItem = ({ pcSlides, moSlides, pattern }) => {
  const isDesktop = useResize();
  const [options, setOptions] = useState({
    slidesPerView: 1,
    slides: moSlides,
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation]
  })
  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      slides: isDesktop ? pcSlides : moSlides,
    }));
  }, [isDesktop])

  return (
    <>
    <Swiper {...options} className={pattern}>
      {options.slides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="box-banner">
            <Image src={slide} width={isDesktop ? 1300 : 375} height={isDesktop ? 500 : 450} style={{ width: '100%', height: 'auto' }} priority alt={isDesktop ? 'pc배너' : 'mo배너'}  />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}

export default BannerItem;