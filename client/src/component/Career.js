import React, { useEffect, useState } from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import Typewriter from "typewriter-effect";
import blogImg1 from './Images/blog-img1.png';
import Guidslider from './Guidslider';
import Letestslider from './Letestslider';
import Investblog1 from './Images/BlogInvest-img1.png';
import Investblog2 from './Images/BlogInvest-img2.png';
import Investblog3 from './Images/BlogInvest-img3.png';
import Investblog4 from './Images/BlogInvest-img4.png';
import Investblog5 from './Images/BlogInvest-img5.png';
import { Blogslider } from './Blogslider';
import './Career.css'
import axios from 'axios';
import { Helmet } from 'react-helmet';
const Career = ({scodata,title}) => {
const[value,setvalue] = useState("All Job Department")
const[data,setdata] = useState([])
const [filterdata,setfilterdata]  = useState(data)
 const unique = [...new Map(data.map(item =>
  [item["category"], item])).values()];
console.log(unique)

  const handlechange = (e)=>{
    if(e.target.value==="All Job Department"){
      getcareer()
    }else{
      setvalue(e.target.value)
      setfilterdata(data.filter((items,index)=>{
        return items.category === e.target.value
      }))
    }
  }

const getcareer = async()=>{
  const res= await axios.get("/api/auth/viewcareer")
  if(res.data){
    setdata(res.data.result)
    setfilterdata(res.data.result)
  }
}

  useEffect(() => {
    window.scrollTo(0,0)
    getcareer()
      }, [])
  return (
    <div className='body-main'>
                     {
        scodata?
        scodata.filter((items,index)=>{
          return items.pagename === "Career"
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
       <section id='career-banner'>
          <div className='container-fluid banner-bg'>
            <div className='row Banner-main'>
            <div className='Banner-title'>
              <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp"> <h2>BE A PART OF US</h2>
              </AnimatedOnScroll>
            </div>
            </div>
          </div>
      </section>

<section id="job-openings" className='container'>
<h3>Job Openings</h3>
<div className="selectjob mt-5">
<select onChange={handlechange} className='form-select' aria-label="Default select example">
  <option style={{height:"25px"}}>All Job Department</option>
  {
 unique.map((items,index)=>{
return(
  <option>{items.category}</option>

)
    })
  }
  {/* <option>Engineering</option> */}
</select>
<select className='form-select' aria-label="Default select example">
  <option>All Job Type</option>
  <option>Full Time</option>
</select>
<select  className="form-select" aria-label="Default select example">
  <option>All Job Location</option>
  <option>Bangalore</option>
</select>
</div> 
<table class="table mt-5 maintable">
  {
    // value==="All Job Department"?
  <tbody>
    {
      filterdata.map((items,index)=>{
        return(
          
    <tr className='table-row'>
      <td className='td-1'><h4>{items.title}</h4></td>
      <td> <i class="fa fa-star"></i>{items.category}</td>
      <td><i class="fa fa-location-arrow" aria-hidden="true"></i>{items.location}</td>
      <td>
      <a className='td-2a' target="blank" href={items.link}>More Details→</a>
      </td>
      

    </tr>
    // <tr className='table-row'>
    //   <td className='td-1'> <h4>Event Cordinator</h4></td>
    //   <td className='td-2'> <i class="fa fa-star"></i> Brand & Marketing</td>
    //   <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
    //   <td>More Details→</td>
    // </tr>
    // <tr className='table-row'>
    //   <td className='td-1'><h4>Back end Developer</h4> </td>
    //   <td  className='td-2'> <i class="fa fa-star"></i>Engineering</td>
    //   <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
    //   <td>More Details→</td>
    // </tr>
    // <tr className='table-row'>
    //   <td className='td-1'><h4>Full Stack Developer</h4> </td>
    //   <td className='td-2'> <i class="fa fa-star"></i>Engineering</td>
    //   <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
    //   <td>More Details→</td>

    // </tr>
        )
      })
    }
  </tbody>
  // :value==="Engineering"?
  // <tbody> 
  //   <tr className='table-row'>
  //     <td className='td-1'><h4>Back end Developer</h4> </td>
  //     <td  className='td-2'> <i class="fa fa-star"></i>Engineering</td>
  //     <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
  //     <td>More Details→</td>
  //   </tr>
  //   <tr className='table-row'>
  //     <td className='td-1'><h4>Full Stack Developer</h4> </td>
  //     <td className='td-2'> <i class="fa fa-star"></i>Engineering</td>
  //     <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
  //     <td>More Details→</td>

  //   </tr>
  // </tbody>:<tbody>
  //   <tr className='table-row '>
  //     <td className='td-1'><h4>Content Writer</h4></td>
  //     <td> <i class="fa fa-star"></i> Brand And Marketing</td>
  //     <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
  //     <td>More Details→</td>

  //   </tr>
  //   <tr className='table-row'>
  //     <td className='td-1'> <h4>Event Cordinator</h4></td>
  //     <td className='td-2'> <i class="fa fa-star"></i> Brand & Marketing</td>
  //     <td><i class="fa fa-location-arrow" aria-hidden="true"></i> Bangalore</td>
  //     <td>More Details→</td>

  //   </tr></tbody>
  }
</table>

</section>





    </div>
  )
}

export default Career;