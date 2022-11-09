import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { AdminDash } from './AdminDash';
import "./ViewNews.css"
export const ViewNews = () => {
    const [newsdata, setNewsdata] = useState([])
    useEffect(() => {
        axios.get("/api/auth/viewnews").then((res) => {
            console.log(res.data.result);
            setNewsdata(res.data.result)
            newsdata.reverse()
        })
    }, [])

    return (
        <>
            <div className="flex_viewnews">
                <AdminDash />
                <div className="container">
                    <div className='newsbox'><h3>News</h3></div>
                    <div className='imgcardnews'>
                        {newsdata.slice(0).reverse().map((items, index) => {
                            return (
                                <div className="card mt-3" style={{ "width": "300px" }}>

                                    <img class="card-img-top cardimgnews" src={items.url} alt="Card image" />
                                    <div class="card-body">
                                        <h4 class="card-title">{items.title}</h4>
                                        <p class="card-text" dangerouslySetInnerHTML={{ __html: items.description }}></p>

                                    </div>
                                    <div className='card-footer'>
                                        <p>{items.date}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
