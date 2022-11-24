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
import { Xmltojson } from './component/Xmltojson';
import News from './component/News';
import Learn from './component/Learn';
import { AboutContent } from './component/AboutContent';
import { ForgotPassword } from './component/ForgotPassword';
import { Passwordchange } from './component/Passwordchange';
import { Terms } from './component/Common/Terms';
import Career from './component/Career';
import { Blog_1 } from './component/Blogpages/Blog_1';
import { Blog2 } from './component/Blogpages/Blog2';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
window.scrollTo(0,0)
  }, [])
  let location = useLocation()
  const data = JSON.parse(localStorage.getItem('newstoken'))

if(data !== null){
  if(Date.now()>data.expiry){
    localStorage.removeItem("newstoken")
  }
}
  return (
    <>
      <div className='App'>
          {location.pathname !== "/admin"  && location.pathname !== "/forgotpassword" && location.pathname !== "/passwordchange" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && location.pathname !=="/"&&location.pathname!=="/addcontent" && location.pathname!=="/aboutcontent"&&<Navbarmenu/>}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About />} />
            <Route path='/career' element={<Career/>} />
            <Route path='/addnews' element={<AddNews />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admindash' element={<AddNews/>} />
            <Route path='/addblogs' element={<AddBlogs />} />
            <Route path='/viewnews' element={<ViewNews />} />
            <Route path='/News' element={<News/>} />
            <Route path='/Learn' element={<Learn/>} />
            <Route path='/viewblogs' element={<Viewblogs />} />
            <Route path='/loader' element={<Loader/>} />
            <Route path='/addcontent' element={<AddContent/>} />
            <Route  path = "/aboutcontent" element={<AboutContent/>}/>
            <Route path='/xml' element={<Xmltojson/>} />
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            <Route path='/passwordchange' element={<Passwordchange/>}/>
            <Route path='/privacy-policy' element={<Terms/>}/>
            <Route path='/Blog_1' element={<Blog_1/>}/>
            <Route path='/Blog_2' element={<Blog2/>}/>



          
        </Routes>
          {location.pathname !== "/admin" && location.pathname !== "/admindash" && location.pathname !== "/forgotpassword" && location.pathname !== "/passwordchange"&& location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews"&&location.pathname!=="/addcontent" && location.pathname!=="/aboutcontent"&&<Footer/>}
      </div>
    </>
  );
}

export default App;
