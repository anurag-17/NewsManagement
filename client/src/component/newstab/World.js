import React, { useEffect, useState } from "react";
import TabworldCat from "./TabworldCat";
import axios from "axios";
import img1 from "../Images/learnimg1.webp";
import img2 from "../Images/learnimg2.jpeg";
import img3 from "../Images/learnimg3.webp";
import img4 from "../Images/learnimg4.webp";
import tranding1 from "../Images/tranding-img1.png";
import tranding2 from "../Images/tranding-img2.png";
import tranding3 from "../Images/tranding-img3.png";

const World = () => {
  const [newsdata, setNewsdata] = useState();

  const viewnews = async () => {
    await axios.post("/api/auth/viewnews",{catagory:"World"}).then((res) => {
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
            {newsdata&&newsdata.map((item,index)=>{
              console.log(item);
              return(
<>
<div className="tranding-item1">
          <div className="traningimg">
            <a
              target="blank"
              href={item.url}
            >
              {" "}
              <img src={item.img} alt="trandingimg"></img>
            </a>
          </div>
          <a target="blank" href={item.url}>
            {item.title}
          </a>
        </div>
</>
              )
            })}
    
      </div>
      <div className="view-btn">
        <button className="view-btn">
          <a href="#">
            Read MORE <i class="fa fa-angle-double-right"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default World;
