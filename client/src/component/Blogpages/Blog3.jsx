import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Blog3.css"
import investment from "../Images/blog-img3.png"

export const Blog3 = () => {
    useEffect(() => {
        window.scrollTo(0,0)
          }, [])
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
    sessionStorage.setItem("blog3", JSON.stringify(comment))
    }
    
    return (
        <>
            <div className="container">
                <div className="blog3_head">
                    <h1>Mutual Funds Terminologies: Your Complete Guide</h1>
                </div>
                <div className="blog3_body">
                    <p><strong>Intro: </strong>There are a plethora of terms and acronyms that you need to know if you want to understand the world of mutual funds. It’s not just about understanding the meaning of these terms, but also about where and how they are used in the real world. If you are someone who wants to invest in mutual funds or is planning to do so in the near future, it is important that you understand these terminologies well. This article will explain everything that you need to know about mutual fund terminology in India.</p>
                    <div className='invesment_img'>
                        <img src={investment} alt="" />
                        <p></p>
                    </div>
                    <div>
                        <p>Boom shakalak! Let’s get started.</p>
                        <p>There are a plethora of terms and acronyms that you need to know if you want to understand the world of mutual funds. It’s not just about understanding the meaning of these terms, but also where and how they are used in the real world. If you are someone who wants to invest in mutual funds or is planning to do so in the near future, it is important that you understand these terminologies well. This article will explain everything that you need to know about mutual fund terminology in India.</p>
                    </div>
                    <br className='br_display' />
                    <br className='br_display' />
                    <br className='br_display' />
                    <div>
                        <h2 id='color_h2'><strong>What is Mutual Fund Terminology?</strong></h2>
                        <br className='br_display' />
                        <p>All the concepts and terminologies explained in this article play an important role in the world of mutual funds. In simple words, mutual fund terminologies are the terms related to the mutual fund industry. Mutual funds are a collective investment where money from various investors is pooled together to create a large sum of money, which is then invested in stocks, bonds, money market instruments, or any other asset class depending on the type of mutual fund being discussed.</p>
                        <p>
                            The money that investors put into a mutual fund is called the corpus. This corpus is then invested in the asset class of the mutual fund. Mutual funds are managed by fund managers who decide where the corpus is invested and in what proportions. The investors then receive a portion of the profits from the fund manager based on the proportion of their investment in the fund.
                        </p>
                    </div>
                    <div>
                        <h2 id="color_h2">
                            <strong>AMC</strong>
                        </h2>
                        <h2 id="color_h2">
                            An AMC is a firm that manages the funds of investors. The organization combines all of the money from various participants and invests it in various assets based on the mutual fund’s investment objectives. An AMC does more than merely manage mutual funds. They also work with pension plans and hedge funds.
                        </h2>
                        <br className='br_display' />
                        <p>
                            <strong>Corpus</strong>
                        </p>
                        <br className='br_display' />
                        <p>
                            The total amount of money invested in a certain plan by all investors is referred to as the corpus. Consider the following scenario: an equity fund has 100 units. Each item costs Rs 10. The fund’s total corpus is Rs 1,000. If two additional investors each put Rs 200 in the fund, the corpus will rise to Rs 1,200.
                        </p>
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />
                        <h2 id="color_h2">
                            <strong>Asset Class</strong>
                        </h2>
                        <p></p>
                        <p>Asset class refers to the type of investment in which the fund will be invested. All mutual funds are broadly categorized as equity funds or debt funds. These are further classified into various sub-categories like <strong> large-cap funds, mid-cap funds, small-cap funds, hybrid funds, commodity funds,</strong> and so on. These asset classes vary between the types of funds that are available in the market.</p>
                        <p>
                            The asset class of a mutual fund is determined by the fund’s investment objective. The fund’s investment objective is discussed in detail further in this article. You should remember that the asset class of a mutual fund will depend on the investment objective because the fund’s investment objective determines the percentage of the fund’s corpus that will be invested in what type of investment.
                        </p>
                        <h2 id="color_h2">
                            <strong>Portfolio</strong>
                        </h2>
                        <h2 id="color_h2">
                            A portfolio is the total number of investments held by a single individual. For example, if an individual has invested in five mutual funds, his portfolio would consist of these funds. At the same time, if you only invested in one fund, your portfolio would only consist of one mutual fund.
                        </h2>
                        <h2 id="color_h2">
                            <strong>Benchmark Return</strong>
                        </h2>
                        <p>Benchmark return is the return on the fund’s investment objective. It is the minimum amount that the fund manager expects to earn from the investment objective. The return is based on the performance of the asset class that the fund invests in. For example, if a hybrid fund is expected to earn 16% return in a given year, then the benchmark return of the fund is 16%. Any amount earned above 16% is credited to the fund manager.</p>
                        <p>Note that the benchmark return is not guaranteed by the fund manager. Instead, it is an expectation that the fund manager has. You should keep in mind that the benchmark return varies based on the investment objective of the fund. So it is important that you find out the fund’s investment objective before investing in it.</p>

                        <h2 id="color_h2">
                            <strong>Fungibility</strong>
                        </h2>
                        <p>Fungibility refers to the liquidity of the mutual fund. Liquidity refers to the ease with which securities can be bought and sold without causing abnormal price fluctuations. If a fund is highly liquid, it means that you can easily sell your units in the fund. A fund with a high degree of liquidity is one that you can sell very quickly without affecting the value of your investment.</p>
                        <p>If you sell a fund whose units are highly liquid, you don’t have to wait for a very long time. This is important because if you sell a less liquid fund, you may have to wait for a very long time before you are able to sell it at the price that you want.</p>

                        <h2 id="color_h2">
                            <strong>Mutual Fund Holding Periods</strong>
                        </h2>
                        <p>Mutual funds usually don’t work the same way as stocks. You generally don’t buy and sell mutual funds on a daily basis. You invest a certain amount in the fund and then forget about it until you are ready to withdraw the money. Different types of mutual funds have different holding periods. You should make sure that you understand the holding period of the mutual fund that you are investing in.</p>
                        <p>The holding period of a mutual fund is the period during which the fund manager will hold the securities that the fund has invested in before selling them. While the fund manager will hold the securities, you will earn the profits that are generated by the portfolio of the fund.</p>

                        <h2 id="color_h2">
                            <strong>Net Asset Value (NAV)</strong>
                        </h2>
                        <p>Whenever you decide to buy or sell units of a mutual fund there is a NAV for the fund. The NAV is the price at which the units of the fund are being sold. A fund’s NAV is calculated by taking into account the total assets of the fund and the total liabilities of the fund. The NAV is calculated on a daily basis.</p>
                        <p>If you decide to buy units of a mutual fund, you will have to pay the current NAV of the fund. The NAV of the fund will decide the price at which you have to buy the units of the fund. If you decide to sell your units of a mutual fund, you will get the NAV of the fund. The NAV of the fund will decide the price at which you have to sell your units. The NAV of a mutual fund changes every day. This is because the NAV of a fund is calculated based on the total assets and liabilities of the fund on that particular day. This means that a fund’s NAV can be different on different days.</p>

                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />

                        <h2 id="color_h2">
                            <strong>Units</strong>
                        </h2>
                        <h2 id="color_h2">Just as an investor’s equity investment in a corporation is represented in the number of shares, or debt investment is represented in the number of bonds or debentures, each investor’s holding in a mutual fund is represented in units calculated from the amount invested. Each unit represents one share of the fund. When the price of a unit in XYZ Equity fund is Rs. 10, A invests Rs. 5000 and B invests Rs. 10,000. The number of units assigned is determined by the amount invested or the price per unit.</h2>
                        <h2 id="color_h2">
                            <strong>A </strong>
                            Rs. 5000/Rs. 10 = 500 units
                        </h2>
                        <p><strong>B</strong> Rs. 10000/ Rs. 10 = 1000 units</p>
                        <h2 id="color_h2">
                            <strong>SIP</strong></h2>
                        <h2 id="color_h2">STP, one of the most often used mutual fund terminology, refers to a system in which a large payment is invested in one fund and a predetermined amount is moved at regular intervals to a separate fund of the same AMC. For example, if you have a lump sum and want to invest it in stocks, you can do it gradually rather than all at once.</h2>
                        <p>You put the money in a debt fund and gradually move it to your preferred equities fund. If the market is performing strongly, STP is performed from debt funds into stocks. If, on the other hand, it is doing poorly, the opposite path is taken.</p>

                        <h2 id="color_h2">
                            <strong>SWP</strong>
                        </h2>
                        <p>It is another another frequent mutual fund phrase and approach used by investors to supplement their current income or overcome liquidity constraints. You can withdraw a set or variable amount on a predetermined date each month, quarterly, or semi-annually, depending on your needs.</p>
                        <p> you may also use SWP, If you are getting close to a goal. For example, if you have invested in equities funds to establish a corpus for your child’s further education, you can methodically withdraw as you approach the objective to prevent the corpus from taking a hit if the markets turn upset.</p>
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />

                        <h2 id="color_h2">
                            <strong>NFO</strong>
                        </h2>

                        <p>A new fund order, or NFO, is an AMC’s initial offer of a plan. It is comparable to an IPO in that it assists the AMC in raising funds. It is important to note that you may only subscribe to an NFO for a limited time and that it operates on a first-come, first-served basis.</p>
                        <p>NFO can refer to both open-ended and closed-ended funds. Open-ended funds are formally introduced following the NFO. Closed-ended funds, on the other hand, are not permitted to enter or quit beyond the NFO period. You will have to wait until the fund matures to do so.</p>

                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />

                        <h2 id="color_h2">
                            <strong>FMP ( Fixed Maturity Plans )</strong>
                        </h2>
                        <p>Closed-ended funds are referred to as fixed maturity plans, or FMPs. It signifies that the plan is only open for a limited time after which no more investments may be made. FMPs cannot be redeemed before their maturity date.</p>
                        <p>FMPs are issued for a term of more than 365 days, and they should not be confused with bank fixed deposits. The goal of these strategies is to provide consistent returns over a set length of time. They reduce the risk by default investing in high-rated assets. Now that you understand what FMPs are, you may invest in them to achieve your objectives.</p>

                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />
                        <br className='br_display' />

                        <h2 id="color_h2">
                            <strong>Load</strong>
                        </h2>
                        <p>An entry load is an amount that you pay when you decide to purchase units of a mutual fund.</p>
                        <p>The exit load is the amount that you will be charged if you decide to sell your units of a mutual fund before the specified period. This specified period can vary depending on the fund you are investing in. It is important to keep in mind that an exit load is different from an entry load.</p>
                        <p>The exit load is calculated as a percentage of the value of your entire investment in the fund. It is important that you understand the exit load because it will determine the amount of money that you will have to pay if you decide to sell your units of the fund before the specified period.</p>
                        <h2 id="color_h2">
                            <strong>Redeemable Mutual Funds VS Non-Redeemable Mutual Funds</strong>
                        </h2>
                        <p>Redeemable mutual funds are mutual funds whose units can be redeemed at a specific time. In other words, investors can redeem their units at the fund’s NAV on a specified date. You can decide to redeem your units at the fund’s NAV even before the fund’s maturity date. The maturity date is the date on which the fund will shut down and will no longer accept new investors. Redeemable mutual funds are open-ended funds that can be redeemed by investors at any time. Conversely, non-redeemable mutual funds are closed-ended funds that don’t have any redemption clause. This means that the investors can’t redeem their units from the fund at any time.</p>
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

            </div>
        </>
    )
}
