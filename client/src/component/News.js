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
import Videoimg1 from './Images/newsvideo-img1.webp';
import Videoimg2 from './Images/newsvideo-img2.webp';
import Videoimg3 from './Images/newsvideo-img3.webp';

import newsvideo1 from './Images/nes-video.webp';
import axios from 'axios';
import './News.css'
import LetestNewstab from './LetestNewstab';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import Typical from 'react-typical'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import World from './newstab/World';
import Topnews from './Topnews';

import Typewriter from "typewriter-effect";
const convert = require("xml-js");  


const News = () => {

  const[data,setdata] = useState()
  const [mintdata,setMintData] = useState()
  const newApi = async()=>{

    const res =  await axios.get("https://corsanywhere.herokuapp.com/https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml")
    const response = await axios.get("https://corsanywhere.herokuapp.com/https://www.livemint.com/rssfeeds/news")
    const result1 = convert.xml2json(res.data,{compact: true, spaces: 4})
    const result2 = convert.xml2json(response.data,{compact:true,spaces:4})
    setMintData(JSON.parse(result2))
    setdata(JSON.parse(result1))
   }

  if(data){
  var arr=data.rss.channel.item[0]
    console.log(data.rss.channel.item[0])
  
  }
 
   useEffect(()=>{
    newApi()
    },[])
    

    // tab section
    const [key, setKey] = useState('home');

  return (
    <div className='body-main'>
      {/* <section id='News-Title'>
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
      </section> */}
      <section id='Top-News'>        
        <div className='container'>
          <div class="TopAriclnew">
              <span><h2>TOP NEWS</h2></span>
          </div>

          <div className='home-news'>
          <div className='Homenews-grid'> 
                  <Topnews apidata={data}/>                 
            </div>
          </div>     
        </div>
      </section>
{/* 
      <section id='News-section'>
        <div className='container'>
          <div className='NewsMain'>
            <div className='row NewsAlign'>
              <div className='col-lg-8 col-md-8 newsleft1'>
                   {
                     data&&
                     <a style = {{textDecoration:"none"}} href={arr.link._cdata}>
                     <div className='NewsLeft'>
                      <div className='NewsImg'>
                        <img src={arr["media:content"]._attributes.url} alt='Nes-img'></img>
                      </div>
                      <h2> {arr.title._cdata}</h2>
                      <p style = {{color:"black"}}>{arr.description._cdata}</p>
                    </div>
                     </a>
                   }
                    
              </div>
              <div className='col-lg-4 col-md-4 newsleft2'>
                <div className='newsright'>
                  <div className='newdgrid'> 

                  <NewsArticalInvest apidata={data}/>                 
                  <NewsArticalInvest apidata={mintdata}/>                   
                  </div>
                  <div className='slide-btn'>
                      <button className='Newsbtn'><a to={`/News`} >Explore more  </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id='newsvideo-sec'>
        <div className='container'>
          <div className='row video-Align'>
            <div className='col-lg-4 col-md-4 video-left'>
              <h4>UNDERSTAND THE NEWS WITH</h4>
              <h3>Today, Explained</h3>
              <button className='subcrie-btn'>subscribe</button>             
            </div>

            <div className='col-lg-8 col-md-8 video-right'>
            <img src={newsvideo1} class='newsvideo1'></img>
              <h4>LISTEN NOW IN APP OR ON PUBLIC RADIO</h4>
              <h3>World Cup: How 2 B a legend</h3>
              <p>Pelé. Maradona. Ronaldo. Soccer’s greats are so good, they’re typically known by one name. How winning the World Cup can turn a player into a legend.
               </p>            

              <div className='today-explain'>
                <div className='today-video'>                 
                  <i class="fa fa-play-circle"></i>
                </div>
                <div className='today-video'>
                 <p>Today, Explained</p>
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
            THE LATEST
            </div>
            <NewsArtical apidata={data}/>
          </div>

          <div className='col-lg-4 col-md-4'>
            <div class="Newtext-divider">
             VIDEO
            </div>
            <div className='news_vedio'>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=btfIcDqH2nY'><img src={Videoimg1} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=btfIcDqH2nY'><h3>Why so many “election deniers” lost in 2022</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=UW3iiGyaiv0'><img src={Videoimg2} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=UW3iiGyaiv0'><h3>It’s not you — movies are getting darker</h3></a>
                </div>
              </div>
              <div className='LearnVideo'>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=THabF_twN-w'><img src={Videoimg3} alt='learnimg'></img></a>
                </div>
                <div className='Learnimg'>
                  <a href='https://www.youtube.com/watch?v=THabF_twN-w'><h3>Sign up for the Vox video newsletter</h3></a>
                </div>
              </div>
            </div>
             <div className='slide-btn'>
                  <button className='Newsbtn'><a href='guid-bt1'>More in Video  </a></button>
             </div>

             <div className='Future-main'>
              <div className='v-shape'>
                <h2>V</h2>
              </div>
                <h4>Future Perfect</h4>
                <p>Each week, we explore unique solutions to some of the world's biggest problems.</p>
               
              <form id="stripe-login">                
                <div class="field">
                  <label for="email">Email</label>
                  <input type="email" name="email" className='email-form'/>
                  <p>By submitting your email, you agree to our Terms and Privacy Notice. You can opt out at any time. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                   For more newsletters, check out our newsletters page.</p>
                  <input type="submit" value="Submit" className='sub-btn'/>
                </div>     
              </form>
              
             </div>
          </div>
        </div>
      </div>
      </section>

      {/* <section id='Newstab-sec'>
        <div className='container'>
             <div className='Newstab-cat'>
             <div class="Newtext-divider">
             LATEST
            </div>
            <LetestNewstab/>
             
          </div>
        </div>
      </section> */}

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