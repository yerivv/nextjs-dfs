'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import ProductItem from "@/app/component/product/ProductItem";

const ProductSlideWrap = ({ items, pattern }) => {
  let options = {
    pagination: {
      type: 'progressbar',
      clickable: true,
    },
    navigation: true,
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Pagination, Navigation]
  };

  return (
    <div className={`swiper-product ${pattern}`}>
      <Swiper {...options}>
      {items.map((item, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <ProductItem item={item} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default ProductSlideWrap;