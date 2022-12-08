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
import { Learnslider } from './Learnslider';

const Legal = () => {

 
  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "BeginnerLesson",section:"Topics" })
      .then((res) => {
        setNewsdata(res.data.result);
        newsdata.reverse();
        console.log(newsdata);
      });
  };
  useEffect(() => {
    viewnews();
  }, []);


  return (
    <div>
    <div id="Learn-slider">
<Learnslider newsdata={newsdata}/>
    </div>
    <div className='bannerbtn learnbtn'>
                  <a target="blank" href="https://www.youtube.com/@BullSmartStockAcademy"><button className='know-btn'>KNOW MORE</button></a>
                </div>

    </div>
  );
};


export default Legal;
