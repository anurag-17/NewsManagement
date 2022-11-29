import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import "./Addcareer.css"
import { AdminDash } from './AdminDash'

export const Addcareer = () => {
    const [careerdata, setCareerdata] = useState({
     title:"",
     category:"",
     location:"",
     link:""
    })
    const input_handler = (e) =>{
     setCareerdata({...careerdata, [e.target.name]: e.target.value})
    }
const form_handler = async(e) =>{
    e.preventDefault()
    axios.post("/api/auth/addcareer", careerdata, { headers: { "Content-Type": "application/json" } }).then((res)=>{
        console.log(res.data);
        // alert(res.data)
        // alert(res.data)
    })
    setCareerdata({
        "title":"",
        "category":"",
        "location":"",
        "link":""
    })
}
   

    return (
        <>
        <div className="flex_career">
            <AdminDash/>
            <div className="container">
                <h2 style={{ fontSize: "1.5rem" }} className="mt-4">Add Job</h2>
                <div>
                    <form action="" onSubmit={form_handler}>
                        <div className="form-group">
                            <label htmlFor="title">Job Title</label>
                            <input type="text" className="career_inp form-control " name='title'  placeholder="Required"  onChange={input_handler} value={careerdata.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Job Category</label>
                            <input type="text" className="form-control career_inp" name='category'  placeholder="Required"  onChange={input_handler} value={careerdata.category}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Job Location</label>
                            <input type="text" className="form-control career_inp" name='location'  placeholder="Required"  onChange={input_handler} value={careerdata.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Job Link</label>
                            <input type="text" className="form-control career_inp" name='link'  placeholder="Required"  onChange={input_handler} value={careerdata.link} />
                        </div>
                      
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}
