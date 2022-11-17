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

function App() {
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
          {location.pathname !== "/admin" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && location.pathname !=="/"&&location.pathname!=="/addcontent" &&<Navbarmenu/>}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About />} />
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
            <Route path='/xml' element={<Xmltojson/>} />
      
        </Routes>
          {location.pathname !== "/admin" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews"&&location.pathname!=="/addcontent" && <Footer/>}
      </div>
    </>
  );
}

export default App;
