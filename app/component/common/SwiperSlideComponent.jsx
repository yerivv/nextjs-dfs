'use client'
import { SwiperSlide } from "swiper/react";

const CommonSwiperSlide = ({ content }) => {
  return (
    <SwiperSlide>
      { content.imageUrl }, 
      { content.title }, 
      { content.description }
    </SwiperSlide>
  )
}

export default CommonSwiperSlide;