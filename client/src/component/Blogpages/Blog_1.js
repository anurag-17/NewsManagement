import React, { useEffect } from 'react'
import "./Blogdetail.css"
import blog1 from "../Images/blog_1.jpg"

export const Blog_1 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
          }, [])
  return (
    <>
    <div className="container blog-main">
    
<section className='upper-section'>
    <h1 className='blog-heading'>SEBI Chairperson spoke to Fintech Participants at the Global Fintech Fest (GFF 2022)</h1>
    <p className='mt-4'> <strong>Smt. Madhabi Puri Buch,</strong> the chairperson of the Securities and Exchange Board of India, delivered the keynote addressing Fintech participants at the Global Fintech Fest 2022 on Indian Markets: Strengthening the Vision (SEBI).</p>
    <img src={blog1} alt="sebi chairperson" />

    <h2 className='second-heading mb-3'>The following are some of the important points she made:</h2>
    <p>Once you’ve got that taken care of, it’s time to start investing. But don’t go in too deep right away. Start small and see how it goes. You can always add more money later on if you’re feeling confident</p>
    <p>India is thriving because of the startup eco-capacity systems to drive innovation</p>
    <p>The characteristics that make the Fintech world unique are – ability to support financial inclusion; the Ability to radically reshape the landscape of financial services;</p>
    <p>While solving a consumer’s unmet demand, there is a risk of a regulatory gap in regulating such a product or service because the product or service is new and unique. This is because India uses a hybrid paradigm combining principle-based and rule-based laws, focusing on the latter.</p>
 
 <div className="lowersection">
 <h2 className='second-heading mb-2'>
 Fintech companies should consider the following principles while developing their business models:
 </h2>
 <ul className='bloglist'>
    <li> If there is no existing regulation on a certain issue, they should consider what basic tenets a regulator would follow when they ultimately show up.</li>
    <li><strong>Anonymity</strong> – In the financial world, anonymity is not an option.</li>
    <li> <strong>Transparency</strong>  – It is the responsibility of regulators to ensure that investors make informed decisions and are not misled by insufficient disclosure:</li>
    <li> <strong>The regulator’s primary</strong> goal is to support your business model and align with you when it comes to financial inclusion and operating at the bottom of the pyramid.</li>
    <li> <strong> Abhimanyu Complex</strong> – if the business strategy allows clients to enter but makes it difficult for them to exit, we don’t like it – putting exit barriers is not permitted.</li>
    <li> <strong>Data is a public benefit and is for public infrastructure;</strong>  no private individual can claim ownership of this infrastructure; it will be assured that it is available without charge. Infrastructure for innovation (like Aadhar, UPI account aggregator) the rails are for the public good; private innovation must build upon these rails.</li>
    <li><strong>Structural Vulnerability</strong> – Make it easier for investors to transfer money and securities directly to the exchange or issuer in the case of an initial public offering (IPO). The secondary market structure proposed by ASBA (Application Supported by Blocked Amount) is being discussed.
</li>
 </ul>

 </div>
</section>

<section>
    <h2 style = {{fontSize:"40px",}}>Leave a Reply</h2>
    <p>Your email address will not be published. Required fields are marked *</p>

<form style = {{width:"inherit"}} action="" className="">
   <div className='blog-form'>
    <div>
     Comment*
    </div>
<textarea name="" id="" cols="50" rows="10"></textarea>
    <div>
    Name* 
    </div>
    <input type="text"/>

    <div>Email*</div>
    <input type="email" />

    <div>Website</div>
    <input type="text" />
    </div>
<div className='ckh_blog1'>
<input type="checkbox"/>  Save my name, email, and website in this browser for the next time I comment.
</div>
<div className="sub-btn">
<input type="submit" value="Post Comment"/>
</div>

  </form>


</section>


    </div>
    </>
  )
}
