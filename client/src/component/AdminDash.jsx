import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "./Images/logo.png"
import "./Admindash.css"
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
export const AdminDash = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("newstoken")))
  const [cssnav, setCssnav] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("/api/auth/adminin", { params: token !== null ? token.token : "" }).then((res) => {
      console.log(res);
      if (res.data.message == "error") {
        navigate("/admin")
      }
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const logout = () => {
    localStorage.removeItem("newstoken")
    navigate("/")
  }

  return (
    <>
      <div className='position_nav'>
        <div className=''>
          {/* <div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card user={allchallenge.length} title="Challenges"/>
<Card />
<Card/>
</div> */}


          <div >

            <div className='iconbar_bg'><i class="fa fa-bars iconbar" aria-hidden="true" onClick={() => { setCssnav(true) }}></i></div>
            <nav className={cssnav ? "sideNavbar2" : "sideNavbar"}>
              <i class="fa fa-times iconcross" aria-hidden="true" onClick={() => { setCssnav(false) }}></i>
              <div className="navcontent">
                <ul>
                  <Link className="logoimg" to="/">
                    <img alt="logo" src={logo} />
                  </Link>


                  <li className='adt'>
                    <Link to='/addnews' className='adt'>Add Learn</Link>
                  </li>

                  <li className='adt'>
                    <Link className='adt' to='/viewnews'>Learn</Link>
                  </li>

                  <li className='adt'>
                    <Link className='adt' to='/addblogs'>Add Blogs</Link>

                  </li >

                  <li className='adt' >
                    <Link className='adt' to='/viewblogs'>Blogs</Link>
                  </li>

                  <li className='adt'>
                    <Link className='adt' style={{ color: "white" }} to="/addcontent">Add SEO</Link> 
                  </li>

                  <li className='adt'>
                    <Link className='adt' style={{ color: "white" }} to="/aboutcontent">Edit SEO</Link> 
                  </li>

{/* 
                  <div className='content-box'>
                    <li className='adt' onClick={() => setShow(!show)}>
                      <Link to="" className='adt'> Add Content</Link>
                    </li>
                    {
                      show &&
                      <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInUp" animationInDuration={1000} >
                        <div className='mt-2'>
                          <li className='ml-3'><Link className='adt' style={{ color: "white" }} to="/addcontent">Home</Link> </li>
                          <li className='ml-3'><Link className='adt' style={{ color: "white" }} to="/aboutcontent">About Us</Link> </li>
                        </div>
                      </AnimatedOnScroll>

                    }
                  </div> */}


                  <li className='adt'>
                    <Link to='/viewemail' className='adt'>Email</Link>

                  </li>
                  <li className='adt'>
                    <Link to='/addcareer' className='adt'>Add Jobs</Link>
                  </li>
                  <li className='adt'>
                    <Link to='/viewcareer' className='adt'>View Jobs</Link>
                  </li>
                  <br />
                  <li className='adt'>
                    <span className='adt ad' onClick={logout}>Logout</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

        </div>
      </div>

    </>
  )
}
