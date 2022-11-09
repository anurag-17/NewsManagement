import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./Admin.css"
export const Admin = () => {
    const [admindata, setAdmindata] = useState({
        "email": "",
        "password": ""
    })
    const navigate = useNavigate()
    const input_handler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdmindata({ ...admindata, [name]: value })
    }
    const form_handler = async(e) => {
        e.preventDefault()
        await axios.post("/api/auth/admin", admindata, { headers: { "Content-Type": "application/json" } }).then((res)=>{
            console.log(res.data.token);
            localStorage.setItem("newstoken", JSON.stringify(res.data.token))
            navigate("/addnews")

         })
    }
    return (
        <>
            <div className="container">
                <h3>Admin</h3>
                <form className="was-validated" onSubmit={form_handler}>
                    <div className="mb-3 mt-3">
                        <label for="uname" className="form-label">Username:</label>
                        <input type="email" className="form-control aa" id="uname" placeholder="Enter username" name="email" onChange={input_handler} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control aa" id="pwd" placeholder="Enter password" name="password" onChange={input_handler} required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <input type="submit" value="Login" className='btn btn-primary' />
                </form>
            </div>
        </>
    )
}
