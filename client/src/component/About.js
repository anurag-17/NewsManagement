import React from 'react';
import about1 from './Images/who-about.jpg';
import './About.css';
import Liveimg6 from './Images/livepay.png';
import {AnimatedOnScroll} from "react-animated-css-onscroll";



const About = () => {
  return (
    <div className='body-main'>
      <section id='banner'>
          <div className='container-fluid banner-bg'>
            <div className='row Banner-main'>
            <div className='Banner-title'>
              <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>KNOW US BETTER</h2>
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
                <h3>Who we are</h3>
                 <p>Bullsmart is driven by the vision of developing an investment platform with cutting edge investment tools, machine learning, smart financial & investment technologies provider in
                   Asia & in demand by retail stock investors from the millennial circle.  </p>
                 <p>Bullsmart is committed to reliability, trustworthy, affordable & safe instruments for all the young investors. Bullsmart’s Stock Academy, Stocks & Mutual Fund Services can be accessed online at various levels of our society.</p>  
              </div>
              <div className='col-lg-6 col-md-6'>
               <div className='who-img'>
                <img src={about1} alt='aboutimg'></img>
               </div>
              </div>
            </div>
          </div>

          <div className='Mission'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <h3>Our Mission</h3>
                <p>We are new age startup that uses technology to help young investors to start investing and help them save their money in the most 
                  efficient and effective manner.</p>
              </div>
              <div className='col-lg-6 col-md-6'>
                <h3>Our Vision</h3>
                <p>To become Asia’s Most desirable securities market company and participate in the developement of the indian capital market to be a world-renowned investment service 
                  provider.

</p>
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
               <i class="fa fa-tv"></i>
            </div>
            <h3>Equality</h3>
            <p>We provide equal investment service opportunities to beginners who can enjoy all our premier 
              investment services.</p>
          </div>
          <div className='Vauleitem1'>
            <div className='value-img'>
            <i class='fas fa-award'></i>
            </div>
            <h3>Easy</h3>
            <p>We offer abundant investment tools to guide investors to discover investment opportunities and make 
              the decision right decision.</p>
          </div>
          <div className='Vauleitem1'>
            <div className='value-img'>             
            <i class='fas fa-layer-group'></i>
            </div>
            <h3>Empowerment</h3>
            <p>We deeply care about the growth of our investors. We wish to support them in understanding how to invest 
              and foster their investment skills.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default About;