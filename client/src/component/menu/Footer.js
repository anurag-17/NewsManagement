import React from 'react';
import logo from '../Images/logo.png';
import downlaodimg1 from '../Images/google-playstore.png';
import './Footer.css';
const Footer = () => {
  return (
    <div>
        <section id='footer-section'>
            <div className='container'>
                <div className='fooetr-main'>
                   <div className='row Footer-Alin'>
                    <div className='col-lg-5 col-md-3 footer-first'>
                        <img src={logo} alt='footerlogo' className='foot-logo'></img>
                        <address>
                        Ashoka Fortune, NO 3/1-11ST Main, Next to Dailyhunt,<br></br> Jakkasandra, Kormangala, Bangalore, Karnataka –<br></br> 560034.
                    
                        </address>
                        <ul className='contlist'>
                          <li><a href ='mailto:career@bullsmart.in'>Email: career@bullsmart.in</a></li>
                          <li><a href = "telto:+91-9148994392">Phone: +91-9148994392</a></li>
                        </ul>
                        
                    </div>
                    <div className='col-lg-2 col-md-3 footer-first'>
                        <div className='footer-2'>
                          <div className='footer-title'>
                              <h3>Company</h3>
                          </div>
                          <ul className='footerlist'>
                            <li> <a href='#'>News</a></li>
                            <li> <a href='#'>Learn</a></li>
                            <li> <a href='#'>Blog</a></li>
                            <li> <a href='#'>About Us</a></li>
                            <li> <a href='#'>Career</a></li>
                          </ul>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-3 footer-first'>
                        <div className='footer-2'>
                          <div className='footer-title'>
                              <h3>Products</h3>
                          </div>
                          <ul className='footerlist'>
                            <li> <a href='#'>Coming Soon</a></li>
                          </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 footer-first'>
                        <div className='footer-2'>
                          <img src={downlaodimg1} alt='footerimg'></img>
                          
                        </div>
                    </div>
                   </div>
                   <hr className='hr-foot'></hr>
                   <div className='row footer-bottm'>
                    <div className='col-lg-12 col-md-12'>
                      <p>© 2022 All rights reserved : Dados Technologies Private Limited (Formerly known as (Wu Quickcash Credit Solutions Private Limited) CIN: U65100MH2019FTC329281 AMFI Registration Number: ARN – 245733
                  Registered Office: No.404, 4th Floor, Kamla Charan, CHS Plot No.178, Jawahar Nagar 
                  Road, Goregaon West Mumbai MH 400104 Corporate Office: Ashoka Fortune, NO 3/1-11ST Main, Next to Dailyhunt, Jakkasandra, Kormangala,  Bangalore, Karnataka – 560034</p>
                  <p>Disclaimer: Investments in securities market are subject to market risk, read
                     all the related documents carefully before investing.</p>
                  <p>Email: <span><a href='mailto:compliance@dadostech.in'>compliance@dadostech.in</a></span> Please read the <span><a href='#'>terms and conditions</a></span> before 
                    registering or accessing any materials (information) on Bullsmart.</p>
                    </div>
                   </div>
                   <hr className='hr-foot'></hr>
                   <div className='row footer-copyright'>
                    <div className='col-lg-6 col-md-6'>
                      <p>ⓒ 2022 Bullsmart. All right reserved, Made with Love ♥ in India</p>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                     <div className='social-menu'>
                      <ul className='socillist'>
                        <li><a href='#'><i class="fa fa-facebook-f"></i></a></li>
                        <li><a href='#'><i class="fa fa-youtube-play"></i></a></li>
                        <li><a href='#'><i class="fa fa-twitter"></i></a></li>
                        <li><a href='#'><i class="fa fa-linkedin"></i></a></li>
                        <li><a href='#'><i class="fa fa-instagram"></i></a></li>
                      </ul>
                     </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;