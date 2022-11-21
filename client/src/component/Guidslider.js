import React from 'react';
import { Swiper, SwiperSlide , pagination} from "swiper/react";
import letestslide1 from './Images/letestSlide1.png';
import letestslide2 from './Images/letestSlide2.png';
import letestslide3 from './Images/letestSlide3.png';
import letestslide4 from './Images/letestSlide4.png';
import guidslid1 from './Images/guid-slide1.png';
import guidslid2 from './Images/guid-slide2.png';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Guidslider = () => {
  return (
    <div>
      <div className='guidslide'>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div id='guid-slider'>   
            <div className='guid-ct'>  
              <h3><span>Guide to </span> Financial Health</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
            </div>  
            <div className='slide-btn'>
                <button className='guidbr'><a href='guid-bt1'>read the guide</a></button>
            </div>
            <div className='latest-img'>
              <img src={guidslid1} alt='slide'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='guid-slider'>   
            <div className='guid-ct'> 
              <h3><span>Guide to </span> Financial Health</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
            </div>  
            <div className='slide-btn'>
                <button className='guidbr'><a href='guid-bt1'>read the guide</a></button>
            </div>
            <div className='latest-img'>
              <img src={guidslid2} alt='slide'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='guid-slider'>   
            <div className='guid-ct'>   
              <h3><span>Guide to </span> Financial Health</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
            </div>  
            <div className='slide-btn'>
                <button className='guidbr'><a href='guid-bt1'>read the guide</a></button>
            </div>
            <div className='latest-img'>
              <img src={guidslid1} alt='slide'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='guid-slider'>   
            <div className='guid-ct'>    
              <h3><span>Guide to</span> Financial Health</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
            </div>  
            <div className='slide-btn'>
                <button className='guidbr'><a href='guid-bt1'>read the guide</a></button>
            </div>
            <div className='latest-img'>
              <img src={guidslid1} alt='slide'></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id='guid-slider'>   
            <div className='guid-ct'>   
              <h3><span>Guide to </span> Financial Health</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
            </div>  
            <div className='slide-btn'>
                <button className='guidbr'><a href='guid-bt1'>read the guide</a></button>
            </div>
            <div className='latest-img'>
              <img src={guidslid1} alt='slide'></img>
            </div>
          </div>
        </SwiperSlide>     
      </Swiper>
    </div>
    </div>
  )
}

export default Guidslider;