import React, { useEffect } from 'react';
import './Blog.css';
import blogImg1 from './Images/blog-img1.png';

import { useState } from 'react'
import axios from 'axios';
import Guidslider from './Guidslider';
import Letestslider from './Letestslider';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Investblog1 from './Images/BlogInvest-img1.png';
import Investblog2 from './Images/BlogInvest-img2.png';
import Investblog3 from './Images/BlogInvest-img3.png';
import Investblog4 from './Images/BlogInvest-img4.png';
import Investblog5 from './Images/BlogInvest-img5.png';
import { Blogslider } from './Blogslider';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Blog = ({scodata,title}) => {
  const [blogdata, setBlogdata] = useState([])
  const reverse  = [...blogdata].reverse();

  // const [scodata,setscodata] = useState([])

  // const getscodata = async()=>{
  //   const res = await axios.post("/api/auth/getmetadata",{pagename:"Blog"})
  //   setscodata(res.data)
  // }


  useEffect(() => {
    // getscodata()
    window.scrollTo(0, 0)
    axios.get("/api/auth/viewblogs").then((res) => {
      setBlogdata(res.data.result)
    })
  }, [])

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  console.log(Math.random() - 0.5)
  const newList = shuffle(blogdata);
  console.log(newList)
  return (
    <div className='body-main'>
                {
        scodata?
        scodata.filter((items,index)=>{
          return items.pagename === "Blog"
        }).map((item,i)=>{
return(
               <Helmet>
      <title>{`${item.seotitle} - ${title}`}</title>
        <meta name="description" content={item.description}/>
        <meta name="keyword" content={item.keyword} />
      </Helmet>

)
        }):<Helmet><title>BullSmart</title></Helmet>
      }
      <section id='Blog-banner'>
        <div className='container-fluid banner-bg'>
          <div className='row Banner-main'>
            <div className='Banner-title'>
              <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>YOUR FINANCIAL GUIDE </h2>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
      </section>
{/* 
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
      </section> */}
      <section style={{backgroundColor:"#f6f5fc",paddingTop:"65px"}} id='Blog-sewction'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-8'>
              {
                reverse.slice(0,1).map((items,index)=>{
                  const trimtitle = items.title.replace(
                    / +/g,
                    "-"
                  )
                  return(
                    <Link to = {`/${trimtitle}`}>
                    <div className='Blog-left'>
                    <div className='BlogImg'>
                      <img src={items.url} alt='blog-img'></img>
                    </div>
                    <div className='BContent'>
                      <h3>2 Min Read</h3>
                      <p>{items.title}</p>
                    </div>
                  </div>
                    </Link>

                  )
                })
              }

            </div>
            <div className='col-lg-3 col-md-4'>
              <div className='Blog-right'>
                <div className='Blog-heading'>
                  <h3>Must Read</h3>
                </div>
                <div className='Blog-MRead'>
                  {
                    newList.slice(0,3).map((items,index)=>{
                      const trimtitle = items.title.replace(
                        / +/g,
                        "-"
                      )
                      return(
                        <Link style={{textDecoration:"none"}} to = {`/${trimtitle}`}>
                        <div className='Blog-mread1'>
                        <p>{items.title}</p>
                      </div>
                      </Link>
                      )
                    })
                  }
{/* 
                  <div className='Blog-mread1'>
                    <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
                  </div>
                  <div className='Blog-mread1'>
                    <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='Blog-slider'>
        <div className='container'>
          <div className='Latest-title'>
            <h3>Latest Stories</h3>
          </div>
          <div className='letslider2'>
            <Blogslider blogdata = {blogdata}/>
          </div>
        </div>
      </section>

      {/* <section id='Guid-section'>
      <div className='container'>
      <div className='Guidsldier-sec'>
        <div className='Guid-head'>
          <h3>ESSENTIAL GUIDES</h3>
        </div>
        <Guidslider/>
        </div>      
      </div>
     </section>  */}

      <section id='BInvest-section'>
        <div className='Binveshape'>
          <div className='container BInvest-rigth'>
            <div className='section-head'>
              <h2>Investing 101</h2>
            </div>

            <div className='row Binvest-alin'>
              <div className='col-lg-10 col-md-10'>
                <div className='BInvest-grid'>
                  {
                    blogdata.filter((item,index)=>{
                      return item.category === "investing"
                    }).slice(0).reverse().map((items, index) => {
                      const trimtitle = items.title.replace(
                        / +/g,
                        "-"
                      )
                      console.log(trimtitle)
                      return (
                      <Link to = {`/${trimtitle}`}>
                        <div className='Binvest-item1'>
                          <div className='bInvest-img'>
                            <img src={items.url} alt='Blog-Invest' style={{height:"250px"}}></img>
                          </div>
                          <h4>2 min read</h4>
                          <p>{items.title}</p>
                        </div>
                      </Link>
                      )
                    })
                  }
                  {/* <div className='Binvest-item1'>
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
                  </div> */}
                </div>
              </div>
              <div className='col-ld-2 col-md-2'>
                <div className='text-vertical'>
                  <h3>INVESTING</h3>
                </div>
              </div>
            </div>
            {/* <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
          </div> */}
          </div>
        </div>
      </section>

      {/* Healthy Weight */}
      <section id='Planning-section'>
        <div className='Binveshape'>
          <div className='container BInvest-rigth'>
            <div className='section-head'>
              <h2>Planning</h2>
            </div>
            <div className='row Binvest-alin'>
              <div className='col-lg-2 col-md-2 col-sm-12'>
                <div className='text-vertical'>
                  <h3>PLANNING</h3>
                </div>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-12'>
                <div className='BInvest-grid'>
                  {
                    blogdata.filter((items,index)=>{
                      return items.category ==="planning"
                    }).slice(0).reverse().map((item,index)=>{
                      const trimtitle = item.title.replace(
                        / +/g,
                        "-"
                      )
                      return(
                        <Link to={`/${trimtitle}`}>
                        <div className='Binvest-item1'>
                        <div className='bInvest-img'>
                          <img src={item.url} alt='Blog-Invest'></img>
                        </div>
                        <h4>2 min read</h4>
                        <p>{item.title}</p>
                      </div>
                        </Link>
                      )
                    })
                  }


                  {/* <div className='Binvest-item1'>
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
                  </div> */}
                </div>
                {/* <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
            </div> */}
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
              <div className='col-lg-10 col-md-10 col-sm-12'>
                <div className='BInvest-grid'>
                  {/* <div className='Binvest-item1'>
                    <div className='bInvest-img'>
                      <img src={Investblog1} alt='Blog-Invest'></img>
                    </div>
                    <h4>2 min read</h4>
                    <p>Mutual Funds: The Definitive Guide to Building Your Portfolio</p>
                  </div> */}

{
  blogdata.filter((items,index)=>(items.category==="saving")).slice(0).reverse().map((item,index)=>{
    const trimtitle = item.title.replace(/ +/g,"-")
    return(
      <Link to={`/${trimtitle}`}>
                  <div className='Binvest-item1'>
                    <div className='bInvest-img'>
                      <img src={item.url} alt='Blog-Invest'></img>
                    </div>
                    <h4>2 min read</h4>
                    <p>{item.title}</p>
                  </div>
      </Link>
    )
  })
}



                  {/* <div className='Binvest-item1'>
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
                  </div> */}
                </div>
              </div>
              <div className='col-ld-2 col-md-2 col-sm-12'>
                <div className='text-vertical'>
                  <h3>SAVING</h3>
                </div>
              </div>
              {/* <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
          </div> */}
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
                  {
                  blogdata.filter((items,index)=>(items.category==="industry")).slice(0).reverse().map((item,index)=>{
                   const trimtitle = item.title.replace(/ +/g,"-")
                    return(
                      <Link to={`/${trimtitle}`}>
                  <div className='Binvest-item1'>
                    <div className='bInvest-img'>
                      <img src={item.url} alt='Blog-Invest'></img>
                    </div>
                    <h4>2 min read</h4>
                    <p>{item.title}</p>
                  </div>                 
                      </Link>
                    )
                  })
                  }

                  {/* <div className='Binvest-item1'>
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
                  </div> */}
                </div>
                {/* <div className='BInvest-btn'>
            <button className='BInvst'><a href='#'>SEE MORE</a></button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog;