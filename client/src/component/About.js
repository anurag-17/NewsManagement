import React, { useEffect, useState } from 'react';
import about1 from './Images/who-about.jpg';
import './About.css';
import Liveimg6 from './Images/livepay.png';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import valueImg1 from './Images/Equality.svg';
import valueImg2 from './Images/Easy.svg';
import valueImg3 from './Images/Empowerment.svg';
import axios from 'axios';
import { Loader } from './Common/Loader';



const About = () => {
const [content,setContent] = useState([])
const [loading,setLoading] = useState(false)
const getaboutdata = async()=>{
  setLoading(true)
  const res = await axios.get("/api/auth/getaboutcontent")
  if(res){
    setContent(res.data)
    setLoading(false)
  }
}


useEffect(()=>{
getaboutdata()
},[])

  return (
    <>
    {
      loading?<Loader/>:
    <div className='body-main'>
      {
        content.map((items,index)=>{
          return(
            <div>
            <section id='banner'>
                <div className='container-fluid banner-bg'>
                  <div className='row Banner-main'>
                  <div className='Banner-title'>
                    <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>{items.headline}</h2>
                    </AnimatedOnScroll>
                  </div>
                  </div>
                </div>
            </section>
      
            <section id='AbWho-section'>
              <div className='container'>
                <div className='Who-About'>
                  <div className='row who-alin'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>{items.title_1}</h3>
                       <p style={{whiteSpace:"pre-wrap"}}>{items.description_1}</p>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                     <div className='who-img'>
                      <img src={items.main_image} alt='aboutimg'></img>
                     </div>
                    </div>
                  </div>
                </div>
      
                <div className='Mission'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>{items.title_2}</h3>
                      <p>{items.description_2}</p>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <h3>{items.title_3}</h3>
                      <p>{items.description_3}
      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            </div>
          )
        })
      }
  
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

      <section id='Value-section'>
      <div className='container'>
          <div className='section-title'>
            <div className='section-head'>
              <h2>What We Value</h2>
              
            </div>
          </div>
        <div className='Value-main'>
          <div className='Vauleitem1'>
            <div className='value-img'>
              <img src={valueImg1} alt='valueimg'></img>
            </div>
            <h3>Equality</h3>
            <p>We provide equal investment service opportunities to beginners who can enjoy all our premier 
              investment services.</p>
          </div>
          <div className='Vauleitem1'>
            <div className='value-img'>
            <img src={valueImg2} alt='valueimg'></img>
            </div>
            <h3>Easy</h3>
            <p>We offer abundant investment tools to guide investors to discover investment opportunities and make 
              the decision right decision.</p>
          </div>
          <div className='Vauleitem1'>
            <div className='value-img'>             
            <img src={valueImg3} alt='valueimg'></img>
            </div>
            <h3>Empowerment</h3>
            <p>We deeply care about the growth of our investors. We wish to support them in understanding how to invest 
              and foster their investment skills.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
    }
    </>

  )
}

export default About;