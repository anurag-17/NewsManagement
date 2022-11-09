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
function App() {

  let location = useLocation()
  return (
    <>
      <div className='App'>
     
          {location.pathname !== "/admin" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && <Navbarmenu/>}
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/addnews' element={<AddNews />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admindash' element={<AdminDash />} />
            <Route path='/addblogs' element={<AddBlogs />} />
            <Route path='/viewnews' element={<ViewNews />} />
            <Route path='/viewblogs' element={<Viewblogs />} />
          </Routes>
         
          {location.pathname !== "/admin" && location.pathname !== "/admindash" && location.pathname !== "/addblogs" && location.pathname !== "/viewnews" && location.pathname !== "/viewblogs" && location.pathname !== "/addnews" && <Footer/>}
       
      </div>
    </>
  );
}

export default App;
