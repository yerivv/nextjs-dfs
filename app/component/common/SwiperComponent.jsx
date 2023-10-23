'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const CommonSwiper = ({ slides, pattern }) => {
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
      {slides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          { slide }
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CommonSwiper;