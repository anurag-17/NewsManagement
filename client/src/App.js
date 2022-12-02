import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import { Admin } from './component/Admin';
import { AdminDash } from './component/AdminDash';
import Navbarmenu from './component/menu/Navbarmenu';
import Footer from './component/menu/Footer';
import Home from "./component/Home"
import About from "./component/About"
import { AddNews } from './component/AddNews';
import { AddBlogs } from './component/AddBlogs';
import { ViewNews } from './component/ViewNews';
import { Viewblogs } from './component/Viewblogs';
import Blog from './component/Blog';
import { Loader } from './component/Common/Loader';
import { AddContent } from './component/AddContent';
import { DefaultRSSComponent, Xmltojson } from './component/Xmltojson';
import News from './component/News';
import Learn from './component/Learn';
import { AboutContent } from './component/AboutContent';
import { ForgotPassword } from './component/ForgotPassword';
import { Passwordchange } from './component/Passwordchange';
import { Terms } from './component/Common/Terms';
import Career from './component/Career';
import { Blog_1 } from './component/Blogpages/Blog_1';
import { Blog2 } from './component/Blogpages/Blog2';
import { useEffect, useState } from 'react';
import { Blog3 } from './component/Blogpages/Blog3';
import { Condition } from './component/Common/Condition';
import { Viewemail } from './component/Viewemail';
import { Addcareer } from './component/Addcareer';
import { ViewCareer } from './component/ViewCareer';
import axios from 'axios';

function App() {
  const [scodata,setscodata] = useState([])

  const getscodata = async()=>{
    const res = await axios.get("/api/auth/getmetadata")
    setscodata(res.data)
  }
  

  useEffect(() => {
    getscodata()
    window.scrollTo(0, 0)
  }, [])
  let location = useLocation()
  const data = JSON.parse(localStorage.getItem('newstoken'))

  if (data !== null) {
    if (Date.now() > data.expiry) {
      localStorage.removeItem("newstoken")
    }
  }
  return (
    <>
      <div className='App'>
        {location.pathname !== "/admin" &&location.pathname !=="/addcareer" && location.pathname !== "/forgotpassword" && location.pathname !== "/passwordchange" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && location.pathname !== "/" && location.pathname !== "/addcontent" && location.pathname !=="/viewemail" && location.pathname !== "/aboutcontent" &&location.pathname !=="/viewcareer"&& <Navbarmenu />}
        <Routes>
          <Route path='/' element={<Home scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/blog' element={<Blog scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/about-us' element={<About scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/career' element={<Career scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/addnews' element={<AddNews />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admindash' element={<AddNews />} />
          <Route path='/addblogs' element={<AddBlogs />} />
          <Route path='/viewnews' element={<ViewNews />} />
          <Route path='/news' element={<News scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/learn' element={<Learn scodata = {scodata} title ="Bullsmart" />} />
          <Route path='/viewblogs' element={<Viewblogs />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/addcontent' element={<AddContent />} />
          <Route path="/aboutcontent" element={<AboutContent />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/passwordchange' element={<Passwordchange />} />
          <Route path='/privacy-policy' element={<Terms />} />
          <Route path='/:blogtitle' element={<Blog_1/>} />
          <Route path='/Blog_2' element={<Blog2 />} />
          <Route path='/Blog_3' element={<Blog3 />} />
          <Route path='/terms-condition' element={<Condition />} />
          <Route path='/viewemail' element={<Viewemail/>}/>
          <Route path='/addcareer' element={<Addcareer/>}/>
          <Route path='/viewcareer' element={<ViewCareer/>}/>
          {/* <Route path='/rss' element={<DefaultRSSComponent/>}/> */}
        </Routes>
        {location.pathname !== "/admin" && location.pathname !== "/admindash" &&location.pathname !=="/addcareer"&& location.pathname !== "/forgotpassword" && location.pathname !== "/passwordchange" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && location.pathname !== "/addcontent" && location.pathname !=="/viewemail" &&location.pathname !== "/aboutcontent" && location.pathname !=="/viewcareer"&&<Footer />}
      </div>
    </>
  );
}

export default App;
