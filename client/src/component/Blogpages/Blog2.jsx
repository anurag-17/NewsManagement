import React from 'react'
import "./Blog2.css"
import goals from "../Images/goals2.png"
import wallet from "../Images/wallets23.png"
import risk from "../Images/risk23.png"
import { useState } from 'react'

export const Blog2 = () => {
const [comment, setComment] = useState({
    message: "",
    uname: "",
    uemail:"",
    uweb:""
})
const Input_handler = (e) =>{
  setComment({...comment, [e.target.name]: e.target.value})
}

const form_handler = (e) =>{
e.preventDefault();
sessionStorage.setItem("blog2", JSON.stringify(comment))
}


    return (
        <>
            <div className="container">
                <div className="blog2_head">
                    <h2>Things to know before you start investing</h2>
                </div>
                <div className="blog2_body">
                    <p><strong>Intro: </strong> When it comes to investing, there’s a lot of information out there. It can be overwhelming, especially if you’re new to the game.</p>
                    <p>Before you start investing, there are a few basics you should know. In this post, we’ll cover the most important things to understand before you start risking your hard-earned money</p>
                    <p>We’ll go over topics such as: why you should invest, the different types of investments available, and what to watch out for. This article will explain everything that you need to know before you start investing</p>
                    <div>
                        <strong><p>STRUCTURE</p></strong>
                        <ul>
                            <li className='dot_li'>Define Your Goals</li>
                            <li className='dot_li'>Know the available investing instrument</li>
                            <li className='dot_li'>Decide How much risk You’re Willing to Take</li>
                            <li className='dot_li'>Research Investments Before You Buy</li>
                        </ul>
                    </div>
                    <div>
                        <strong><p>Things to know before you start investing</p></strong>
                        <p>When it comes to investing, there’s a lot of information out there. It can be overwhelming, especially if you’re new to the game.</p>
                        <p>Before you start investing, there are a few basics you should know. In this post, we’ll cover the most important things to understand before you start risking your hard-earned money.</p>
                        <p>We’ll go over topics such as: why you should invest, the different types of investments available, and what to watch out for.</p>
                    </div>
                    <div className='blog2_img'>
                        <p><strong>Define Your Goals</strong></p>
                        <p>&nbsp;</p>
                        <img src={goals} alt="" />
                    </div>
                    <figcaption>
                        Before you start investing, you need to define your goals.
                        <br className='br_display' />
                        <br className='br_display' />
                        <strong><em>&nbsp;</em></strong>
                        <strong><em>What are you trying to achieve?</em></strong>
                        <br className='br_display' />
                        <strong><em>Do you want to save for retirement?</em></strong>
                        <br className='br_display' />
                        <strong><em>A down payment on a house?</em></strong>
                        <br className='br_display' />
                        <strong><em>College tuition for your kids?</em></strong>
                        <br className='br_display' />
                        <br className='br_display' />
                        <p>Each goal will require a different investment strategy, so it’s important to be clear about what you’re aiming for. And don’t forget to factor in how much risk you’re willing to take on.</p>
                        <p>
                            <strong>Know the available investing instruments</strong>
                            <br className='br_display' />
                            <br className='br_display' />

                            <span className='font_i'>When you’re looking to invest your money, it’s important to understand the different types of investments available. That’s why we’ve put together this list of the most common investing instruments.</span>
                            <br className='br_display' />
                            <span className="font_i">Each one has its own benefits and risks, so it’s important to do your research and understand how they work before investing. But this is a good place to start.</span>
                            <br className='br_display' />
                            ● <strong>Saving Account</strong>
                            <br className='br_display' />
                            <span className="font_i"> When it comes to saving for your future, you have a few different options available to you. But one of the most popular choices is a savings account.</span>
                            <br className='br_display' />
                            <span className="font_i">A savings account is a type of account that lets you deposit money, and then earn interest on that money. The interest rates can vary, but typically they’re higher than what you’d get from a checking account.</span>
                            <br className='br_display' />
                            ● <strong>Fixed Deposits</strong>
                            <br className='br_display' />
                            <span className="font_i"> A fixed deposit, sometimes called a time deposit, is a low-risk investment option offered by banks. When you open a fixed deposit account, you agree to leave your money with the bank for a predetermined period of time (usually from one to five years).In return, the bank pays you a higher interest rate than you would get on a regular savings account.</span>


                        </p>
                    </figcaption>
                    <div className='blog2_img'>
                        <p></p>
                        <img src={wallet} alt="" />
                        <p></p>
                    </div>
                    <div>
                        <h2>
                            ● <strong>Bonds</strong>
                        </h2>
                        <p>
                            When you’re looking to invest your money, you’ll come across all sorts of different instruments. Among them are corporate bonds, government bonds, municipal bonds, and convertible bonds.
                        </p>
                        <p>
                            Bonds are essentially loans that are made to a company or government. In return for this loan, the company or government issuer agrees to pay the bondholder periodic interest payments and to repay the loan amount at maturity.
                        </p>

                        <h2>
                            ● <strong>Debentures</strong>
                        </h2>
                        <p>When you’re looking to invest your money, you’ll come across all sorts of different investment instruments. One of those is a debenture.</p>
                        <p>A debenture is a type of loan that’s offered by a company. It’s unsecured, which means that the company doesn’t have to put up any collateral. And the interest rates are usually pretty high, because there’s a higher risk for the lender.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                ● <strong>Stocks</strong>
                            </li>
                        </ul>
                        <p>
                            When you’re looking to invest your money, you have a few different options to choose from. You can buy stocks, which give you a share in the ownership of a company. Many Investors are interested in stocks because of the potential for higher returns, the ability to collect income through dividends, and its liquidity.
                        </p>
                        <ul>
                            <li>
                                ● <strong>Real estate</strong>
                            </li>
                            <li><p>Real estate investing involves purchasing buildings or land to seek financial gain. The financial gain can come through income, appreciation, or a combination of both. Real estate investing has created many fortunes and is commonly pursued by investors that want to diversify.</p></li>
                        </ul>
                    </div>
                    <div className='blog2_img'>
                        <h2>
                            <strong>Decide How much risk You’re Willing to Take</strong>
                        </h2>
                        <img src={risk} alt="" />
                        <p>When you’re starting out in the world of investing, one of the most important things to figure out is how much risk you’re willing to take. Because if you’re not comfortable with risk, then you’re going to want to stick with safer investments.</p>
                        <p>But if you’re OK with a bit more risk, then you can explore different options and possibly see bigger gains down the road. It’s all about finding the right balance for you.</p>
                        <p>And don’t forget that there’s always the option of diversifying your portfolio, which can help reduce your risk level overall.</p>
                        <p><strong>Research Investments Before You Buy</strong></p>
                        <p>When you’re starting out in the world of investing, it’s important to do your research before you buy. That means taking the time to learn about the different types of investments and how they work.</p>
                        <p>It’s also crucial to know what kind of investor you are. Are you a risk-taker or do you prefer a more conservative approach? What’s your time horizon? How much money can you afford to lose?</p>
                        <p>These are all important questions to ask yourself before you make your first investment</p>
                    </div>
                    <br className='br_display' />
                    <br className='br_display' />
                    <br className='br_display' />
                    <p>You’ve decided that it’s time to start investing. That’s a great decision! But before you start investing, there are a few more things you should know.</p>

                </div>

                <section>
                    <h2 style={{ fontSize: "40px", }}>Leave a Reply</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    <form style={{ width: "inherit" }} action="" onSubmit={form_handler} className="blog-form">
                        <div>
                            Comment*
                        </div>
                        <textarea name="message" id="" cols="50" rows="10" onChange={Input_handler}></textarea>
                        <div>
                            Name*
                        </div>
                        <input type="text" name='uname' onChange={Input_handler}/>

                        <div>Email*</div>
                        <input type="email" name='uemail' onChange={Input_handler}/>

                        <div>Website</div>
                        <input type="text" name='uweb' onChange={Input_handler}/>
                        <p>
                            <div className='ckh_blog1'>
                                <input type="checkbox"/>Save my name, email, and website in this browser for the next time I comment.
                            </div>

                        </p>
                        <button type="submit" className='comment_btn'>Post Comment</button>
  
                    </form>


                </section>


            </div>




        </>
    )
}
