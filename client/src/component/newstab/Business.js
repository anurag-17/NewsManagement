import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import axios from 'axios';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"
import topview1 from '../Images/topview1.png';
import topview2 from '../Images/topview2.png';
import topview3 from '../Images/topview3.png';



const Business = () => {
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
                 <a target = "blank" href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'> <img src={topview1} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'>Why the poor get poorer and the rich get richer?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/watch?v=z3sFCNWV0js'> <img src={topview2} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=z3sFCNWV0js'>Stock investment basic lessons.</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/c/BullSmartStockAcademy/videos'> <img src={topview3} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/c/BullSmartStockAcademy/videos'>Basic trading skills beginners need to master.</a>
              </div>
            </div>
      <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE <i class="fa fa-angle-double-right"></i></a></button>
       </div>
    </div>
  )
}

export default Business;
