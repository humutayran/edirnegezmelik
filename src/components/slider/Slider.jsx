import React from "react";
import logo1 from "../../images/1.jpg";
import logo2 from "../../images/2.jpg";
import logo3 from "../../images/3.jpg";
import logo4 from "../../images/4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{delay: 2500, disableOnInteraction: false}}
    >
      <SwiperSlide><img className="sliderPhoto" src={logo1}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo2}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo4}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo3}/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;
