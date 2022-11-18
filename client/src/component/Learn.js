import React from 'react';
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
import './Learn.css';

const Learn = () => {
  return (
    <div className='body-main'>
        <section id='Learn-banner'>
          <div className='container-fluid banner-bg'>
            <div className='row Banner-main'>
            <div className='Banner-title'>
              <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>LEARN BETTER WITH <span> US</span> </h2>
              </AnimatedOnScroll>
            </div>
            </div>
          </div>
        </section>
        <section id='LearnAbout-sec'>
        <div className='container'>
          <div className='learnabout'>
            <div className='row L-aboutAlin'>
              <div className='col-lg-6 col-md-6'>
                  <h3>The building blocks of your financial journey</h3>
                  <p>What you need to know about investing from the get-go.</p>
              </div>
              <div className='col-lg-6 col-md-6'>
                  <div className='learnaboutImg1'>
                 <img src={tranding1}></img>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id='tranding-section'>
          <div className='container'>
            <div class="Newtext-divider">
              TRENDING
            </div>
            <div className='tranding_1'>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'> <img src={tranding1} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'>Is your money depreciating?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=z3sFCNWV0js'> <img src={tranding2} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=z3sFCNWV0js'>Short Sales</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/c/BullSmartStockAcademy/videos'> <img src={tranding3} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/c/BullSmartStockAcademy/videos'>Taxation of Mutual Fund Income.</a>
              </div>
            </div>
          </div>
        </section>

        <section id='Topview-sec'>
          <div className='container'>
            <div class="Newtext-divider">
            TOP VIEWS
            </div>
            <div className='tranding_1'>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'> <img src={topview1} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=OngUXG4BTcs&t=10s'>Why the poor get poorer and the rich get richer?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=z3sFCNWV0js'> <img src={topview2} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=z3sFCNWV0js'>Stock investment basic lessons.</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/c/BullSmartStockAcademy/videos'> <img src={topview3} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/c/BullSmartStockAcademy/videos'>Basic trading skills beginners need to master.</a>
              </div>
            </div>
          </div>
        </section>

        <section id='recommand-sec'>
          <div className='container'>
            <div class="Newtext-divider">
            RECOMMENDED
            </div>
            <div className='tranding_1'>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=8CEQZqT6o1A'> <img src={recommand1} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=8CEQZqT6o1A'>Trading cost.</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/watch?v=1jBrgR30J0U&t=20s'> <img src={recommand2} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=1jBrgR30J0U&t=20s'>How to Improve Your Financial intelligence?</a>
              </div>
              <div className='tranding-item1'>
                <div className='traningimg'>
                 <a href='https://www.youtube.com/c/BullSmartStockAcademy/videos'> <img src={recommand3} alt='trandingimg'></img></a>
                </div>
                <a href='https://www.youtube.com/watch?v=SX-ys2wOY4g'>What are bonds?</a>
              </div>
            </div>

            <div className='view-btn'>
                   <button className='view-btn'><a href='https://www.youtube.com/c/BullSmartStockAcademy/featured'>LEARN MORE</a></button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Learn;