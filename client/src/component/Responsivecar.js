import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation, Pagination } from "swiper";
import img1 from "./Images/blog_1.jpg"

export const Responsivecar = () => {
  return (
  <>
    <div>
        <div className="slider-main">
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
        <SwiperSlide><div><img src={img1}></img>1 </div></SwiperSlide>
      </Swiper>
      </div>
    </div>
  </>
  )
}
