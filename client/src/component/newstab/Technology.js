import React, { useEffect, useState } from 'react';
import TabworldCat from './TabworldCat';
import img1 from "../Images/learnimg1.webp"
import img2 from "../Images/learnimg2.jpeg"
import img3 from "../Images/learnimg3.webp"
import img4 from "../Images/learnimg4.webp"
import tranding1 from '../Images/topview1.png';
import tranding2 from '../Images/topview2.png';
import tranding3 from '../Images/topview3.png';
import axios from 'axios';



const Technology = () => {

  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "Technology" })
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
      <div className="tranding_1">
        {newsdata &&
          newsdata.map((item, index) => {
            console.log(item);
            return (
              <>
                <div className="tranding-item1">
                  <div className="traningimg">
                    <a target="blank" href={item.url}>
                      {" "}
                      <img src={item.img} alt="trandingimg"></img>
                    </a>
                  </div>
                  <a target="blank" href={item.url}>
                    {item.title}
                  </a>
                </div>
              </>
            );
          })}
      </div>

    </div>
  );
};
export default Technology;
