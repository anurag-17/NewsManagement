import React from 'react'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide , pagination} from "swiper/react";
import letestslide1 from './Images/letestSlide1.png';
import letestslide2 from './Images/letestSlide2.png';
import letestslide3 from './Images/letestSlide3.png';
import letestslide4 from './Images/letestSlide4.png';
import letestslide5 from './Images/letestSlide5.png';
import letestslide6 from './Images/letestSlide6.png';
import guidslid1 from './Images/guid-slide1.png';
import guidslid2 from './Images/guid-slide2.png';
import { Link } from 'react-router-dom';
import "./styles.css";
import "swiper/css";


export const Blogslider = ({blogdata}) => {
  console.log(blogdata)
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
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation={true}        
      modules={[Pagination, Navigation]}
      className="mySwiper"  
     >      
     {
      blogdata.map((items,index)=>{
        const trimtitle = items.title.replace(
          / +/g,
          "-"
        )
        return(
       <SwiperSlide>
        <Link to = {`/${trimtitle}`}>
        <div id='Latest-slider'>
           <div className='latest-img'>
             <img src={items.url} alt='slide'></img>
           </div>
           <h4 className='time-head'>2 min read</h4>
           <h3>{items.title}</h3>        
         </div>
        </Link>

       </SwiperSlide>
        )
      })
     }      
    </Swiper>  
    </div>
  </div> 
 
  </div>
  )
}
