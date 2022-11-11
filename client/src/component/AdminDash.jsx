import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "./Images/logo.png"
import "./Admindash.css"
export const AdminDash = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("newstoken")))

  const navigate = useNavigate()
  useEffect(() => {
      axios.get("/api/auth/adminin", { params:token!==null?token.token:""}).then((res) => {
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
          <div className="sideNavbar">
            <nav>
              <div className="navcontent">
                <ul>
                  <Link className="logoimg" to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                  <br className='displaybr' />
                  <br className='displaybr' />
                  <li>
                    <i className="fa fa-plus iconA" aria-hidden="true" /><Link to='/addnews' className='adt'>Add News</Link>
                  </li>
                  <br className='displaybr' />
                  <li>
                    <i className="fa fa-newspaper-o iconA" aria-hidden="true" /> <Link className='adt23' to='/viewnews'>News</Link>
                  </li>
                  <br className='displaybr' />
                  <li>
                    <i class="fa fa-plus iconA" aria-hidden="true"></i>  <Link className='adt2' to='/addblogs'>Add Blogs</Link>

                  </li>
                  <br className='displaybr' />
                  <li>
                    <i class="fa fa-file iconA" aria-hidden="true"></i>  <Link className='adt2' to='/viewblogs'>Blogs</Link>
                  </li>
                  <br className='displaybr' />
                  <li>
                    <i class="fa fa-file iconA" aria-hidden="true"></i>  <Link className='adt2' to='/addcontent'>Add Content</Link>
                  </li>
                  <br className='displaybr' />
                  {/* <li>
                  <a href="">Demo</a>
                </li>
                <br /> */}
                  <li className='logoutadmin'>
                    <i class="fa fa-sign-out iconA ad" aria-hidden="true" /><button className='btn adt ad' onClick={logout}>Logout</button>
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
