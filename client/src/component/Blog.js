import React from 'react';
import './Blog.css';
import blogImg1 from './Images/blog-img1.png';
import Guidslider from './Guidslider';
import Letestslider from './Letestslider';
import SlderLet from './SlderLet.js';
import Post from './Post';
import Investblog1 from './Images/BlogInvest-img1.png';
import Investblog2 from './Images/BlogInvest-img2.png';
import Investblog3 from './Images/BlogInvest-img3.png';
import Investblog4 from './Images/BlogInvest-img4.png';
import Investblog5 from './Images/BlogInvest-img5.png';
import XMLParser from 'react-xml-parser';


const Blog = () => {

  const blogPosts = [
    {
      title: "Getting started in the stock market:things to consider",
      body: `Getting started in the stock market:things to consider`,
      // author: "Nishant Singh ",
      imgUrl:
        "https://images.livemint.com/img/2022/11/15/1600x900/Side-Angle_Car_1663835603343_1668514522120_1668514522120.jpg",
    },
    {
      title: "Data Structure ",
      body: `There are many order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://images.livemint.com/img/2022/11/15/1600x900/ofc_1656532093318_1668514115239_1668514115239.jpg",
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process 
      or set of rules to be  to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:
        "https://images.livemint.com/img/2022/11/15/1600x900/TWITTER-MUSK-FTC-0_1668513144006_1668513144006_1668513164230_1668513164230.JPG",
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices, 
      also known as hosts,  such as routers, switches,
      hubs, and bridges. `, 
      author: "Sonu Kr",
      imgUrl:
        "https://images.livemint.com/img/2022/11/15/1600x900/IRCTC_1668513685044_1668513685271_1668513685271.jpg",
    },
  ];

  return (
    <div className='body-main'>
      <section id='Blog-sewction'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-8'>
              <div className='Blog-left'>
                <div className='BlogImg'>
                  <img src={blogImg1} alt='blog-img'></img>
                </div>
                <div className='BContent'>
                  <h3>2 Min Read</h3>
                 <a href='#'>Digital payment initiatives of – मेरे नए  भारत का Fin-Tech </a> <p></p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4'>           
              <div className='Blog-right'>
                <div className='Blog-heading'>
                  <h3>Must Read</h3>
                </div>
                <div className='Blog-MRead'>
                  <div className='Blog-mread1'>
                    <h3>SEPTEMBER 02</h3>
                    <p>Getting started in the stock market:things to consider</p>
                  </div>
                  <div className='Blog-mread1'>
                    <h3>SEPTEMBER 02</h3>
                    <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
                  </div>
                  <div className='Blog-mread1'>
                    <h3>SEPTEMBER 02</h3>
                    <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </section>

      {/* <section id='Blogpost'>
        <div className='container'>
        <div className="posts-container">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}
        </div>
        </div>
      </section> */}

      <section id='Blog-slider'>
      <div className='container'>
        <div className='Latest-title'>
          <h3>Latest Stories</h3>
        </div>
        <div className='letslider2'>
          <Letestslider/>       
        </div>
      </div>
      </section>


     <section id='Guid-section'>
      <div className='container'>
      <div className='Guidsldier-sec'>
        <div className='Guid-head'>
          <h3>ESSENTIAL GUIDES</h3>
        </div>
        <Guidslider/>
        </div>      
      </div>
     </section>  

    <section id='BInvest-section'>
      <div className='Binveshape'>
      <div className='container BInvest-rigth'>
         <div className='section-head'>
              <h2>Investing 101</h2>
          </div>
          <div className='row Binvest-alin'>
            <div className='col-lg-10 col-md-10'>
             <div className='BInvest-grid'>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog1} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog2} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Investing in the Stock Market: Why You Should Start Today</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>The stock market explained!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog4} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>MHello world!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog5} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Know the available investing instruments</p>
               </div>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Getting started in stock market: things to consider</p>
               </div>
              </div>   
            </div>
            <div className='col-ld-2 col-md-2'>
              <div className='text-vertical'>
                 <h3>INVESTING</h3>
              </div>
            </div>
          </div>
          <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
          </div>
      </div>
      </div>
    </section>
      

     <section id='Planning-section'>
     <div className='Binveshape'>
      <div className='container BInvest-rigth'>
         <div className='section-head'>
              <h2>Planning</h2>
          </div>
          <div className='row Binvest-alin'>
            <div className='col-ld-2 col-md-2'>
              <div className='text-vertical'>
                 <h3>PLANNING</h3>
              </div>
            </div>
            <div className='col-lg-10 col-md-10'>
             <div className='BInvest-grid'>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog1} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog2} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Investing in the Stock Market: Why You Should Start Today</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>The stock market explained!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog4} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>MHello world!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog5} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Know the available investing instruments</p>
               </div>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Getting started in stock market: things to consider</p>
               </div>
              </div>   
              <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
            </div>
            </div>
          </div>
      </div>
      </div>
      </section> 


      <section id='Saving-section'>
      <div className='Binveshape'>
      <div className='container BInvest-rigth'>
         <div className='section-head'>
              <h2>SAVING</h2>
          </div>
          <div className='row Binvest-alin'>
            <div className='col-lg-10 col-md-10'>
             <div className='BInvest-grid'>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog1} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog2} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Investing in the Stock Market: Why You Should Start Today</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>The stock market explained!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog4} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>MHello world!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog5} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Know the available investing instruments</p>
               </div>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Getting started in stock market: things to consider</p>
               </div>
              </div>   
            </div>
            <div className='col-ld-2 col-md-2'>
              <div className='text-vertical'>
                 <h3>SAVING</h3>
              </div>
            </div>
            <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
          </div>
          </div>
          
      </div>
      </div>
      </section>

      <section id='Industry-section'>
     <div className='Binveshape'>
      <div className='container BInvest-rigth'>
         <div className='section-head'>
              <h2>INDUSTRY INSIGHTS</h2>
          </div>
          <div className='row Binvest-alin'>
            <div className='col-ld-2 col-md-2'>
              <div className='text-vertical'>
                 <h3>INDUSTRYINSIGHTS</h3>
              </div>
            </div>
            <div className='col-lg-10 col-md-10'>
             <div className='BInvest-grid'>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog1} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog2} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Investing in the Stock Market: Why You Should Start Today</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>The stock market explained!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog4} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>MHello world!</p>
               </div>

               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog5} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Know the available investing instruments</p>
               </div>
               <div className='Binvest-item1'>
                <div className='bInvest-img'>
                  <img src={Investblog3} alt='Blog-Invest'></img>
                </div>
                <h4>2 min read</h4>
                <p>Getting started in stock market: things to consider</p>
               </div>
              </div>   
              <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
            </div>
            </div>
          </div>
      </div>
      </div>
      </section> 
    </div>
  )
}

export default Blog;