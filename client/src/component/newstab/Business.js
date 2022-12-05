import React, { useEffect, useState } from "react";
import axios from "axios";


const Business = () => {
  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "MutualFund" })
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
      <div className='bannerbtn learnbtn'>
                  <a href="https://www.youtube.com/playlist?list=PLQ0dEPuPJTIU-ykMY5JtIdTxA9s-Ai44A"><button className='know-btn'>KNOW MORE</button></a>
                </div>

    </div>
  );
};

export default Business;
