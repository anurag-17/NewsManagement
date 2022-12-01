import React,{useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import './Navbarmenu.css';
import logo from '../Images/logo.png';



const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }


    // sticky
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };
   

    return (
    <header className="header__middle header-section HomeNav" id='HomeNav'>
        <div className="container">
            <div className="row Menualin">
                <div className="header__middle__logo">
                    <NavLink activeClassName='is-active' to="/">
                      <img src={logo} alt='logo'></img>
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink  activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/news`}> News </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/learn`}> Learn </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Blog`}> Blog </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About us </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Career`}> Career </NavLink> </li>
                    
                    </ul>


                    </nav>     
                </div>   
        
            </div>
	    </div>
    </header>
    )
}

export default Navbarmenu;