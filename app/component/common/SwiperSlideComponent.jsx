
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const CommonSwiper = ({ slides, pattern }) => {
  return (
  <Swiper navigation={true} modules={[Navigation]} className={pattern}>
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        { slide.imageUrl }, 
        { slide.title }, 
        { slide.description }
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default CommonSwiper;