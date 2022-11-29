import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import axios from 'axios';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"
import recommand1 from '../Images/recommanded1.png';
import recommand2 from '../Images/recommanded2.png';
import recommand3 from '../Images/recommanded3.png';

const Legal = () => {

 
  const data = [
    {image:img1,title:"9 Investment Strategies to Consider",category:"Investing",read:"4min"},
    {image:img2,title:"What is a Bond ?",category:"Investing",read:"5min"},
    {image:img3,title:"What is Market Volatility?",category:"Investing",read:"4min"},
    {image:img4,title:"What Are Fractional Shares?",category:"Investing",read:"4min"}
]


  return (
    <div>
            <div className='tranding_1'>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/watch?v=8CEQZqT6o1A'> <img src={recommand1} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=8CEQZqT6o1A'>Trading cost.</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/watch?v=1jBrgR30J0U&t=20s'> <img src={recommand2} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=1jBrgR30J0U&t=20s'>How to Improve Your Financial intelligence?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/c/BullSmartStockAcademy/videos'> <img src={recommand3} alt='trandingimg'></img></a>
                </div>
                <a target = "blank"  href='https://www.youtube.com/watch?v=SX-ys2wOY4g'>What are bonds?</a>
              </div>
            </div>
       <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE <i class="fa fa-angle-double-right"></i></a></button>
       </div>
    </div>
  )
}

export default Legal;
