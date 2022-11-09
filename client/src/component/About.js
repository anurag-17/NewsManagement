import React from 'react';
import about1 from './Images/who-about.jpg';
import './About.css';

const About = () => {
  return (
    <div className='body-main'>
      <section id='banner'>
          <div className='container-fluid banner-bg'>
            <div className='row Banner-main'>
            <div className='Banner-title'>
              <h2>KNOW US BETTER</h2>
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
                <p>Bullsmart is driven by the vision of developing an investment platform with cutting edge investment tools, machine learning, smart financial & investment technologies provider in Asia & in demand by retail
                   stock investors from the millennial circle. </p>
                   <p>Bullsmart is committed to reliability, trustworthy, affordable & safe instruments for all the young investors. Bullsmart’s Stock Academy, Stocks & Mutual Fund Services can be accessed online at various levels 
                    of our society.</p>
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
    </div>
  )
}

export default About;