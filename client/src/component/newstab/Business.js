import React, { useEffect, useState } from "react";
import axios from "axios";


const Business = () => {
  const [newsdata, setNewsdata] = useState();
  const viewnews = async () => {
    await axios
      .post("/api/auth/viewnews", { catagory: "Business" })
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

export default Business;
