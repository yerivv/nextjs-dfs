'use client'
import Image from "next/image"
import useMobile from "@/app/hook/useMobile"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const BannerItem = ({ pcSlides, moSlides, pattern }) => {
  const isMobile = useMobile();
  let options;
  if(pattern == 'brand'){
    options = {
      slidesPerView: 1,
      //loop: true,
      pagination: {
        clickable: true,
      },
      navigation: true,
      modules: [Pagination, Navigation]
    }
  } else {
    options = {
      slidesPerView: 2
    }
  }
  return (
    <Swiper {...options} className={pattern}>
    {isMobile ? 
      moSlides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="box-banner">
            <Image src={slide} width={375} height={450} style={{width: '100%', height: 'auto'}} priority alt="mo배너" className="d-block-mobile" />
          </div>
        </SwiperSlide>
      ))
    :
      pcSlides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="box-banner">
            <Image src={slide} width={1300} height={500} style={{width: '100%', height: 'auto'}} priority alt="pc배너" className="d-none-mobile" />
          </div>
        </SwiperSlide>
      ))
    }
    </Swiper>
  )
}

export default BannerItem;