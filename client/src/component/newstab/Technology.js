import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"



const Technology = () => {

  const data = [
    {image:img1,title:"9 Investment Strategies to Consider",category:"Investing",read:"4min"},
    {image:img2,title:"What is a Bond ?",category:"Investing",read:"5min"},
    {image:img3,title:"What is Market Volatility?",category:"Investing",read:"4min"},
    {image:img4,title:"What Are Fractional Shares?",category:"Investing",read:"4min"}
]
  return (
    <div>
      <TabworldCat apidata={data}/>
      <div className='view-btn'>
                   <button className='view-btn'><a href='#'>Read MORE <i class="fa fa-angle-double-right"></i></a></button>
       </div>
    </div>
  )
}

export default Technology;
