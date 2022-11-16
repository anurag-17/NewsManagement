import React, { useEffect, useState } from 'react';
import Bnnerimg from './Images/banner-right.png';
import newsimg1 from './Images/News-main.webp';
import newsimg2 from './Images/News-img2.webp';
import newsimg3 from './Images/news-img3.webp';
import newsimg4 from './Images/news-img4.webp';
import newsimg5 from './Images/news-img5.webp';
import Liveimg6 from './Images/livepay.png';
import blog1 from './Images/blog_img1.jpg';
import blog2 from './Images/blog-img2.png';
import blog3 from './Images/blog-img3.png';
import blog4 from './Images/bottom-news1.webp';
import blog5 from './Images/blog_img5.jpg';
import './Home.css';
import axios from 'axios';
import Navbarmenu from './menu/Navbarmenu';
import HomeNav from './menu/HomeNav';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Home = () => {
 const [newsdata,setNewsdata] = useState([])
 const [content,setContent] = useState([])
  const newsres = async()=>{
    await axios.get("/api/auth/viewnews").then((res)=>{
     console.log(res.data)
       setNewsdata(res.data.result)
   })
   }
   
const viewdata = async()=>{
const res = await axios.get("/api/auth/getcontent")
setContent(res.data)
}

   useEffect(()=>{
   newsres()
   viewdata()
   },[newsdata])
  
  return (
<div className='homepage'>
      <HomeNav/>
      <section id='home-banner'>
        <div className='container'>
          <div className='Home-slide'>
            <div className='row home-alin'>
            <div className='col-lg-8 col-md-6 slideb1'>
              <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeIn"> 
              <h2>Smart <span>People. </span></h2>
                <h2>Smart <span>Investment.</span> </h2>
              </AnimatedOnScroll>               
                <p>We use technology to help young investors invest smartly.</p>
                <div className='bannerbtn'>
                   <button className='know-btn'><a href='#'>KNOW MORE</a></button>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
               <div className='Banner-img'>
                <img src={Bnnerimg} alt='bannerimg'></img>
               </div>
              </div>
              {
// content.map((items,index)=>{
//   return(
//     <>
//           <div className='col-lg-8 col-md-6 slideb1'>
//               <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeIn"> 
//               <h2>{items.main_title_1}  <span>{items.main_title_2}</span></h2>
//                 <h2>{items.main_subtitle_1}  <span>{items.main_subtitle_2}</span> </h2>
//               </AnimatedOnScroll>               
//                 <p>{items.tagline}</p>
//                 <div className='bannerbtn'>
//                    <button className='know-btn'><a href='#'>KNOW MORE</a></button>
//                 </div>
//               </div>
//               <div className='col-lg-4 col-md-6'>
//                <div className='Banner-img'>
//                 <img src={Bnnerimg} alt='bannerimg'></img>
//                </div>
//               </div>
//     </>
//   )
// })
              }
            
            </div>
          </div>
        </div>
      </section>

      <section id='Top-News'>        
        <div className='container'>
          <div class="strike">
              <span><h2>TOP NEWS</h2></span>
          </div>
          
          
          <div className='row top-sec'>
            <div className='col-md-3'>
              <div className='Topnews-1'>
                <div className='Topnews-item'>
                  <div className='Topnew-img'>
                     <img src={blog1} alt='topnews'></img>
                  </div>
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>
                <div className='Topnews-item'>
                  <div className=''>
                    <h4 className='top-title'>Karnataka cabinet expansion on cards?</h4>
                  </div>
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>

                <div className='Topnews-item'>                  
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='topnew-2'>
              <div className='topnews2-img'>
                 <img src={blog5} alt='topnews'></img>
              </div>
              <h4>THE 2022 MIDTERM ELECTIONS, EXPLAINED</h4>
              <h3>India's Namita Thapar, Ghazal Alagh & Soma Mondal among 20 Asia Power businesswomen</h3>
              <p>According to Forbes website, the 20 women business leaders were ranked for their achievements in their current role of running a business with sizeable revenue and demonstrating strong leadership throughout their career.</p>
              <p className='sub-author'>By Christian Paz</p>
              </div>
              <div className='Topnew2-bottom'>
                <div className='Topnew2-bt'>
                  <h4 className='top-title'>THE 2022 MIDTERM ELECTIONS, EXPLAINED</h4>
                  <h3>3 Senate races that could still surprise us</h3>
                  <p>The unexpectedly close contests in Iowa, Utah, and Washington, briefly explained.</p>
                  <h4>By Umair Irfan</h4>
                </div>
                <div className='Topnew2-bt'>
                 <img src={blog4} alt='news' className='newsbt'></img>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
            <div className='Topnews-1'>
                <div className='Topnews-item'>
                  <div className='Topnew-img'>
                     <img src={blog1} alt='topnews'></img>
                  </div>
                  <div className='Top-sub'>
                    <h4 className='top-title'>Karnataka cabinet expansion on cards?</h4>
                  </div>
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>
                <div className='Topnews-item'>
                  <div className='Top-sub'>
                    <h4 className='top-title'>Karnataka cabinet expansion on cards?</h4>
                  </div>
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>

                <div className='Topnews-item'>       
                <div className='Top-sub'>
                    <h4 className='top-title'>Karnataka cabinet expansion on cards?</h4>
                  </div>           
                  <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                  <p>Responding to a question, the Karnataka CM said, 'Cabinet expansion...I have already spoken.....our leadership is a bit busy with the Gujarat elections, as soon as 
                    it is over they will call me (for discussions)'</p>
                   <h4>By Umair Irfan</h4> 
                </div>
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

      <div className='Invest-HT'>
      <section id='Investing-sec'>
        <div className='container'>
          <div className='section-title'>
            <div className='section-head'>
              <h2>Investing 101</h2>
            </div>
          </div>

          <div className='learn-head'>
            <h3>What You Learn</h3>
          </div>
          <div className='Investing-grid'>
            <div className='Investing-1'>
              <div className='invest-content'>
                <h3>Basic Lessons</h3>
                <p>Start your investment journey with confidence</p>
                <div className='Invest-btn'>
                    <button><a href='#'>Learn MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
            <div className='Investing-1'>
              <div className='invest-content'>
                <h3>General Investment</h3>
                <p>Start your investment journey with confidence</p>
                <div className='Invest-btn'>
                    <button><a href='#'>Learn MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
            <div className='Investing-1'>
              <div className='invest-content'>
                <h3>Mutual Funds</h3>
                <p>Start your investment journey with confidence</p>
                  <div className='Invest-btn'>
                    <button><a href='#'>Learn MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
          </div>
           <div className='view-btn'>
                   <button className='view-btn'><a href='#'>VIEW MORE</a></button>
            </div>
        </div>
      </section>
      </div>
      <section id='blof-sec'>
        <div className='container'>
         <div className='learn-head'>
            <h3>Blog</h3>
          </div>
          <div className='blog-grid'>
            <div className='blog_item1'>
              <div className='blog-Ct'>
                <div className='blogImg'>
                  <img src={blog1}></img>
                </div>
                <div className='blod-des'>
                <h3>SEBI Chairperson spoke to Fintech Participants at the Global Fintech Fest (GFF 2022)</h3>
                <div className='blog-btn'>
                    <button className='Blog-btn'><a href='#'>VIEW MORE <i class="fa fa-angle-double-right"></i></a></button>
                </div>
                </div>
              </div>
            </div>

            <div className='blog_item1'>
              <div className='blog-Ct'>
                <div className='blogImg'>
                  <img src={blog2}></img>
                </div>
                <div className='blod-des'>
                <h3>Things to know before you start investing</h3>
                <div className='blog-btn'>
                    <button className='Blog-btn'><a href='#'>VIEW MORE <i class="fa fa-angle-double-right"></i></a></button>
                </div>
                </div>
              </div>
            </div>
            <div className='blog_item1'>
              <div className='blog-Ct'>
                <div className='blogImg'>
                  <img src={blog3}></img>
                </div>
                <div className='blod-des'>
                <h3>Mutual Funds Terminologies: Your Complete Guide</h3>
                <div className='blog-btn'>
                    <button className='Blog-btn'><a href='#'>VIEW MORE <i class="fa fa-angle-double-right"></i></a></button>
                </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className='view-btn'>
                   <button className='view-btn'><a href='#'>VIEW MORE</a></button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home;