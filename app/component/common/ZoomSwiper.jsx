'use client'
import Image from "next/image"
import Link from "next/link";
import useResize from '@/app/hook/useResize'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ZoomSwiper = ({ slides, pattern }) => {
  const isDesktop = useResize();
  const moreCheck = slides.length;
  const options = {
    slidesPerView: 'auto',
    spaceBetween: 20,
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
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Navigation, Pagination],
    pagination: {
      clickable: true,
    },
    navigation: true,
    className: pattern,
  }

  return (
    <Swiper {...options}>
      {slides.map((slide, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="box-banner">
            <div className="img-box">
              <Image src={slide.imageUrl} width={isDesktop ? 1300 : 375} height={isDesktop ? 500 : 450} style={{ width: '100%', height: '100%' }} priority alt={isDesktop ? 'pc배너' : 'mo배너'}  />
            </div>
            <div className="cont-box">
              <div><strong>{slide.title}</strong></div>
              <div>{slide.description}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    {moreCheck > 4 && (
      <SwiperSlide className="swiper-slide more-slide">
        <div className="more-box">
          <div className="more">
            <Link href="#">타이틀</Link>
            <Link href="#">더보기</Link>
          </div>
        </div>
      </SwiperSlide>
    )}
    </Swiper>
  )
}

export default ZoomSwiper;