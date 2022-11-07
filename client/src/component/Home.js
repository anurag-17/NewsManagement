import React from 'react';
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
import './Home.css';
import Navbarmenu from './menu/Navbarmenu';
import Footer from './menu/Footer';



const Home = () => {
  return (
    <>

<header className="">
          <Navbarmenu/>
        </header>
    <div className='homepage'>
      <section id='home-banner'>
        <div className='container'>
          <div className='Home-slide'>
            <div className='row home-alin'>
              <div className='col-lg-8 col-md-6'>
                <h2>Smart <span>People. </span>  <br></br>Smart <span>Investment .</span> </h2>
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
            </div>
          </div>
        </div>
      </section>

      <section id='New-section'>
        <div className='container'>
          <div className='New-main'>
            <div className='row'>
              <div className='col-lg-8 col-mg-8'>
                <div className='Newsleft'>
                  <div className='new-Head'>
                    <h3>News</h3>
                  </div>
                  <div className='news-img'>
                    {/* <img src={newsimg2} alt='newsimg'></img> */}
                  </div>
                  <div className='nes-des'>
                    <div className='News-title'>
                       <h2>China's trade unexpectedly drops for first time since 2020: Report</h2>
                    </div>
                    <div className='News-ct'>
                        <p>Tirumala Tirupati Devasthanams (TTD) is growing richer and richer as the cash and gold offerings made by devotees at the hill temple continue to rise and fixed deposits in banks are also generating more income in view of increase in interest rates, a temple official said.</p>
                   </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='Newsright'>
                  <div className='News_sub'>
                    <h3>Top News</h3>
                  </div>
                  <div className='Newsright-ct'>
                    <div className="News-box">
                      <div className="float-left blogR-img">
                        <img src={newsimg3}></img>
                      </div>
                      <div className="newsR-ct">
                        <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                        <p>Bank Holidays this week: Guru Nanak Jayanti falls fifteen days after Diwali on the auspicious occasion of Kartik Purnima</p>
                      </div>
                    </div>
                    <div className="News-box">
                      <div className="float-left blogR-img">
                        <img src={newsimg4}></img>
                      </div>
                      <div className="newsR-ct">
                        <h3>As Ukraine war rages, Jaishankar to begin his two-day Russia visit today</h3>
                        <p>During his Russia visit, Jaishankar is scheduled to meet Deputy Prime Minister of the Russian Federation and Minister of Trade and Industry, Denis Manturov, his counterpart for the India-Russia Inter-Governmental Commission on Trade, Economic, Scientific, Technological and Cultural Cooperation (IRIGC-TEC).</p>
                      </div>
                    </div>
                    <div className="News-box">
                      <div className="float-left blogR-img">
                        <img src={newsimg5}></img>
                      </div>
                      <div className="newsR-ct">
                        <h3>Bank Holidays this week: Guru Nanak Jayanti, 3 others. Details here</h3>
                        <p>Bank Holidays this week: Guru Nanak Jayanti falls fifteen days after Diwali on the auspicious occasion of Kartik Purnima</p>
                      </div>
                    </div>
                  </div>

                  <div className='news-btn'>
                    <button><a href='#'>Explore more <i class="fa fa-angle-right"></i></a></button>
                  </div>
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
                    <button><a href='#'>EXPLORE MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
            <div className='Investing-1'>
              <div className='invest-content'>
                <h3>Basic Lessons</h3>
                <p>Start your investment journey with confidence</p>
                <div className='Invest-btn'>
                    <button><a href='#'>EXPLORE MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
            <div className='Investing-1'>
              <div className='invest-content'>
                <h3>Basic Lessons</h3>
                <p>Start your investment journey with confidence</p>
                  <div className='Invest-btn'>
                    <button><a href='#'>EXPLORE MORE <i class="fa fa-angle-right"></i></a></button>
                  </div>
              </div>
            </div>
          </div>
           <div className='view-btn'>
                   <button className='view-btn'><a href='#'>VIEW MORE</a></button>
            </div>
        </div>
      </section>

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
    <Footer/>
    </>
  )
}

export default Home;