import React from "react";
import logo from "../../images/mercedesLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="sliderPhoto" src={logo}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo}/></SwiperSlide>
      <SwiperSlide><img className="sliderPhoto" src={logo}/></SwiperSlide>
    </Swiper>
  );
}

export default Slider;
