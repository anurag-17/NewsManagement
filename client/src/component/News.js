import React, { useEffect, useState } from 'react';
import NewsArtical from './NewsArtical';
import TypeAnimation from './TypeAnimation';
import NewsArticalInvest from './NewsArticalInvest';
import NewsImg1 from './Images/NewsImg1.webp';
import NewsImg2 from './Images/NewsImg2.webp';
import NewsImg3 from './Images/NewsImg3.webp';
import NewsImg4 from './Images/NewsImg4.webp';
import LearnImg5 from './Images/learnmore_img.png';
import Liveimg6 from './Images/livepay.png';
import axios from 'axios';
import './News.css'
import LetestNewstab from './LetestNewstab';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import Typical from 'react-typical'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import World from './newstab/World';

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
    

    // tab section
    const [key, setKey] = useState('home');

  return (
    <div className='body-main'>
      <section id='News-Title'>
        <div className='container'>
          <div class="typewriter">
          <h2>Smart</h2>            
          <Typewriter
            options={{
              strings: ['People', 'Investment'],
              autoStart: true,
              loop: true,
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
              <div className='col-lg-4 col-md-4 newsleft2'>
                <div className='newsright'>
                  <div className='newdgrid'> 
                  <NewsArticalInvest apidata={data}/>                 
                  </div>
                  <div className='slide-btn'>
                      <button className='Newsbtn'><a to={`/News`} >Explore more  </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='LetNews-section'>
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
                  <a href='https://www.youtube.com/watch?v=btfIcDqH2nY'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=btfIcDqH2nY'><h3>Is your money depreciating?</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=UW3iiGyaiv0'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=UW3iiGyaiv0'><h3>Short Sales</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=THabF_twN-w'><img src={LearnImg5} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=THabF_twN-w'><h3>Taxation of Mutual Fund Income.</h3></a>
                </div>
              </div>
            </div>
             <div className='slide-btn'>
                  <button className='Newsbtn'><a href='guid-bt1'>Explore more  </a></button>
              </div>
          </div>
        </div>
      </div>
      </section> */}

      <section id='Newstab-sec'>
        <div className='container'>
          <div className='Newstab-cat'>
          <div class="Newtext-divider">
             LATEST
            </div>
            <LetestNewstab/>
             
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