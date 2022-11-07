import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import { Admin } from './component/Admin';
import { AdminDash } from './component/AdminDash';
import Navbarmenu from './component/menu/Navbarmenu';
import Footer from './component/menu/Footer';
import Home from "./component/Home"
import About from "./component/About"
function App() {
  
  return (
    <>

      <Router>
        
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admindash' element= {<AdminDash/>}/>
        </Routes>
        
  
      </Router>
    </>
  );
}

export default App;
