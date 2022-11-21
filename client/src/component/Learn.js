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
import learninvest1 from './Images/how-to-start-investing.webp';
import learnCat1 from './Images/learn-cat/learn-cat1.png';
import learnCat2 from './Images/learn-cat/learn-cat2.png';
import learnCat3 from './Images/learn-cat/learn-cat3.png';
import learnCat4 from './Images/learn-cat/learn-cat4.png';
import learnCat5 from './Images/learn-cat/learn-cat5.png';
import learnCat6 from './Images/learn-cat/learn-cat6.png';
import learnCat7 from './Images/learn-cat/learn-cat7.png';
import learnCat8 from './Images/learn-cat/learn-cat8.png';
import './Learn.css';
import LetestNewstab from './LetestNewstab';



const Learn = () => {
  return (
    <div className='body-main learn-body'>
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
                  <p>Grow your financial confidence with videos, articles, and tips for investors both experienced and new.</p>
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
                <h4>Investing  . 4 min </h4>
                  <h3> How to Start Investing </h3>
                  <p>   Investing is not as complex as it may seem. Here's how to get started investing and what to consider when you are building a portfolio.
                  </p>
                  <button className='neain-invst'><a hrf="#">  Keep reading  </a></button>
              </div>

              <div className='l-invesleft'>
                <div className='learninvestimg'>
                  <img src={learninvest1}></img>
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
            <LetestNewstab/>
            </div>
        </section>

        <section id='learnCat-sec'>
          <div className='container'>
            <div className='section-title'>
              <div className='section-head'>
                <h2>Categories</h2>
              </div>
            </div>

          <div className='learncat-grid'>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat1} alt='cat-img'></img>
              </div>
              <h3>Investing</h3>
              <p>Brush up on the basics of the stock market, crypto, and the economy so you can invest with confidence.</p>
            </div>            
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat2} alt='cat-img'></img>
              </div>
              <h3>Retiring</h3>
              <p>Start preparing for life down the road with primers on 401Ks, IRAs, and Social Security.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat3} alt='cat-img'></img>
              </div>
              <h3>Saving</h3>
              <p>Find tips for managing your checking and savings accounts, budgeting, and building an emergency fund.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat4} alt='cat-img'></img>
              </div>
              <h3>Borrowing</h3>
              <p>Dig into every detail of debt — credit cards, student loans, mortgages, & more.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat5} alt='cat-img'></img>
              </div>
              <h3>Earning</h3>
              <p>See how a side hustle (or two) can help you earn more. Plus, we’ll help you get a handle on your taxes.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat6} alt='cat-img'></img>
              </div>
              <h3>Planning</h3>
              <p>Learn how insurance and estate planning can keep you and your loved ones covered.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat7} alt='cat-img'></img>
              </div>
              <h3>Acorns</h3>
              <p>Make sure you’re getting the most out of Acorns and staying up-to-date on our newest features.</p>
            </div>
            <div className='learnCat1'>
              <div className='leancatimg'>
                <img src={learnCat8} alt='cat-img'></img>
              </div>
              <h3>Market Updates</h3>
              <p>Learn about what’s happening in the market so you can stay in the know.</p>
            </div>
          </div>
          </div>
        </section>

        {/* <section id='tranding-section'>
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
        </section> */}

        {/* <section id='Topview-sec'>
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
        </section> */}

        {/* <section id='recommand-sec'>
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
        </section> */}
    </div>
  )
}

export default Learn;