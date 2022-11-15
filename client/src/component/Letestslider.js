import React from 'react';
import { Swiper, SwiperSlide , pagination} from "swiper/react";
import letestslide1 from './Images/letestSlide1.png';
import letestslide2 from './Images/letestSlide2.png';
import letestslide3 from './Images/letestSlide3.png';
import letestslide4 from './Images/letestSlide4.png';
import letestslide5 from './Images/letestSlide5.png';
import letestslide6 from './Images/letestSlide6.png';
import guidslid1 from './Images/guid-slide1.png';
import guidslid2 from './Images/guid-slide2.png';
import { Navigation, Pagination } from "swiper";



const Letestslider = () => {
  return (
    <div>
      <div className='guidslide'>
      <div className='Let-slider1'>


     <Swiper  
      slidesPerView={4}
        spaceBetween={45}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"  
      >        
        <SwiperSlide>
        <div id='Latest-slider'>
            <div className='latest-img'>
              <img src={letestslide1} alt='slide'></img>
            </div>
            <h4 className='time-head'>2 min read1</h4>
            <h3>SEBI Chairperson spoke to Fintech Participants at the Global Fintech Fest   GFF 2022)</h3>
            <p>Smt. Madhabi Puri Buch, the...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='Latest-slider'>
            <div className='latest-img'>
              <img src={letestslide2} alt='slide'></img>
            </div>
            <h4 className='time-head'>2 min read</h4>
            <h3>Things to know before you start investing</h3>
            <p>Intro: There are a plethora of terms and acronyms that you need to know if you want to understand the...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='Latest-slider'>
            <div className='latest-img'>
              <img src={letestslide3} alt='slide'></img>
            </div>
            <h4 className='time-head'>2 min read</h4>
            <h3>Mutual Funds Terminologies: Your Complete Guide</h3>
            <p>Intro: There are a plethora of terms and acronyms that you need to know if you want to understand the...</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='Latest-slider'>
            <div className='latest-img'>
              <img src={letestslide4} alt='slide'></img>
            </div>
            <h4 className='time-head'>2 min read</h4>
            <h3>Top myths about investing in the stock market</h3>
            <p>Top myths about investing in the stock market</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='Latest-slider'>
            <div className='latest-img'>
              <img src={letestslide6} alt='slide'></img>
            </div>
            <h4 className='time-head'>2 min read</h4>
            <h3>Top myths about investing in the stock market</h3>
            <p>Let’s break the 5 common myths that are stopping you from getting started with your investment journey...</p>
          </div>
        </SwiperSlide>
      </Swiper>
     
      </div>
    </div>
    </div>
  )
}

export default Letestslider;