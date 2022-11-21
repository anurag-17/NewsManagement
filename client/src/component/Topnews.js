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
import { Link } from 'react-router-dom';


const   Topnews = ({apidata}) => {
  if(apidata){
    var parsed = apidata.rss.channel.item
    console.log(apidata.rss.channel.item)
  }

  return (
     <div className='topNewsdata'>       
    
    {
        parsed&&
        parsed.map((items,index)=>{
        console.log(items["media:content"]._attributes)
        return(
              <>
                 <a href= {items.link._cdata}>
                 <div className='newdgrid'>                   
                  <div class="NewsCT">
                    <div className='NewsImg2'>
                      <img src={items["media:content"]._attributes.url} alt='slide'></img>
                    </div>
                    <h3 className='newsTitle'>{items.title._cdata}</h3> 
                    <p className='news-des'>{items.description._cdata}</p> 
                    <h4>By Umair Irfan</h4> 
                  </div>                 
                </div>
            </a>
            </>
        )
      })
    }
    </div>
  )
}

export default Topnews;