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
import { Helmet } from 'react-helmet';

const About = ({scodata,title}) => {
  const [useremail, setUseremail] = useState({
    email:""
  })
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")
const [content,setContent] = useState([])
const [loading,setLoading] = useState(false)


// const [scodata,setscodata] = useState([])

// const getscodata = async()=>{
//   const res = await axios.post("/api/auth/getmetadata",{pagename:"Learn"})
//   setscodata(res.data)
// }

const getaboutdata = async()=>{
  setLoading(true)
  const res = await axios.get("/api/auth/getaboutcontent")
  if(res){
    setContent(res.data)
    setLoading(false)
  }
}
const Input_handler = (e) =>{
  setUseremail({...useremail, [e.target.name]: e.target.value})
 }
 const handleclick = async (e) => {
  e.preventDefault()
  setShow(true)
  setTimeout(()=>{
    axios.post("/api/auth/useremail",useremail,{headers:{"Content-Type": "application/json" } }).then((res)=>{
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
  },500)

  // setShow(true)
  // setTimeout(() => {
  //   setShow(false)
  //   setMessage("✓ The form was sent successfully")
  //   setTimeout(() => {
  //     setMessage("")
  //   }, 3000)
  // }, 2000)
}
useEffect(()=>{
// getaboutdata()
window.scrollTo(0,0)
},[])

  return (
    <>
    {/* {
      loading?<Loader/>: */}
    <div className='body-main'>
    {
        scodata?
        scodata.filter((items,index)=>{
          return items.pagename === "About"
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
      {/* {
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
      } */}
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
                  <p style={{ marginBottom: "-8px", width: "90%" }} >Our App is <span>READY</span>  to help you <br></br> on your investment journey <br></br></p>
                  <h4><span className='investhashtag'>#Investmentkanayadaur</span></h4>
                  <form onSubmit={handleclick} action="">
                    <div className="input-group newsform">
                      <input style={{ fontSize: "14px" }} required type="email" className="form-control form_bg" name='email' value={useremail.email} onChange={Input_handler} placeholder="Enter your email for newsletter" />
                      <span className={show ? "input-click" : "input-group-btn"}>
                        <button className="btn d-flex" type="submit"> {show && <i style={{marginRight:"5px",color: "#003AAD",marginTop:"1px"}} class="fas fa-spinner fa-spin"></i>} <i style={{ padding: "3px", color: "#003AAD", marginLeft: "-4px" }} class="fa fa-arrow-right "></i></button>
                      </span>
                    </div>
                  </form>
                  <p style={{ fontSize: "17px", fontWeight: "500", fontFamily: "sans-serif", color: "rgba(255, 255, 255, 0.637)", marginTop: "10px" }} >{message}</p>
                </div>
              </div>  
              <div className='col-lg-7 col-md-7'>
                <a href="https://play.google.com/store/apps/details?id=in.bullsmart" target="blank" className='LiveImg'>
                  <img src={Liveimg6}></img>
                </a>
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
    {/* } */}
    </>

  )
}

export default About;