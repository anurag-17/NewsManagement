import React, { useEffect, useState } from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import tranding1 from './Images/tranding-img1.png';
import tranding2 from './Images/tranding-img2.png';
import tranding3 from './Images/tranding-img3.png';
import topview1 from './Images/tranding-img1.png';
import topview2 from './Images/tranding-img2.png';
import topview3 from './Images/tranding-img3.png';
import recommand1 from './Images/recommanded1.png';
import recommand2 from './Images/recommanded2.png';
import recommand3 from './Images/recommanded3.png';
import learninvest1 from './Images/how-to-start-investing.webp';
import learnCat1 from './Images/learn-cat/learn-cat1.png';
import learnCat2 from './Images/learn-cat/learn-cat2.png';
import learnCat3 from './Images/learn-cat/learn-cat3.png';
import learnCat4 from './Images/learn-cat/learn-cat4.png';
import learnCat5 from './Images/learn-cat/learn-cat5.png';
import ReactPlayer from 'react-player'
import './Learn.css';
import LetestNewstab from './LetestNewstab';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Learnslider } from './newstab/Learnslider';



const Learn = ({scodata,title}) => {
const [newsdata,setNewsdata] = useState()
const [trending,settrending]  = useState()

  const viewnews = async () => {
    await axios.post("/api/auth/viewnews",{catagory:"All",section:"Topics"}).then((res) => {
      setNewsdata(res.data.result);
      newsdata.reverse();
      console.log(newsdata);
    });
  };

  const gettrending = async()=>{
    await axios.post("/api/auth/viewnews").then((res)=>{
      settrending(res.data.result.filter((items,index)=>items.section==="NewTrending"))
      const liked = res.data.result.filter((items,index)=>items.section ==="MostLiked")
    })
  }

  console.log(trending)
  useEffect(()=>{
   viewnews()
   gettrending()
    window.scrollTo(0,0)
    },[])
console.log(scodata)

  return (
    <div className='learn-body'>
              {
        scodata?
        scodata.filter((items,index)=>{
          return items.pagename === "Learn"
        }).map((item,i)=>{
return(
               <Helmet>
      <title>{`${item.seotitle} - ${title}`}</title>
        <meta name="description" content={item.description}/>
        <meta name="keyword" content={item.keyword} />
      </Helmet>

)
        }):<Helmet><title>Bullsmart</title></Helmet>
      }
        {/* <section id='Learn-banner'>
          <div className='container-fluid banner-bg'>
            <div className='row Banner-main'>
            <div className='Banner-title'>
              <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>LEARN BETTER WITH <span> US</span> </h2>
              </AnimatedOnScroll>
            </div>
            </div>
          </div>
        </section> */}
        <section id='LearnAbout-sec'>
        <div className='container'>
          <div className='learnabout'>
            <div className='row L-aboutAlin'>
              <div className='col-lg-12 col-md-12'>
                <div className='learn-des'>
                <h3>Learn</h3>
                  <p>one stop solution to financial independence.</p>
                </div>                 
              </div>               
            </div>
          </div>
        </div>
        </section>
        <section id='investing-learn'>
          <div className='container'>
            <div className='learninvesAlign'>
              <div className='l-invesleft l-investdes'>
                {/* <h4>Investing  . 4 min </h4> */}
                  <h3> Bullsmart Stock Academy</h3>
                  <p>   Take few minutes a day to become your own financial advisor.
                  </p>
                  <button className='neain-invst'><a style={{textDecoration:"none"}} target="blank" href="https://www.youtube.com/@BullSmartStockAcademy">  Keep Learning  </a></button>
              </div>

              <div className='l-invesleft'>
                <div className='learninvestimg'>
                <ReactPlayer loop ={true} controls={true} url='https://www.youtube.com/embed/WNw_TFVE0kk' />
               {/* <iframe className='iframeclass' src="https://www.youtube.com/embed/WNw_TFVE0kk" title="BullSmart Stock Academy Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='topic-sec'>          
           <div className='container'>
            <div class="Newtext-divider">
              Topics
              </div>
              <div style={{width:"100%"}}>
                <LetestNewstab/>
            </div>
            </div>
        </section>


        <section id='topic-sec'>          
           <div className='container'>
            <div class="Newtext-divider">
            New Trending
              </div>
              <div style ={{marginTop:"20px"}} id="Learn-slider">
              <Learnslider newsdata={newsdata}/>
                <div className='bannerbtn learnbtn'>
                  <a target="blank" href="https://www.youtube.com/@BullSmartStockAcademy"><button className='know-btn'>KNOW MORE</button></a>
                </div>
              </div>
              </div>
        </section>


        <section id='topic-sec'>          
           <div className='container'>
            <div class="Newtext-divider">
            Most Liked
             </div>
            <div style ={{marginTop:"20px"}} id="Learn-slider">
            <Learnslider newsdata={newsdata}/>
            <div className='bannerbtn learnbtn'>
                  <a target="blank" href="https://www.youtube.com/@BullSmartStockAcademy"><button className='know-btn'>KNOW MORE</button></a>
                </div>
              </div>
            </div>
        </section>

    </div>
  )
}

export default Learn;