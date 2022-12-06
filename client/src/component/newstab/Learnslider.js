import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide , pagination} from "swiper/react";
export const Learnslider = ({newsdata}) => {
  return (
  <>
 
          <Swiper
            slidesPerView={3}
            spaceBetween={45}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}        
            modules={[Pagination, Navigation]}
            className="mySwiper"  
            
          >
            {newsdata&&newsdata.map((item,index)=>{
              console.log(item);
              return(
          <>
          <div className="tranding_1">
          <div className="tranding-item1">
          <div className="traningimg">            
          <SwiperSlide>
          <a
              target="blank"
              href={item.url}
            >
              {" "}
              <img src={item.img} alt="trandingimg"></img>
            </a>
          </SwiperSlide>

          </div>
          <a target="blank" href={item.url}>
            {item.title}
          </a>
        </div>
      </div>

</>
 )
})}
</Swiper>

  </>
  )
}
