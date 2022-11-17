import React, { useEffect, useState } from 'react';
import NewsArtical from './NewsArtical';
import NewsArticalInvest from './NewsArticalInvest';
import NewsImg1 from './Images/NewsImg1.webp';
import NewsImg2 from './Images/NewsImg2.webp';
import NewsImg3 from './Images/NewsImg3.webp';
import NewsImg4 from './Images/NewsImg4.webp';
import LearnImg5 from './Images/learnmore_img.png';
import Liveimg6 from './Images/livepay.png';
import axios from 'axios';
import './News.css'
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

import Typewriter from "typewriter-effect";
const convert = require("xml-js")


const News = () => {

  const[data,setdata] = useState()
  const newApi = async()=>{

    const res =  await axios.get("https://corsanywhere.herokuapp.com/https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml")
    const result1 = convert.xml2json(res.data,{compact: true, spaces: 4})
    setdata(JSON.parse(result1))
   }
  

   useEffect(()=>{
    newApi()
    },[])


  return (
    <div className='body-main'>
      <section id='News-Title'>
        <div className='container'>
          <div class="typewriter">
            <Typewriter
            onInit={(typewriter)=> {
            typewriter              
            .typeString("Smart People")              
            .pauseFor(1000)
            .deleteAll()            
            .typeString("Investment")
            .start();
            }}
            />
          </div>
        </div>
      </section>
      
      <section id='News-section'>
        <div className='container'>
          <div className='NewsMain'>
            <div className='row NewsAlign'>
              <div className='col-lg-8 col-md-8 newsleft1'>
              <div className='NewsLeft'>
                <div className='NewsImg'>
                  <img src={NewsImg1} alt='Nes-img'></img>
                </div>
                <h2> Plyboards’ Keshav Bhajanka on innovation, future plans</h2>
                <p>In the 2021-22 fiscal, Century Plyboards posted a net profit of ₹313.15 crore over a turnover of ₹3,050.09 crore and is expecting a 20-25 per cent growth 
                  in revenue this fiscal.</p>
              </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='newsright'>
                  <div className='newdgrid'> 
                  <NewsArticalInvest apidata={data}/>
                    {/* <div class="NewsCT">
                      <div className='NewsImg2'>
                      <img src={NewsImg2} alt='News-img2'></img>
                      </div>
                      <span className='newsTitle'>Delhi University notifies batch sizes for UG, PG courses, plans to hike PhD thesis evaluation fees</span> 
                      <span className='news-des'>The list shines a spotlight on influential individuals shaping business in 2022.</span> 
                    </div>
                    <div class="NewsCT">
                      <div className='NewsImg2'>
                      <img src={NewsImg3} alt='News-img2'></img>
                      </div>
                      <span className='newsTitle'>Delhi University notifies batch sizes for UG, PG courses, plans to hike PhD thesis evaluation fees</span> 
                      <span className='news-des'>Registrar Vikas Gupta said the university came up with the rule to observe uniformity in the teacher-student ratio across all the programmes it offers</span> 
                    </div>
                    <div class="NewsCT">
                      <div className='NewsImg2'>
                      <img src={NewsImg4} alt='News-img2'></img>
                      </div>
                      <span className='newsTitle'>Republicans win control of the US House with narrow margin</span> 
                      <span className='news-des'>More than a week after Election Day and with several seats still not called, the party gained the 218 seats needed to control the chamber</span> 
                    </div> */}
                  </div>
                  <div className='slide-btn'>
                      <button className='Newsbtn'><a href='guid-bt1'>Explore more  </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='LetNews-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-8 LetNews'>
            <div class="Newtext-divider">
             LATEST
            </div>
            <NewsArtical apidata={data}/>
          </div>

          <div className='col-lg-4 col-md-4'>
            <div class="Newtext-divider">
             LEARN MORE
            </div>
            <div className='news_vedio'>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/india/delhi-university-notifies-batch-sizes-for-ug-pg-courses-plans-to-hike-phd-thesis-evaluation-fees-11668642455129.html'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/india/delhi-university-notifies-batch-sizes-for-ug-pg-courses-plans-to-hike-phd-thesis-evaluation-fees-11668642455129.html'><h3>Is your money depreciating?</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/india/these-2-indian-origin-entrepreneurs-feature-in-fortune-s-40-under-40-list-11668642349691.html'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/india/these-2-indian-origin-entrepreneurs-feature-in-fortune-s-40-under-40-list-11668642349691.html'><h3>Short Sales</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/world/republicans-win-control-of-the-us-house-with-narrow-margin-11668643570725.html'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.livemint.com/news/world/republicans-win-control-of-the-us-house-with-narrow-margin-11668643570725.html'><h3>Taxation of Mutual Fund Income.</h3></a>
                </div>
              </div>
            </div>
             <div className='slide-btn'>
                  <button className='Newsbtn'><a href='guid-bt1'>Explore more  </a></button>
              </div>
          </div>
        </div>
      </div>
      </section>

      <section id='live-section'>
      <div className='container'>
        <div className='Live-main'>
          <div className='row Live-alin'>
            <div className='col-lg-5 col-md-5'>
              <div className='Live-ct'>
                <h3>
                  We are <span>LIVE! </span>
                </h3>
                <p>Our App is <span>READY</span>  to help you <br></br> on your investment journey <br></br></p>
                <h4><span>#Investmentkanayadaur</span></h4>
                <div class="input-group newsform">
                    <input type="email" class="form-control" placeholder="Enter your email for newsletter"/>
                    <span class="input-group-btn">
                    <button class="btn" type="submit"><i class="fa fa-arrow-right"></i></button>
                    </span>
                      </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-7'>
              <div className='LiveImg'>
                <img src={Liveimg6}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* <section id='Blog-slider'>
      <div className='container'>
        <div className='Latest-title'>
          <h3>Latest News</h3>
        </div>
        <div className='letslider2'>
          <Letestslider apidata={data}/>       
        </div>
      </div>
      </section> */}
    </div>
  )
}

export default News;