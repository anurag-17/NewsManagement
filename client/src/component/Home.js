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
import blog5 from './Images/blog_img5.jpg'
import './Home.css';
import axios from 'axios';
import Navbarmenu from './menu/Navbarmenu';
import HomeNav from './menu/HomeNav';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Topnews from './Topnews';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import swal from 'sweetalert';
const convert = require("xml-js")


const Home = ({scodata,title}) => {
const [emailError,setEmailError] = useState('')
  const [useremail, setUseremail] = useState({
    email: ""
  })
  const [newsdata, setNewsdata] = useState([])
  // const [scodata,setscodata] = useState([])
  const [blogdata,setBlogdata] = useState([])
  const [content, setContent] = useState([])
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")
  const getblogdata = async () => {
   await axios.get("/api/auth/viewblogs").then((res) => {
      setBlogdata(res.data.result)
    })
  }

  // const viewdata = async () => {
  //   const res = await axios.get("/api/auth/getcontent")
  //   setContent(res.data)
  // }

  // const getscodata = async()=>{
  //   const res = await axios.post("/api/auth/getmetadata",{pagename:"Home"})
  //   setscodata(res.data)
  // }

  useEffect(() => {
    // viewdata()
    newApi()
    // getscodata()
    getblogdata()
    window.scrollTo(0, 0)
  }, [])


  const [data, setdata] = useState()
  const newApi = async () => {

    const res = await axios.get("/api/auth/xml")
    console.log(res.data.rss.channel.item)
    setdata(res.data.rss.channel.item)

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    //     var requestOptions = {
    //       method: "get",
    //       headers: myHeaders,
    //       redirect: "follow",

    //   };
    //     fetch("https://v1.nocodeapi.com/reshu123/xml_to_json/oWCHkdvXGxhsYoto?url=https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(JSON.parse(result)))
    //     .catch(error => console.log('error', error));
  }



  const Input_handler = (e) => {
    setUseremail({ ...useremail, [e.target.name]: e.target.value })
  }
  const handleclick = async (e) => {
    e.preventDefault()
    setShow(true)
 
      await axios.post("/api/auth/useremail",useremail,{headers:{"Content-Type": "application/json" } }).then((res)=>{
        console.log(res);
        // swal(res.data,"" ,"success")
        setUseremail({
          email:""
        })
        setShow(false)
        setMessage(` ✓ ${res.data}`)
        setTimeout(()=>{
          setMessage("")
        },2000)
       }).catch((e)=>{
        setShow(false)
        setMessage(e.response.data)
        setTimeout(()=>{
          setMessage("")
        },3000)
       })
  

    // setShow(true)
    // setTimeout(() => {
    //   setShow(false)
    //   setMessage("✓ The form was sent successfully")
    //   setTimeout(() => {
    //     setMessage("")
    //   }, 3000)
    // }, 2000)
  }

console.log(scodata)
  return (
    <div className='homepage'>
              {
        scodata?
        scodata.filter((items,index)=>{
          return items.pagename === "Home"
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
      <HomeNav />
      <section id='home-banner'>
        <div className='container'>
          <div className='Home-slide'>
            <div className='row home-alin'>
              <div className='col-lg-8 col-md-6 slideb1'>
                <div className='widthcenter'>
                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeIn">
                  <h2>Smart <span>People. </span></h2>
                  <h2>Smart <span>Investment.</span> </h2>
                </AnimatedOnScroll>
                <p>We use technology to help young investors invest smartly.</p>
                <div className='bannerbtn'>
                  <Link to="/about-us"><button className='know-btn'>KNOW MORE</button></Link>
                </div>
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
          <div className="TopAriclnew">
            <span><h2 style={{color:"black"}}>TOP NEWS</h2></span>
          </div>

          <div className='home-news'>
            <div className='Homenews-grid'>
              <Topnews apidata={data} />
              <div style={{paddingTop:"0"}} className='bannerbtn mb-3'>
                  <Link to="/news/"><button className='know-btn'>KNOW MORE</button></Link>
                </div>
            </div>
          </div>

          {/* <div className='row top-sec'>
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
          </div> */}
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
                  <p style={{ marginBottom: "-8px", width: "90%" }} >Our App is <span>READY</span>  to help you <br></br> on your investment journey <br></br></p>
                  <h4><span className='investhashtag'>#Investmentkanayadaur</span></h4>
                  <form onSubmit={handleclick} action="">
                    <div className="input-group newsform">
                      <input style={{ fontSize: "14px" }} required type="email" className="form-control form_bg" name='email' value={useremail.email} onChange={Input_handler} placeholder="Enter your email for newsletter" />
                      <span className={show ? "input-click" : "input-group-btn"}>
                        <button className="btn d-flex" type="submit"> {show && <i style={{ marginRight: "5px", color: "#003AAD", marginTop: "1px" }} className="fas fa-spinner fa-spin"></i>} <i style={{ padding: "3px", color: "#003AAD", marginLeft: "-4px" }} className="fa fa-arrow-right"></i></button>
                      </span>
                    </div>
                  </form>
                  <p style={{ fontSize: "17px", fontWeight: "500", fontFamily: "sans-serif", color: "rgba(255, 255, 255, 0.637)", marginTop: "10px" }} >{message}</p>
                </div>
              </div>
              <div className='col-lg-7 col-md-7'>
                <a href="https://play.google.com/store/apps/details?id=in.bullsmart" target='blank' className='LiveImg'>
                  <img src={Liveimg6}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='Invest-HT'>
        <section id='Investing-sec'>
          <div style={{textAlign:"center"}}  className='container'>
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
                  <a href='https://www.youtube.com/playlist?list=PLQ0dEPuPJTIVcQcqhKQUe8dseABAT4Sm0' target="blank"><button>Learn More <i className="fa fa-angle-right"></i></button></a>
                  </div>
                </div>
              </div>
              <div className='Investing-1'>
                <div className='invest-content'>
                  <h3>General Investment</h3>
                  <p>Start your investment journey with confidence</p>
                  <div className='Invest-btn'>
                    <a href='https://www.youtube.com/playlist?list=PLQ0dEPuPJTIVDt8hyT30jUdQVueMutYBm' target="blank"><button>Learn More <i className="fa fa-angle-right"></i></button></a>
                  </div>
                </div>
              </div>
              <div className='Investing-1'>
                <div className='invest-content'>
                  <h3>Mutual Funds</h3>
                  <p>Start your investment journey with confidence</p>
                  <div className='Invest-btn'>
                  <a href='https://www.youtube.com/playlist?list=PLQ0dEPuPJTIU-ykMY5JtIdTxA9s-Ai44A' target="blank"><button>Learn More <i className="fa fa-angle-right"></i></button></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='view-btn'>
              <div style={{paddingTop:"0"}} className='bannerbtn mb-3'>
                  <Link to="/learn/"><button className='know-btn'>VIEW MORE</button></Link>
                </div>
            </div>
          </div>
        </section>
      </div>
      <section id='blof-sec'>
        <div className='container'>
          <div style={{textAlign:"center"}} className='learn-head'>
            <h3>Blog</h3>
          </div>
          <div className='blog-grid'>
            {
            blogdata.slice(3,6).map((items,index)=>{
                const trimtitle = items.title.replace(
                  / +/g,
                  "-"
                )
                return(
            <div className='blog_item1'>
              <Link to = {`/${trimtitle}`}>
                <div className='blog-Ct'>
                  <div className='blogImg'>
                    <img src={items.url}></img>
                  </div>
                  <div className='blod-des'>
                    <h3>{items.title}</h3>
                    <div className='blog-btn'>
                      <button className='Blog-btn'><a href='#'>Read More<i className="fa fa-angle-double-right"></i></a></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

                )
              })
            }
{/*  <div className='blog_item1'>
              <Link to="/Blog_2" target="_blank">
                <div className='blog-Ct'>
                  <div className='blogImg'>
                    <img src={blog2}></img>
                  </div>
                  <div className='blod-des'>
                    <h3>Things to know before you start investing</h3>
                    <div className='blog-btn'>
                      <button className='Blog-btn'><a href='#'>Read MORE <i className="fa fa-angle-double-right"></i></a></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className='blog_item1'>
              <Link to="/Blog_3" target="_blank">
                <div className='blog-Ct'>
                  <div className='blogImg'>
                    <img src={blog3}></img>
                  </div>
                  <div className='blod-des'>
                    <h3>Mutual Funds Terminologies: Your Complete Guide</h3>
                    <div className='blog-btn'>
                      <button className='Blog-btn'><a href='#'>Read MORE <i className="fa fa-angle-double-right"></i></a></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div> */}

          </div>
          <div className='view-btn'>
          <div style={{paddingTop:"0"}} className='bannerbtn mb-3'>
                  <Link to="/blog/"><button className='know-btn'>VIEW MORE</button></Link>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;
