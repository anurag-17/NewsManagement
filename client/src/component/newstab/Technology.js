import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"
import tranding1 from '../Images/topview1.png';
import tranding2 from '../Images/topview2.png';
import tranding3 from '../Images/topview3.png';



const Technology = () => {

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
                 <a target = "blank" href='https://www.youtube.com/watch?v=btfIcDqH2nY'> <img src={tranding1} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=btfIcDqH2nY'>Is your money depreciating?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/watch?v=UW3iiGyaiv0'> <img src={tranding2} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=UW3iiGyaiv0'>Short Sales</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a target = "blank" href='https://www.youtube.com/watch?v=THabF_twN-w'> <img src={tranding3} alt='trandingimg'></img></a>
                </div>
                <a target = "blank" href='https://www.youtube.com/watch?v=THabF_twN-w'>Taxation of Mutual Fund Income.</a>
              </div>
            </div>    
              <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE <i class="fa fa-angle-double-right"></i></a></button>
       </div>
    </div>
  )
}

export default Technology;
