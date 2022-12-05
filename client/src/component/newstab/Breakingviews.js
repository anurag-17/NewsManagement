import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"
import tranding1 from '../Images/tranding-img1.png';
import tranding2 from '../Images/tranding-img2.png';
import tranding3 from '../Images/tranding-img3.png';
import axios from 'axios';
import { Learnslider } from './Learnslider';


const Breakingviews = () => {

  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "Finance" })
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
                  <a href="https://www.youtube.com/playlist?list=PLQ0dEPuPJTIXwWTmhJfiR0Cr2sY9VXCQ1"><button className='know-btn'>KNOW MORE</button></a>
                </div>
    </div>
  );
};

export default Breakingviews;
