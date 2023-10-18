'use client'
import { Swiper } from "swiper/react";
import 'swiper/swiper-bundle.css';

const CommonSwiper = ({ children }) => {
  return (
  <Swiper>{children}</Swiper>
  )
}

export default CommonSwiper;