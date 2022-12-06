import React, { useEffect, useState } from "react";
import axios from "axios";
import { Learnslider } from "./Learnslider";


const Business = () => {
  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "MutualFund",section:"Topics"})
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
                  <a href="https://www.youtube.com/playlist?list=PLQ0dEPuPJTIU-ykMY5JtIdTxA9s-Ai44A"><button className='know-btn'>KNOW MORE</button></a>
      </div>
    </div>
  );
};

export default Business;
