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


const Letestslider = ({apidata}) => {
  // if(apidata){
  //   var parsed = apidata.rss.channel.item
  //   console.log(apidata.rss.channel.item)
  // }

  return (
    <div>
      
     <div className='letestartical-grid'>       
    
    {
        apidata&&
        apidata.map((items,index)=>{
        return(
              <>
                 <a href= {items.link._cdata}>
                <div className='letest-artical'>
                   <div className='LetestArtical1'>
                    <div className='LetestArticalImg'>
                    <img src={items["media:content"]._attributes.url} alt='slide'></img>
                    </div>
                    <div className='LetestArticalDes'>
                        <div className='newsArtical-title'>
                        <h3>{items.title._cdata}</h3>
                        </div>
                        <div className='newsArtical-des'>
                        <p>{items.description._cdata}</p>
                        </div>                 
                    </div>
                  </div>
            </div>
            </a>
            </>
        )
      })
    }
    </div>
    </div>
  )
}

export default Letestslider;